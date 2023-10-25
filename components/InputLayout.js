import Sidebar from "./Sidebar"

export default function InputLayout({ show_main_links = true, show_billboard = true, children }) {



  return (

    <>
      <Sidebar show_main_links={show_main_links} show_billboard={show_billboard} />
      {children}

    </>

  )
}

