import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Home from '@/components/Home'
import Technologies from '@/components/Technologies'
import Certifications from '@/components/Certifications'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Index() {
  return (
    <>
      <Head>
        <title>Cristian Baronetto</title>
      </Head>
      <NavBar />
      <main>
        <Home />
        <Technologies />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
