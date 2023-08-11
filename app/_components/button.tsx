import React from 'react'
import Image from 'next/image'

interface Props {
  bg: string
  label: string
}

export default function ButtonComponent({ bg, label }: Props) {
  return (
    <div>
      <Image src="public/new.svg" width={20} height={20} alt="icon" />
      <button className={`${bg}`}>{label}</button>
    </div>
  )
}
