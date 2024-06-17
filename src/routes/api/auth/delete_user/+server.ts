import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
  const userId = url.searchParams.get('userId')

  const next = '/auth/confirm/delete_user'

  /**
   * Clean up the redirect URL by deleting the Auth flow parameters.
   *
   * `next` is preserved for now, because it's needed in the error case.
   */
  const redirectTo = new URL(url)
  redirectTo.pathname = next
  redirectTo.searchParams.delete('userId')

  const { error } = await supabase.auth.admin.deleteUser(userId ?? '', true);

  if (error) {
  redirectTo.pathname = '/auth/error'
  throw redirect(303, redirectTo)
  }

  throw redirect(303, redirectTo)
}
