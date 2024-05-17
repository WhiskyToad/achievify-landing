<script>
    export let title;
    export let cost;
    export let details;
    export let popular = false;
</script>

<div class="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
    {#if popular}
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Popular</div>
    {/if}
    <h3 class="mb-2 text-2xl font-semibold">{title}</h3>
    <div class="flex justify-center items-baseline my-8">
        <span class="mr-2 text-5xl font-extrabold">{cost}</span>
    </div>
    <!-- List -->
    <ul class="mb-8 space-y-4 text-left">
        {#each details as detail}
            <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>{detail}</span>
            </li>
        {/each}
    </ul>
</div>
