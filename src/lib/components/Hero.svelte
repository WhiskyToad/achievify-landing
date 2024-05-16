<script>
    import googlePlay from '$lib/assets/google-play-badge.png'
    import appStore from '$lib/assets/app_store.svg'
    import hero from '$lib/assets/hero.png'
</script>

<div class="hero h-[100vh] lg:h-[35rem] shadow-lg flex items-center justify-center">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col w-full gap-20 lg:flex-row-reverse">
		  <img src={hero} class="max-w-md" alt='' />
		  <div class="text-center">
            <div class="mb-5 text-5xl font-semibold">Turning goals into reality</div>
            <div class="mb-5 text-5xl font-semibold">One task at a time</div>
            <div class="flex gap-4 justify-center pt-10">
                <button ><img class="h-16" src={googlePlay} alt={'google play store'}/></button>
                <button ><img class="h-11" src={appStore} alt={'apple store'}/></button>
            </div>
		  </div>
		</div>
	  </div>
</div>
