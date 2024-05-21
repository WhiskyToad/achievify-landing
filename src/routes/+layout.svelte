<script lang="ts">
	import '$lib/app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import {  invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);
	onMount(() => {
	const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<div class="bg-base-200 min-h-screen flex flex-col">
	<Nav />

	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</div>
