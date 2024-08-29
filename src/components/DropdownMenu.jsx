import Tab from "./Tab";

const DropdownMenu = ({ tabs, changeFixedState }) => {

    return (
        <div className='absolute right-0 top-0 mt-10'>
                {
                    tabs.filter(tab => !tab.fixed).map(tab =>
                        <Tab
                            key={tab.id}
                            id={tab.id}
                            changeFixedState={changeFixedState}
                            title={tab.title}
                            fixed={tab.fixed}
                            dropDirection='LEFT' />)
                }
        </div>
    );
}

export default DropdownMenu;
