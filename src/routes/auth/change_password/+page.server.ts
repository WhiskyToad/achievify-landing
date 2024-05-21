import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: {  session } }) => {

  if (!session) {
    throw redirect(303, '/')
  }
}

export const actions: Actions = {
  update: async ({ request, locals: { supabase } }) => {
    console.log('formdata')
    const formData = await request.formData()
    const password = formData.get('password') as string

    await supabase.auth.updateUser({password})
  },
}
