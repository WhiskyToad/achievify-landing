<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import HeroCards from '$lib/components/HeroCards.svelte';
	import PricingCards from '$lib/components/PricingCards.svelte';
</script>

<div>
	<div class="">
		<div class="">
			<Hero />
		</div>
	</div>
	<div class="container mx-auto">
		<Stats />

		<div class="my-10">
			<HeroCards />
		</div>

		<div class="my-10">
			<PricingCards />
		</div>
	</div>
</div>
