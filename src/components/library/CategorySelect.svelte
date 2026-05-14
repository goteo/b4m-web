<script lang="ts">
    import { onMount } from "svelte";

    import CategoryOption from "./Category.svelte";

    import type { Category } from "../../openapi/client";

    let {
        options,
        selected = $bindable([]),
        selectedIds = $bindable([]),
        max,
        onchange,
        error = undefined,
    }: {
        options: Category[];
        selected?: Category[];
        selectedIds?: (number | string)[];
        max?: number;
        onchange?: (selected: Category[], option: Category) => void;
        error?: string;
    } = $props();

    onMount(() => {
        const priorityOrder = ["beautiful", "sustainable", "together"];

        options = [
            ...options.sort((a, b) => {
                const aIndex = priorityOrder.indexOf(a.id);
                const bIndex = priorityOrder.indexOf(b.id);

                if (aIndex !== -1 && bIndex !== -1) {
                    return aIndex - bIndex;
                }

                if (aIndex !== -1) return -1;
                if (bIndex !== -1) return 1;

                return a.name.localeCompare(b.name);
            }),
        ];
    });

    function isSelected(option: Category): boolean {
        return selectedIds.includes(option.id);
    }

    function handleClick(option: Category): void {
        if (isSelected(option)) {
            selectedIds = selectedIds.filter((id) => id !== option.id);
        } else {
            selectedIds = selectedIds.concat(option.id);
        }

        selected = options.filter((option) => selectedIds.includes(option.id));

        onchange?.(selected, option);
    }

    function calcTagType(option: Category) {
        if (max === selectedIds.length) {
            return isSelected(option) ? "active" : "ghost";
        }

        return isSelected(option) ? "active" : "default";
    }

    function calcTagDisabled(option: Category) {
        if (max === selectedIds.length && !isSelected(option)) {
            return true;
        }

        return false;
    }
</script>

<div>
    <fieldset
        class="m-0 flex flex-wrap gap-4 border-0 p-0"
        aria-describedby={error ? "category-error" : undefined}
    >
        {#each options as option}
            <CategoryOption
                type={calcTagType(option)}
                ofCategory={option.id}
                disabled={calcTagDisabled(option)}
                onclick={() => handleClick(option)}
            >
                {option.name}
            </CategoryOption>
        {/each}
    </fieldset>
    {#if error}
        <p id="category-error" class="mt-2 ml-4 text-[12px] text-red-600" role="alert">
            {error}
        </p>
    {/if}
</div>
