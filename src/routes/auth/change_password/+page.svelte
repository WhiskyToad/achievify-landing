<script lang="ts">
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import type { SubmitFunction } from '@sveltejs/kit';
	import PasswordCriteria from '$lib/components/PasswordCriteria.svelte';
  import { superForm } from 'sveltekit-superforms';

export let data;
const { form, errors } = superForm(data.form);

  
    // const handleSubmit: SubmitFunction = async () => {

    // return async (response) => {
    //   if (response.result.type === 'success') {
    //     // goto('/');
    //   }
    // };
    // };
  </script>
  
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Reset your password
          </h1>
          <form use:enhance method='POST' class="space-y-4 md:space-y-6">
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                <input 
                type="password" 
                name="password" 
                bind:value={$form.password}
                placeholder="••••••••" 
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required={true} 
                >
                {#if $errors.password} <p class="text-red-500 text-sm mt-1">{$errors.password}</p>{/if}
            </div>
            <div>
                <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input 
                type="password" 
                name="confirmPassword" 
                bind:value={$form.confirmPassword}
                placeholder="••••••••" 
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required={true} 
                >
                {#if $errors.confirmPassword} <p class="text-red-500 text-sm mt-1">{$errors.confirmPassword}</p>{/if}
            </div>
            <PasswordCriteria />
            <button type="submit" class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  </section>