import Sidebar from "./Sidebar"
import Head from 'next/head'

export default function InputLayout({ show_main_links = true, show_billboard = true, children }) {



  return (

    <>
      <Head>
        <title>Luna</title>
      </Head>
      <Sidebar show_main_links={show_main_links} show_billboard={show_billboard} />
      {children}

    </>

  )
}

