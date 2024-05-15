<script>
	import googlePlay from '$lib/assets/google-play-badge.png'
	import appStore from '$lib/assets/app_store.svg'
</script>

<div
	class="hero h-[100vh] lg:h-[45rem] shadow-lg"
>
	<div class="hero-overlay bg-opacity-70" />
	<div class="hero-content text-neutral-content">
		<div class="z-60 drop-shadow-lg text-center">
			<div class="mb-5 text-7xl font-semibold">Turning goals into reality</div>
			<div class="mb-5 text-7xl font-semibold">One task at a time</div>
			<div class="flex gap-4 justify-center">
				<button ><img class="h-16" src={googlePlay} alt={'google play store'}/></button>
				<button ><img class="h-11" src={appStore} alt={'apple store'}/></button>
			</div>
		</div>
	</div>
</div>