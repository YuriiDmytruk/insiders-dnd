import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import Tab from "./Tab"



const TabList = ({tabs}) => {
    return(
        <div className='w-full h-full grid grid-cols-8'>
            <SortableContext items={tabs} strategy={horizontalListSortingStrategy}>
            {
                tabs.map(tab => <Tab key={tab.id} id={tab.id} title={tab.title}/>)
            }
            </SortableContext>
        </div>
    )
}

export default TabList