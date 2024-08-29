import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import Tab from "./Tab";

const DropdownMenu = ({ tabs, changeFixedState }) => {

    return (
        <div className='absolute right-0 top-0 mt-10'>
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
    );
}

export default DropdownMenu;
