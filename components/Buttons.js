import Link from "next/link"

export function Button({text, highlighted, href, type}) {
    if (highlighted) {
        return (
            <Link href={href}>
                <button className='border border-lunapurple bg-lunapurple rounded-xl w-44 h-10 px-4 text-white text-base leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple '>
                    {text}
                </button>
            </Link>
        )
    } else {
        return (
            <button className='border border-lunapurple rounded-xl w-44 h-10 px-4 text-lunapurple text-base leading-4 hover:border-lunagreen hover:bg-lunagreen'>
                {text}
            </button>
        )
    }
}

export function SmallButton({text, model, highlighted, href = "#"}) {
    if (highlighted) {
        return (
            <Link href={`registration_forms/${model.href}`}>
                <button className='border border-lunapurple bg-lunapurple rounded-xl w-44 h-6 px-4 text-white text-base leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple '>
                    {text}
                </button>
            </Link>
        )
    } else {
        return (
            <Link href={`registration_forms/${model.href}`}>
                <button className='border border-lunapurple rounded-xl w-44 h-6 px-4 text-lunapurple text-base leading-4 hover:border-lunagreen hover:bg-lunagreen'>
                    {text}
                </button>
            </Link>
        )
    }
}

export function FormButton({text, highlighted, type = "submit", onClick = null}) {
    if (highlighted) {
        return (
            <button
                type={type}
                onClick={onClick}
                className='mx-3 border border-lunapurple bg-lunapurple rounded-xl w-44 h-10 px-4 text-white text-base leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple '
            >
                {text}
            </button>
        )
    } else {
        return (
            <button
                type={type}
                onClick={onClick}
                className='mx-3 border border-lunapurple rounded-xl w-44 h-10 px-4 text-lunapurple text-base leading-4 hover:border-lunagreen hover:bg-lunagreen'
            >
                {text}
            </button>
        )
    }
}
