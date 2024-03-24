export function InputRow({ placeholder = "", readOnly = false, type = "text", maintext = "Placeholder Main Text", subtitle = "Placeholder Subtitle Text", options = "", onChange=undefined, value=undefined}) {


    return (
        <div className="flex items-center w-full my-2">
            <div className='flex-grow'>
                <p className="" >{maintext}</p>
                <p className=" subtitle text-text-grey">{subtitle}</p>
            </div>
            <FormInput palcehodler={placeholder} readOnly={readOnly} type={type} options={options} name={maintext} value = {value} onChange={onChange} />

        </div>

    )
}

export function SurveyQuestion({ maintext, subtitle, scale = 5, onChange=null}) {

    // input options [0,1,2,3,4]
    let options = [...Array(scale).keys()];
    return (
        <div className="flex items-center w-full hover:bg-[#eeeeee] rounded customlabel py-1 px-4">
            <div className='flex-grow'>
                <p className="parent-hover:text-lunapurple">{maintext}</p>
                <p className="subtitle text-text-grey">{subtitle}</p>
            </div>
            <div className="flex justify-between w-72 mx-2 pl-2">
                {options.map((option, index) => (
                    <label key={index} className="flex-1 grid py-1 justify-items-center rounded">
                        <input
                            className="group"
                            id={maintext + option}
                            name={maintext}
                            type="radio"
                            value={index} // Assign value to radio button
                            onChange={(e) => onChange(index, e.target.checked)} // Call onChange with the index and checked status
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}

export function FormInput({ placeholder, readOnly, type, options, name, value, onChange }) {
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
                        <input readOnly={readOnly} id={name + option.value} name={name} type={type} value={key} onChange={onChange} required="True" />
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
                        <input readOnly={readOnly} id={name + option} name={name} type={type} value={value} onChange={onChange}/>
                    </div>
                ))}
            </>
        )
    } else if (type === "date") {
        return (
            <input readOnly={readOnly} className={`h-8 border border-text-grey rounded-lg px-5 text-center ${readOnly ? "bg-[#eeeeee] text-text-grey" : "bg-white"}`} type={type} name={name} value={value} onChange={onChange} />
        )
    } else if (type === "likert") {
        <div>
            {options.map((option, key) => (
                <label>
                    <input readOnly={readOnly} key={key} id={name + option} name={name} type={"radio"} />
                </label>
            ))}
        </div>

    } else if (type === "number") {
        return (
            <input readOnly={readOnly} className="h-8 border border-text-grey rounded-lg w-24 px-5 text-center text-lunapurple" type={type} name={name} value={value} onChange={onChange} />
        )
    } else if (type === "dropdown") {
        return (
            <select readOnly={readOnly} className="h-8 border border-text-grey bg-white rounded-lg w-48 px-5"  name={name} id={name} value={value} onChange={onChange}>
                 {options.map((option, key) => (

                    <option key = {key} value={option}>{option}</option>
                    
                ))}
            </select>
        )
    } else {
        return (
            <input readOnly={readOnly} className= {` h-8 border border-text-grey rounded-lg w-96 text-center ${readOnly ? "bg-[#eeeeee] text-text-grey" : "bg-white"}`} type={type} name={name} value={value} onChange={onChange} />
        )
    }
}