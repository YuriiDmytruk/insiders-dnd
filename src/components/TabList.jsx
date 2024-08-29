import { useState } from 'react'
import { SortableContext } from "@dnd-kit/sortable"
import Tab from "./Tab"
import DropdownMenu from './DropdownMenu'



const TabList = ({ tabs, changeFixedState }) => {

    const [showDropDown, setShowDropDown] = useState(false)

    const visibleTabs = tabs.slice(0, 12)
    const dropTabs = tabs.slice(12)

    return (
        <div className='grid grid-cols-[1fr_2%] mb-5'>
            <SortableContext items={tabs}>
                <div className='w-full grid grid-cols-12 bg-white'>

                    {visibleTabs.filter(tab => tab.fixed)
                        .map(tab =>
                            <Tab
                                key={tab.id}
                                id={tab.id}
                                changeFixedState={changeFixedState}
                                title={tab.title}
                                fixed={tab.fixed}
                                dropDirection='DOWN' />)}
                    {
                        visibleTabs.filter(tab => !tab.fixed).map(tab =>
                            <Tab
                                key={tab.id}
                                id={tab.id}
                                changeFixedState={changeFixedState}
                                title={tab.title}
                                fixed={tab.fixed}
                                dropDirection='DOWN' />)
                    }

                </div>
                <div className='bg-blue-500 relative' onClick={() => setShowDropDown(prevState => !prevState)}>
                    {showDropDown &&
                        <DropdownMenu tabs={dropTabs} changeFixedState={changeFixedState} />
                    }
                </div>
            </SortableContext>
        </div>
    )
}

export default TabList