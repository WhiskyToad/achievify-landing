<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Mobile from '$lib/components/Mobile.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import HeroCards from '$lib/components/HeroCards.svelte';
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
			<Mobile />
		</div>
	</div>
</div>
