import { useState, useEffect } from 'react'
import { SortableContext } from "@dnd-kit/sortable"
import Tab from "./Tab"
import DropdownMenu from './DropdownMenu'

const TabList = ({ tabs, changeFixedState }) => {

    const [showDropDown, setShowDropDown] = useState(false)
    const [elementsOnPage, setElementsOnPage] = useState(12)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const updateElementsOnPage = () => {
            if (windowWidth > 1536) {
                return 15;
            } else if (windowWidth > 1280) {
                return 12;
            } else if (windowWidth > 640) {
                return 4;
            } else {
                return 3    ;
            }
        };

        setElementsOnPage(updateElementsOnPage());
    }, [windowWidth]);

    const visibleTabs = tabs.slice(0, elementsOnPage)
    const dropTabs = tabs.slice(elementsOnPage)

    return (
        <div className='grid grid-cols-[1fr_2%] mb-5'>
            <SortableContext items={tabs}>
                <div className={`w-full grid bg-white grid-cols-${elementsOnPage}`}>

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