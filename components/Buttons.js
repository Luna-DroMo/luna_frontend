import Link from 'next/link';

export function Button({ text, highlighted, href="#" }) {
    if (highlighted){
        return (
            <Link href={href}>
            <button className="border border-lunapurple bg-lunapurple rounded-full w-44 h-10 px-4 text-white text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple ">{text}</button>
            </Link>
        )
    } else {
        return (
            <Link href={href}>
            <button className="border border-lunapurple rounded-full w-44 h-10 px-4 text-lunapurple text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen">{text}</button>
            </Link>
        )
    }
}

export function SmallButton({ text, highlighted, href="#"}) {
    if (highlighted){
        return (
            <Link href={href}>
            <button className="border border-lunapurple bg-lunapurple rounded-full w-44 h-6 px-4 text-white text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple ">{text}</button>
            </Link>
        )
    } else {
        return (
            <Link href={href}>
            <button className="border border-lunapurple rounded-full w-44 h-6 px-4 text-lunapurple text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen">{text}</button>
            </Link>
        )
    }
}

export function FormButton({ text, highlighted, formAction}) {
    if (highlighted){
        return (
            
            <button type="submit" formAction = {formAction} className="mx-3 border border-lunapurple bg-lunapurple rounded-full w-44 h-10 px-4 text-white text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple ">{text}</button>
            
        )
    } else {
        return (
            
            <button type="submit" formAction = {formAction} className="mx-3 border border-lunapurple rounded-full w-44 h-10 px-4 text-lunapurple text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen">{text}</button>
            
        )
    }
}
