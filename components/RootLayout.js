import Sidebar from "./Sidebar"

export default function RootLayout({
    show_main_links = true,
    show_billboard = true,
    show_progress_bar = false,
    percentage,
    children
}) {
    console.log("RootLayout percentage:", percentage) // Add this log to check

    return (
        <>
            <Sidebar
                show_main_links={show_main_links}
                show_billboard={show_billboard}
                show_progress_bar={show_progress_bar}
                percentage={percentage}
            />

            <div className='mainbody drop-shadow-sm'>{children}</div>
        </>
    )
}
