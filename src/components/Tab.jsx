import { useSortable } from "@dnd-kit/sortable"

import { CSS } from "@dnd-kit/utilities"
import { useState } from "react"

const Tab = ({ id, title, fixed, changeFixedState }) => {

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
        touchAction: 'none'
    }

    const tabProps = { ...attributes, ...listeners };

    return (
        <div
            className="bg-yellow-300 relative"
            onMouseEnter={() => setShowDropDown(prevState => !prevState)}
            onMouseLeave={() => setShowDropDown(prevState => !prevState)}
            ref={setNodeRef}
            {...tabProps}
            style={style}>
            {title}
            {showDropDown &&
                <div 
                onMouseDown={() => changeFixedState(id)}
                className={`absolute w-10 h-4 ${fixed ? 'bg-red-500' : 'bg-green-500'}`}>

                </div>
            }
        </div>
    )
}

export default Tab