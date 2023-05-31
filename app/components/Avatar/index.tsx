"use client"

import React from 'react'

import Image from 'next/image'

export const Avatar = () => {
  return (
    <Image 
      className="rounded-full"
      height="30"
      width="30"
      alt="avatar"
      src="/images/placeholder.jpg"
    />
  )
}
