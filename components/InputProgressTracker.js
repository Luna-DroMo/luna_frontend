

export function Progressbar({ forms }) {

    return (
        <div className="flex justify-evenly pt-3">
            <ProgressbarElement form={forms[0]} />
            <ProgressbarDivider form={forms[1]} />
            <ProgressbarElement form={forms[1]} />
            <ProgressbarDivider form={forms[2]} />
            <ProgressbarElement form={forms[2]} />
            <p>...</p>
        </div>
    )

};

function ProgressbarElement({ form }) {

    let theme = getColourTheme(form);

    return (
        <div className="flex">
            <Bullet form={form} />
            <p className={`inline text-${theme.text_col}`}>{form.name}</p>
        </div>
    )
};

function ProgressbarDivider({form}) {
// Takes in a name and status of a given form and returns the horizontal bar
// between the form names/elements
// Mostly what this does is just set the correct colour
    let theme = getColourTheme(form);

    return (
        <div className={`inlineblock bg-${theme.text_col} h-[2px] w-28 rounded-full mt-3`} />
    )

}
function Bullet({ form }) {
// Takes in a name, number and status of a form and returns the coloured bullet point.
    let theme = getColourTheme(form);

    return (
        <div className={`border h-5 w-5 rounded-full bg-${theme.bg_col} border-${theme.border_col} inlineblock mt-0.5 mr-3 text-xs text-center`}>
            <p className={`mt-0.5  text-${theme.number_col} `}>
                {form.item}
            </p>
        </div>
    )

}


function getColourTheme(form) {
// Sets the colours of a progressbar element based on the status
// Returns an Object {}

    let status = form.status;

    let theme = {
        "bg_col": "lightgrey",
        "number_col": "white",
        "text_col": "lightgrey",
        "border_col": "lightgrey"
    }

    if (status === 1) {
        theme.bg_col = "transparent";
        theme.number_col = "lunapurple";
        theme.border_col = "lunapurple";
        theme.text_col = "lunapurple";
    } else if (status === 2) {
        theme.bg_col = "lunapurple";
        theme.number_col = "white";
        theme.border_col = "lunapurple";
        theme.text_col = "lunapurple";
    }

    return (theme)
}