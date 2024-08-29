import { useSortable } from "@dnd-kit/sortable"

import { CSS } from "@dnd-kit/utilities"
import { useState } from "react"

const Tab = ({ id, title, fixed, changeFixedState, dropDirection }) => {

    const [showDropDown, setShowDropDown] = useState(false)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition } = useSortable({ id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        touchAction: 'none',
    }

    return (
        <div
            className={`relative 
                ${fixed ? 'bg-light-grey border-t-4 border-t-blue-400 text-text-black' :
                    'bg-white hover:bg-tab-hover border-[1px] border-light-grey'}
                     font-poppins font-normal text-text-gray hover:text-text-black
                     grid items-center justify-center px-5 py-2`}
            onMouseEnter={() => setShowDropDown(true)}
            onMouseLeave={() => setShowDropDown(false)}
            
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}>
            <div className=''>
                {title}
            </div>

            {(showDropDown && !transform) &&
                <div
                    onMouseDown={() => changeFixedState(id)}
                    className={`text-text-gray w-32 right-0 z-50
                     transform absolute mt-2
                     bg-white border-light-grey border-[1px]
                     rounded-lg px-3 py-2 shadow-tab-pop-up-shadow
                     ${dropDirection === 'DOWN' ? 'translate-y-[75%]' : 'translate-x-[-100%]'}`}>
                    {fixed ? <>Tab pinned</> : <>Tab anpinen</>}
                </div>
            }
        </div>
    )
}

export default Tab