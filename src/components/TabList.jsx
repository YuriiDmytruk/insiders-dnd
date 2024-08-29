import { useState } from 'react'
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import Tab from "./Tab"
import DropdownMenu from './DropdownMenu'



const TabList = ({ tabs, changeFixedState }) => {

    const [showDropDown, setShowDropDown] = useState(false)

    const visibleTabs = tabs.slice(0, 12)
    const dropTabs = tabs.slice(12)

    console.log(visibleTabs)

    return (
        <div className='grid grid-cols-[1fr_2%] mb-5'>
            <div className='w-full grid grid-cols-12 bg-white'>
                <SortableContext items={tabs} strategy={horizontalListSortingStrategy}>
                    {visibleTabs.filter(tab => tab.fixed)
                        .map(tab =>
                            <Tab
                                key={tab.id}
                                id={tab.id}
                                changeFixedState={changeFixedState}
                                title={tab.title}
                                fixed={tab.fixed} />)}
                </SortableContext>

                <SortableContext items={tabs} strategy={horizontalListSortingStrategy}>
                    {
                        visibleTabs.filter(tab => !tab.fixed).map(tab =>
                            <Tab
                                key={tab.id}
                                id={tab.id}
                                changeFixedState={changeFixedState}
                                title={tab.title}
                                fixed={tab.fixed} />)
                    }
                </SortableContext>
            </div>
            <div className='bg-blue-500 relative' onClick={() => setShowDropDown(prevState => !prevState)}>
                {showDropDown &&
                    <DropdownMenu tabs={dropTabs} changeFixedState={changeFixedState}/>
                }
            </div>
        </div>
    )
}

export default TabList