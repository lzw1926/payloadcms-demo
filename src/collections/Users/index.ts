import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { adminAuthenticated } from '@/access/adminAuthenticated'
export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: adminAuthenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email', 'createdAt'],
    useAsTitle: 'name',
    hidden: ({ user }) => {
      return user?.email !== 'lzw@meitu.com'
    },
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
