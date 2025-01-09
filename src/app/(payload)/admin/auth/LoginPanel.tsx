'use client'

import { Button } from '@payloadcms/ui'
import { login } from './actions'
import { useRouter, useSearchParams } from 'next/navigation'
interface LoginPanelProps {
  onLogin?: () => void
}
export function LoginPanel(props: LoginPanelProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect')
  const handleLogin = async () => {
    const res = await login('l20122005@live.com', 'pypy321')
    // const res = await login('lzw@meitu.com', '54321')
    console.log(res)
    props.onLogin?.()
    router.replace(redirect ? decodeURIComponent(redirect) : '/admin')
  }
  return (
    <Button className="w-full" onClick={handleLogin}>
      Login
    </Button>
  )
}
