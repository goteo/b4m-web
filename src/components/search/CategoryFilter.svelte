<!--
Category Filter Component
Interactive category selection using existing categories from utils/categories.ts
Implements active/inactive pill states matching Figma design
-->
<script lang="ts">
    import { locale, t } from "../../i18n/store";
    import {
        apiCategoriesGetCollection,
        apiCategoriesIdGet,
        type Category,
    } from "../../openapi/client";
    import { client } from "../../openapi/client/client.gen";
    import { apiCategoriesIdGetUrl } from "../../openapi/client/paths.gen";
    import { extractId } from "../../utils/extractId";
    import CategorySelect from "../library/CategorySelect.svelte";

    interface Props {
        selectedIds?: string[];
        onCategoryChange?: (categories: string[]) => void;
        showLabel?: boolean;
        "data-testid"?: string;
    }

    let { selectedIds = [], onCategoryChange, showLabel = true }: Props = $props();

    let categories = getAvailableCategories();
    let selected = $state<Category[]>([]);

    $effect(() => {
        Promise.all(
            selectedIds.map((id) => {
                const iri = client.buildUrl({ url: apiCategoriesIdGetUrl, path: { id } });

                return getCategory(iri);
            }),
        ).then((categories) => (selected = categories));
    });

    async function getAvailableCategories(): Promise<Category[]> {
        const { data } = await apiCategoriesGetCollection();

        if (!data) {
            return [];
        }

        return data;
    }

    async function getCategory(iri: string): Promise<Category> {
        const { data: category } = await apiCategoriesIdGet({
            headers: { "Accept-Language": $locale },
            path: { id: extractId(iri)! },
        });

        return category!;
    }
</script>

<div class="w-full">
    {#if showLabel}
        <h3 class="mb-6 text-base font-bold text-black">
            {$t("pages.search.filters.categoryLabel")}
        </h3>
    {/if}

    {#await categories then categories}
        <CategorySelect
            bind:selected
            selectedIds={selected.map((s) => s.id)}
            options={categories}
            onchange={(selected) => onCategoryChange?.(selected.map((o) => o.id))}
        />
    {/await}

    {#if selected.length > 0}
        <div class="mt-4 text-sm text-black opacity-70">
            {$t("pages.search.filters.selectedCategories", { count: selected.length })}
        </div>
    {/if}
</div>
