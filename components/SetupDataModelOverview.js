import { Button, SmallButton } from "./Buttons";

export default function SetupOverview({ data_models }) {


    // Initialize an array to hold groups of three objects
    const groupedArrays = [];

    // Loop through the original array and split it into groups of three
    for (let i = 0; i < data_models.length; i += 3) {
        groupedArrays.push(data_models.slice(i, i + 3));
    }


    return (
        <div className="mt-5">
          {groupedArrays.map((model_group, index) => (
            // A row is added per every 3 elements
            <div className="flex flex-wrap space-x-0 mx-[-.5rem]" key={index}>
              {model_group.map((model, innerIndex) => (
                <ModelContainer model={model} key={innerIndex} />
              ))}
            </div>
          ))}
        </div>
      );
}


function StatusIcon({ status }) {
    // Functionality of the status icon
    let bg_col = "bg-white";
    let border_col = "border-lunapurple";
    let text = "Offen";
    let text_col = "text-lunapurple";

    switch (status) {
        case 1:
            bg_col = 'bg-lunayellow';
            border_col = "border-lunayellow";
            text = "Angefangen";
            text_col = "text-white";
            break;
        case 2:
            bg_col = 'bg-lunagreen';
            border_col = "border-lunagreen";
            text = "Abgeschlossen";
            text_col = "text-white";
            break;
        default:
            break;
    }

    return (<div className={`border inline-block px-2 ${bg_col} ${border_col} ${text_col} rounded-full ml-auto`}><p className="text-[.65rem]  text-right">{text}</p></div>)
}

function ModelContainer({ model }) {
    // The square boxes containing each model overview


    let border_col = "border-lunapurple";
    let button_text = "Ausfüllen"
    let opacity = "opacity-100";

    if (model.setup_status == 2){ }
    switch (model.setup_status) {
        case 1:
            button_text = "Weiter"
            break;
        case 2:
            border_col = "border-[#dedede]";
            button_text = "Anzeigen";
            opacity = "opacity-40";
            break;
        default:
            break;
    }

    return (
        <div className="w-1/3 h-72 p-2">
            <div className={`border ${border_col} h-full w-full rounded-xl p-5 flex flex-col justify-between h-full`}>
                <div className={`flex items-center`}>
                    <h1 className={`${opacity}`}>{model.modelname}</h1> <StatusIcon status={model.setup_status} />
                </div>
                <img src={model.img} className={`mx-auto w-28 ${opacity}`}/>
                <div className={`w-24 inline-block ${opacity} hover:opacity-100`}>
                    <SmallButton text={button_text}/>
                </div>
            </div>
        </div>
    );
}


