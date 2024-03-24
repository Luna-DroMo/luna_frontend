export default function Person({ img, name }) {
    return (
        <div className='flex'>

            <div className='border rounded-md border-[#dddddd] inline-block flex items-center px-0 hover:bg-white hover:shadow-sm hover:shadow-lunapurple'>

                <img src={img} className='w-4 ml-1 float-left shrink fill-lunapurple' />
                <span className={'text-base text-[#4a4a4a] px-4 shrink'}>{name}</span>

            </div>

        </div>
    )
}