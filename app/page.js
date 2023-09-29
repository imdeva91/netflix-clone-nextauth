"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import Login from '@/components/Login'

export default function Home() {
  const {data:session} = useSession()

  if(!session) return <Login />
  return (
    <h1>hello</h1>
  )
}
