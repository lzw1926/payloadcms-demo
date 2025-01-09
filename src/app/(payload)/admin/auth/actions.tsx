'use server'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cookies } from 'next/headers'

export async function login(email: string, password: string) {
  const payload = await getPayload({ config: configPromise })
  const res = await payload.login({
    collection: 'users',
    data: {
      email,
      password,
    },
    depth: 2,
  })
  const cookieStore = await cookies()
  if (!res.token) {
    throw new Error('Login failed')
  }
  cookieStore.set('payload-token', res.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires: res.exp ? new Date(res.exp * 1000) : undefined,
  })
  return res
}
