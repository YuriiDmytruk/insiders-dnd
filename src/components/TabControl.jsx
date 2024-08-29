import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import { useState } from "react"
import TabList from "./TabList"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"


const TabControl = () => {

    const [tabs, setTabs] = useState(
        [
            { id: 1, title: 'Object1' },
            { id: 2, title: 'Object2' },
            { id: 3, title: 'Object3' },
            { id: 4, title: 'Object4' },
            { id: 5, title: 'Object5' },
            { id: 6, title: 'Object6' },
        ]
    )

    const getTaskPosition = id => tabs.findIndex(tab => tab.id === id)

    const handleDragEnd = event => {
        const {active, over} = event

        if(active.id === over.id) return

        setTabs(tabs => {
            const originalPos = getTaskPosition(active.id)
            const newPos = getTaskPosition(over.id)

            return arrayMove(tabs, originalPos, newPos)
        })
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    )

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <TabList tabs={tabs} />
        </DndContext>
    )
}

export default TabControl