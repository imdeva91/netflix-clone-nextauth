"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import Login from '@/components/Login'
import Navbar from '@/components/Navbar'

export default function Home() {
  const {data:session} = useSession()

  console.log(session)

  if(!session) return <Login />
  return (
    <Navbar />
  )
}
