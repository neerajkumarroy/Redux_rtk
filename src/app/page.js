import Image from 'next/image'
import AddUser from './components/AddUser'
import DisplyUser from './components/DisplayUser'

export default function Home() {
  return (
    <main >
      <AddUser />
      <DisplyUser />

    </main>
  )
}
