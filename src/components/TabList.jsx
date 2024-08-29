import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import Tab from "./Tab"



const TabList = ({ tabs, changeFixedState }) => {
    return (
        <div className='w-full h-full grid grid-cols-8'>
            <SortableContext items={tabs} strategy={horizontalListSortingStrategy}>
                {tabs.filter(tab => tab.fixed)
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
                    tabs.filter(tab => !tab.fixed).map(tab =>
                        <Tab
                            key={tab.id}
                            id={tab.id}
                            changeFixedState={changeFixedState}
                            title={tab.title}
                            fixed={tab.fixed} />)
                }
            </SortableContext>
        </div>
    )
}

export default TabList