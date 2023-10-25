import Sidebar from "./Sidebar"

export default function RootLayout({show_main_links=true, show_billboard=true,  children }) {
  // Probs doesnt need to be here. Just for testing. Unsure how to do this properly at this point.


  return (
    
    <>
      <Sidebar show_main_links = {show_main_links} show_billboard={show_billboard}/>

      <div className="mainbody">
        {children}</div>
        
    </>

  )
}

