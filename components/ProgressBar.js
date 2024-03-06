export default function ProgressBar({percentage}) {
  console.log("p-->", percentage)
  const validatedPercentage = Math.min(Math.max(percentage, 0), 100)
  const widthClass = `w-[${validatedPercentage}%]`
  console.log(percentage)
  return (
    <div className='p-4 mt-3 mb-6 items-center text-center rounded-lg bg-lightpurple flex flex-col gap-1'>
      <p className='mb-3 text-base text-center'>Anmeldestatus</p>
      <img
        src='/sidebarProgressPlaceholder.png'
        className='w-24 inline-block'
      ></img>
      <div className='w-32 h-3 bg-white m-2 rounded-full'>
        <div className={`bg-orange-500 h-3 rounded ${widthClass}`}></div>
      </div>
      <p className='text-large'>{Number(validatedPercentage)} completed!</p>
    </div>
  )
}
