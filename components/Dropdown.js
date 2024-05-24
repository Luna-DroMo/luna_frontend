import {Fragment} from "react"
import {Menu, Transition} from "@headlessui/react"
//import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Chart from "chart.js/auto"

export default function Dropdown({header, dropdown_options, onSelect}) {
    return (
        <div className='group relative cursor-pointer min-w-96 border border-lunapurple shadow-sm rounded-md gap-x-1.5 bg-white text-sm font-semibold hover:bg-gray-50'>
            <div className='flex items-center justify-between space-x-5 px-4'>
                <a className='menu-hover py-1 text-base font-medium text-black lg:mx-4'>{header}</a>
            </div>

            <div className='invisible absolute z-50 flex w-full flex-col group-hover:visible'>
                <div className='bg-white shadow-lg border border-lightgrey rounded mt-2'>
                    {dropdown_options.map((dropdown_option, key) => (
                        <a
                            key={key}
                            className='inline-block py-3 px-5 hover:text-black hover:bg-pagebg w-full'
                            onClick={() => onSelect(dropdown_option)}
                        >
                            <p>{dropdown_option}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
