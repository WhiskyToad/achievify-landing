import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { passwordSchema } from './passwordSchema';

export const load: PageServerLoad = async ({ locals: {  session } }) => {
  
  if (!session) {
    throw redirect(303, '/')
  }
  const form = await superValidate(zod(passwordSchema));
  return { form };
}

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(passwordSchema));
    if (!form.valid) {
      // Again, return { form } and things will just work.
      return fail(400, { form });
    }
    const password = form.data.password
    await supabase.auth.updateUser({password})
    throw redirect(303, '/auth/change_password/successful')
  },
}
