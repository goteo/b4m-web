<script lang="ts">
    import Carousel from "../Carousel.svelte";
    import CampaignCard from "./CampaignCard.svelte";

    import type { Campaign } from "../../types/campaign";

    let { campaigns = [] }: { campaigns: Campaign[] } = $props();
</script>

<Carousel itemsPerGroup={3} gap={24} showDots={false}>
    {#each campaigns as campaign}
        <CampaignCard size="small" {campaign} />
    {/each}
</Carousel>
