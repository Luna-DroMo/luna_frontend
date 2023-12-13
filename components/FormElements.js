export function InputRow({ type = "text", maintext = "Placeholder Main Text", subtitle = "Placeholder Subtitle Text", options = "", onChange=undefined, value=undefined}) {


    return (
        <div className="flex items-center w-full my-2">
            <div className='flex-grow'>
                <p className="" >{maintext}</p>
                <p className=" subtitle text-text-grey">{subtitle}</p>
            </div>
            <FormInput type={type} options={options} name={maintext} value = {value} onChange={onChange} />

        </div>

    )
}

export function SurveyQuestion({ maintext, subtitle, scale = 5 }) {

    // input options [0,1,2,3,4]
    let options = [...Array(scale).keys()];
    return (
        <div className="flex items-center w-full my-2 hover:bg-[#eeeeee] rounded">
            <div className='flex-grow'>
                <p className="" >{maintext}</p>
                <p className=" subtitle text-text-grey">{subtitle}</p>
            </div>
            <div className="flex justify-between w-72 mx-2">
                {options.map((option) => (
                    <input className="" key={option} id={maintext + option} name={maintext} type="radio" />
                ))}
            </div>
        </div>

    )
}

export function FormInput({ type, options, name, value, onChange }) {
    /* Styled Form Inputs */
    if (type === "range") {
        return (
            <input className="h-8" type={type} name={name} value={value} onChange={onChange}/>
        )
    } else if (type === "radio") {
        //const optionslist = options.split(' ');
        return (
            <>
                {Object.entries(options).map(([option, key]) => (
                    <div key={key}>
                        <label className='mx-5 text-text-grey'> {option} </label>
                        <input id={name + option.value} name={name} type={type} value={key} onChange={onChange} />
                    </div>
                ))}
            </>
        )
    } else if (type === "checkbox") {
        //const optionslist = options.split(' ');
        return (
            <>
                {options.map((option, key) => (
                    <div key={key}>
                        <label className='mx-5 text-text-grey'> {option} </label>
                        <input id={name + option} name={name} type={type} value={value} onChange={onChange}/>
                    </div>
                ))}
            </>
        )
    } else if (type === "date") {
        return (
            <input className="h-8 border border-text-grey rounded-lg px-5 text-center" type={type} name={name} value={value} onChange={onChange} />
        )
    } else if (type === "likert") {
        <div>
            {options.map((option, key) => (
                <input  key={key} id={name + option} name={name} type={"radio"} />
            ))}
        </div>

    } else if (type === "number") {
        return (
            <input className="h-8 border border-text-grey rounded-lg w-24 px-5 text-center text-lunapurple" type={type} name={name} value={value} onChange={onChange} />
        )
    } else if (type === "dropdown") {
        return (
            <select className="h-8 border border-text-grey bg-white rounded-lg w-48 px-5"  name={name} id={name} value={value} onChange={onChange}>
                 {options.map((option, key) => (

                    <option key = {key} value={option}>{option}</option>
                    
                ))}
            </select>
        )
    } else {
        return (
            <input className="h-8 border border-text-grey rounded-lg w-96 text-center" type={type} name={name} value={value} onChange={onChange} />
        )
    }
}