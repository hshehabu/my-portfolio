import { createServerSupabaseClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const supabase = await createServerSupabaseClient()
  await supabase.auth.signOut()
  const url = new URL(request.url)
  return NextResponse.redirect(new URL('/admin/login', url.origin), { status: 302 })
}
