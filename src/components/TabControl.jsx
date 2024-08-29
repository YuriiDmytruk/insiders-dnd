import { closestCorners, DndContext } from "@dnd-kit/core"
import { useState } from "react"
import TabList from "./TabList"
import { arrayMove } from "@dnd-kit/sortable"


const TabControl = () => {

    const [tabs, setTabs] = useState(
        [
            { id: 1, title: 'Object1' },
            { id: 2, title: 'Object2' },
            { id: 3, title: 'Object3' },
            { id: 4, title: 'Object4' },
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

    return (
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <TabList tabs={tabs} />
        </DndContext>
    )
}

export default TabControl