import { useSortable } from "@dnd-kit/sortable"

import { CSS } from "@dnd-kit/utilities"

const Tab = ({ id, title }) => {

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

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}>{title}</div>
    )
}

export default Tab