import Image from 'next/image'
import ButtonComponent from './_components/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ButtonComponent label="primary" bg="bg-cyan-500" />
    </main>
  )
}
