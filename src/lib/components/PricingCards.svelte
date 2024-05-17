<script>
    import PricingCard from './PricingCard.svelte';

    const pricingCards = [
        {
            title: 'Monthly',
            cost: '$5',
            details: [
                'All the features, none of the commitment',
                'Unlimited goal creation',
                'Unlimited task creation',
                'Everything in the yearly package!'
            ]
        },
        {
            title: 'Yearly',
            cost: '$50',
            details: [
                'The best value',
                'Habit insight data',
                'Constant new features',
                'Everything in the monthly package!'
            ]
        }
    ];
</script>

<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Empower Your Goals</h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Unlock your potential with Achievify's goal-setting prowess. 
                Choose between flexible monthly or annual subscriptions to embark on your journey towards success.
            </p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
            {#each pricingCards as card}
                <PricingCard {...card} />
            {/each}
        </div>
    </div>
</section>
