import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: {  safeGetSession } }) => {
  const { session } = await safeGetSession()

  if (!session) {
    throw redirect(303, '/')
  }
}

export const actions: Actions = {
  update: async ({ request, locals: { supabase, safeGetSession } }) => {
    const formData = await request.formData()

    const { session } = await safeGetSession()

    // const { error } = await supabase.from('profiles').upsert({
    //   id: session?.user.id,
    //   full_name: fullName,
    //   username,
    //   website,
    //   avatar_url: avatarUrl,
    //   updated_at: new Date(),
    // })

    throw redirect(303, '/')
  },
}
