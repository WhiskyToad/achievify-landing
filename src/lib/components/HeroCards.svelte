<script>
	import GoalsImage from '$lib/assets/goals_list.png'
	import DailyTaskImage from '$lib/assets/daily_tasks.png'
	import GoalTasksIamge from '$lib/assets/goal_tasks.png'
	import HabitsImage from '$lib/assets/habit_insights.png'
</script>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row xl:gap-32">
		<img
			alt="hero"
			src={GoalsImage}
			class="w-96 object-cover rounded-lg shadow-lg"
		/>
		<div class="text-center max-w-lg">
			<h1 class="text-3xl font-bold">Set your goals</h1>
			<p class="py-6">
				Make an easy to track list of everything you wish to achieve.
			</p>
		</div>
	</div>
</div>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row-reverse xl:gap-32">
		<img
			alt="hero"
			src={GoalTasksIamge}
			class="w-96 object-cover rounded-lg shadow-lg"
		/>
		<div class="text-center max-w-lg">
			<h1 class="text-3xl font-bold">Break it into tasks</h1>
			<p class="py-6">
				Become process orienated, break your goal into manageable tasks you can track.
			</p>
		</div>
	</div>
</div>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row xl:gap-32">
		<img
			alt="hero"
			src={DailyTaskImage}
			class="w-96 object-cover rounded-lg shadow-lg"
		/>
		<div class="text-center max-w-lg">
			<h1 class="text-3xl font-bold">See what you have to do each day</h1>
			<p class="py-6">
				Keep on track with your goals every day with our daily calendar.
			</p>
		</div>
	</div>
</div>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row-reverse xl:gap-32">
		<img
			alt="hero"
			src={HabitsImage}
			class="w-96 object-fit rounded-lg shadow-lg"
		/>
		<div class="text-center max-w-lg">
			<h1 class="text-3xl font-bold">Habit insight</h1>
			<p class="py-6">
				Use our data to help form habits and understand where you are falling short in achieving your goals
			</p>
		</div>
	</div>
</div>
