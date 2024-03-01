import {Button, SmallButton} from "./Buttons"

export default function SetupOverview({data_models}) {
  // Initialize an array to hold groups of three objects
  const groupedArrays = []

  // Loop through the original array and split it into groups of three
  for (let i = 0; i < data_models.length; i += 3) {
    groupedArrays.push(data_models.slice(i, i + 3))
  }

  return (
    <div className='mt-5'>
      {groupedArrays.map((model_group, index) => (
        // A row is added per every 3 elements
        <div className='flex flex-wrap space-x-0 mx-[-.5rem]' key={index}>
          {model_group.map((model, innerIndex) => (
            <ModelContainer model={model} key={innerIndex} />
          ))}
        </div>
      ))}
    </div>
  )
}

function StatusIcon({status}) {
  let bg_col = "bg-white"
  let border_col = "border-lunapurple"
  let text = "Offen"
  let text_col = "text-lunapurple"

  switch (status) {
    case "NOT_COMPLETED":
      bg_col = "bg-progred"
      border_col = "border-lunayellow"
      text = "Unvollständig"
      text_col = "text-white"
      break
    case "COMPLETED":
      bg_col = "bg-lunagreen"
      border_col = "border-lunagreen"
      text = "Abgeschlossen"
      text_col = "text-white"
      break
    default:
      break
  }

  return (
    <div
      className={`border inline-block px-2 ${bg_col} ${border_col} ${text_col} rounded-full ml-auto`}
    >
      <p className='text-[.65rem]  text-right'>{text}</p>
    </div>
  )
}

function ModelContainer({model}) {
  console.log(model)
  let border_col = "border-lunapurple"
  let button_text = "Ausfüllen"
  let opacity = "opacity-100"

  switch (model.status) {
    case "COMPLETED":
      button_text = "Weiter"
      opacity = "opacity-40"
      break
    case "NOT_COMPLETED":
      border_col = "border-[#dedede]"
      button_text = "Anzeigen"

      break
    default:
      break
  }

  return (
    <div className='w-1/3 h-72 p-2'>
      <div
        className={`border ${border_col} h-full w-full rounded-xl p-5 flex flex-col justify-between`}
      >
        <div className={`flex items-center`}>
          <h1 className={`${opacity}`}>{model.modelname}</h1>{" "}
          <StatusIcon status={model.status} />
        </div>
        <img src={model.img} className={`mx-auto w-28 ${opacity}`} />
        <div className={`w-24 inline-block ${opacity} hover:opacity-100`}>
          <SmallButton text={button_text} />
        </div>
      </div>
    </div>
  )
}
