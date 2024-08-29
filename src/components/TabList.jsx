import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import Tab from "./Tab"



const TabList = ({tabs}) => {
    return(
        <div>
            <SortableContext items={tabs} strategy={verticalListSortingStrategy}>
            {
                tabs.map(tab => <Tab key={tab.id} id={tab.id} title={tab.title}/>)
            }
            </SortableContext>
        </div>
    )
}

export default TabList