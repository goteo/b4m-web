<script lang="ts">
    import { twMerge, type ClassNameValue } from "tailwind-merge";

    import type { Snippet } from "svelte";

    const styles = {
        default: "inset-ring-1 hover:inset-ring-0 inset-ring-secondary bg-white",
        active: "bg-secondary text-primary hover:text-secondary",
        ghost: "",
    };

    const byCategory = {
        together: {
            default: "bg-together-soft hover:bg-together",
            active: "bg-together hover:bg-together text-black",
            ghost: "",
        },
        sustainable: {
            default: "bg-sustainable-soft hover:bg-sustainable",
            active: "bg-sustainable hover:bg-sustainable text-black",
            ghost: "",
        },
        beautiful: {
            default: "bg-beautiful-soft hover:bg-beautiful",
            active: "bg-beautiful hover:bg-beautiful text-black",
            ghost: "",
        },
    };

    let {
        type = "default",
        ofCategory = undefined,
        disabled = false,
        class: classes = "",
        onclick,
        children,
    }: {
        type?: keyof typeof styles;
        ofCategory?: string;
        disabled?: boolean;
        class?: ClassNameValue;
        onclick?: (event: MouseEvent) => void;
        children: Snippet;
    } = $props();

    function isKnownCategory(value: string): value is keyof typeof byCategory {
        return value in byCategory;
    }
</script>

<button
    {disabled}
    class={twMerge(
        "hover:bg-variant1 w-auto rounded-[32px] px-[16px] py-[8px] font-[700]",
        styles[type],
        ofCategory && isKnownCategory(ofCategory) ? byCategory[ofCategory][type] : "",
        classes,
    )}
    onclick={(e) => onclick?.(e)}
>
    {@render children()}
</button>
