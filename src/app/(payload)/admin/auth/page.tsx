import LoginLogo from '@/components/AdminLogin/Logo'
import { LoginPanel } from './LoginPanel'
import { MinimalTemplate } from '@payloadcms/next/templates'

export default async function Login() {
  return (
    <MinimalTemplate>
      <div>
        <LoginLogo />
        <p className="font-bold mt-10 text-center">Welcome to Pixocial CMS</p>
        <LoginPanel />
      </div>
    </MinimalTemplate>
  )
}
