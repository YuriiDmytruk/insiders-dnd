import TabControl from "./components/TabControl";

function App() {
  return (
    <div className='h-full w-full grid grid-rows-[8%_8%_1fr] grid-cols-[3%_1fr]'>
      <div className='row-span-3 bg-white w-full h-full'/>
      <div className='w-full h-full bg-white border-l-[1px] border-light-grey'/>
      <TabControl />
      <div className=' bg-white mx-5 mb-5'/>
    </div>
  );
}

export default App;
