'use server'

export type ContactFormState = { ok: boolean; message: string }

export async function submitContact(prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const name = formData.get('name')
  const email = formData.get('email')
  const summary = formData.get('summary')
  if (!email || typeof email !== 'string') {
    return { ok: false, message: 'Please enter your email.' }
  }
  // Optional: store in Supabase leads table or send via API
  return { ok: true, message: 'Thanks! I’ll get back within 1–2 business days.' }
}
