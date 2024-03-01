import Sidebar from "./Sidebar"

export default function RootLayout({
  show_main_links = true,
  show_billboard = true,
  show_progress_bar = false,
  percentage = 0,
  children
}) {
  // Probs doesnt need to be here. Just for testing. Unsure how to do this properly at this point.

  // Check if logged in

  return (
    <>
      <Sidebar
        show_main_links={show_main_links}
        show_billboard={show_billboard}
        show_progress_bar={show_progress_bar}
        percentage={percentage}
      />

      <div className='mainbody'>{children}</div>
    </>
  )
}
