import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

type isAuthenticated = (args: AccessArgs<User>) => Promise<boolean>

export const adminAuthenticated: isAuthenticated = async ({ req }) => {
  const isAuthenticated =
    !!req.user?.email && ['l20122005@live.com', 'lzw@meitu.com'].includes(req.user.email)
  if (!isAuthenticated) {
  }
  return isAuthenticated
}
