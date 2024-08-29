import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import { useState } from "react"
import TabList from "./TabList"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"


const TabControl = () => {
    const titles = ['Dashboard', 'Banking', 'Telefonie',
        'Accounting', 'Verkauf', 'Statistic',
        'Dashboard', 'Banking', 'Telefonie',
        'Accounting',
        'Telefonie', 'Accounting', 'Verkauf',
        'Statistic', 'Dashboard', 'Banking',
        'Telefonie', 'Accounting', 'Verkauf',
        'Statistic']

    const [tabs, setTabs] = useState(
        titles.map((_title, index) => ({
            id: index,
            title: _title,
            fixed: false,
        }))
    );

    const changeFixedState = (id) => {
        setTabs(prevTabs =>
            prevTabs.map(tab =>
                tab.id === id ? { ...tab, fixed: !tab.fixed } : tab
            )
        );
    };

    const getTaskPosition = id => tabs.findIndex(tab => tab.id === id)

    const handleDragEnd = event => {
        const { active, over } = event

        if (active.id === over.id) return

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
            <TabList tabs={tabs} changeFixedState={changeFixedState} />
        </DndContext>
    )
}

export default TabControl