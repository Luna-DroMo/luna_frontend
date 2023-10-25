export function Button({ text, highlighted, href="#" }) {
    if (highlighted){
        return (
            <a href={href}>
            <button className="border border-lunapurple bg-lunapurple rounded-full w-44 h-10 px-4 text-white text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple ">{text}</button>
            </a>
        )
    } else {
        return (
            <a href={href}>
            <button className="border border-lunapurple rounded-full w-44 h-10 px-4 text-lunapurple text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen">{text}</button>
            </a>
        )
    }
}

export function SmallButton({ text, highlighted, href="#"}) {
    if (highlighted){
        return (
            <a href={href}>
            <button className="border border-lunapurple bg-lunapurple rounded-full w-44 h-6 px-4 text-white text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple ">{text}</button>
            </a>
        )
    } else {
        return (
            <a href={href}>
            <button className="border border-lunapurple rounded-full w-44 h-6 px-4 text-lunapurple text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen">{text}</button>
            </a>
        )
    }
}

export function FormButton({ text, highlighted, formAction}) {
    if (highlighted){
        return (
            
            <button type="submit" formAction = {formAction} className="border border-lunapurple bg-lunapurple rounded-full w-44 h-10 px-4 text-white text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple ">{text}</button>
            
        )
    } else {
        return (
            
            <button type="submit" formAction = {formAction} className="border border-lunapurple rounded-full w-44 h-10 px-4 text-lunapurple text-xs leading-4 hover:border-lunagreen hover:bg-lunagreen">{text}</button>
            
        )
    }
}
