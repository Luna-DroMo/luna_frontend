import Sidebar from "./Sidebar"
import Head from 'next/head'

export default function RootLayout({
    show_main_links = true,
    show_billboard = true,
    show_progress_bar = false,
    percentage,
    children
}) {
    return (
        <>
            <Head>
                <title>Luna</title>
            </Head>
            <div className="overflow-hidden">
            <Sidebar
                show_main_links={show_main_links}
                show_billboard={show_billboard}
                show_progress_bar={show_progress_bar}
                percentage={percentage}
            />

            <div className='mainbody drop-shadow-sm overflow-hidden'>{children}</div>
            </div>
        </>
    )
}
