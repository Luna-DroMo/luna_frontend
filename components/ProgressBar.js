export default function ProgressBar({percentage}) {
    const validatedPercentage = isNaN(Number(percentage))
        ? 0
        : Math.min(Math.max(Number(percentage), 0), 100)

    console.log("p-->", validatedPercentage)
    console.log(percentage)

    return (
        <div className='p-4 mt-3 mb-6 items-center text-center rounded-lg bg-lightpurple flex flex-col gap-1'>
            <p className='mb-3 text-base text-center'>Profilstatus</p>
            <img src='/sidebarProgressPlaceholder.png' className='w-24 inline-block'></img>
            <div className='w-32 h-3 bg-white m-2 rounded-full'>
                <div
                    className='bg-orange h-3 rounded'
                    style={{width: `${validatedPercentage}%`}}
                ></div>
            </div>
            <p className='text-large'>{validatedPercentage}% completed!</p>
        </div>
    )
}
