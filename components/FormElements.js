export function InputRow({ type = "text", maintext = "Placeholder Main Text", subtitle = "Placeholder Subtitle Text", options = "" }) {


    return (
        <div className="flex items-center w-full my-2">
            <div className='flex-grow'>
                <p >{maintext}</p>
                <p className="subtitle text-text-grey">{subtitle}</p>
            </div>
            <FormInput type={type} options={options} name={maintext} />
        </div>

    )
}

export function FormInput({ type, options, name }) {
    /* Styled Form Inputs */
    if (type === "range") {
        return (
            <input className="h-12" type={type} name={name} />
        )
    } else if (type === "radio") {
        //const optionslist = options.split(' ');
        return (
            <>
                {options.map((option) => (
                    <>
                        <label className='mx-5 text-text-grey'> {option} </label>
                        <input key={option} id={name + option} name={name} type={type} />
                    </>
                ))}
            </>
        )
    } else if (type === "date") {
        return (
            <input className="h-12 border border-text-grey rounded-lg px-5 text-center" type={type} name={name} />
        )
    } else if (type === "likert"){
        <div>
            {options.map((option) => (
                    <input key={option} id={name + option} name={name} type={"radio"} />
            ))}
        </div>

    } else if (type === "number") {
        return (
            <input className="h-12 border border-text-grey rounded-lg w-24 px-5 text-center text-lunapurple" type={type} name={name} />
        )
    } else {
        return (
            <input className="h-12 border border-text-grey rounded-lg w-96 text-center" type={type} name={name} />
        )
    }
}