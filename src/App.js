import {useState, useEffect} from "react";

//UseInput
const useInput = (initialValue, validator) =>{
  const [value,setValue] = useState(initialValue);
  const onChange = (event)=>{
    const {
      target : {value}
    } = event;
    let willUpdate =true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    console.log(willUpdate);
    if (willUpdate){
      setValue(value);
    }
  }
  return {value, onChange};
}

//UseTabs
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setcurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
  return;
  }
  return { 
    currentItem: allTabs[currentIndex],
    changeItem : setcurrentIndex
  };
};
const content = [
  {
    tab : "Section 1",
    content : "I'm the content of the Section 1",
  },
  {
    tab : "Section 2",
    content : "I'm the content of the Section 2",
  }
]

//UseTitle
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () =>{
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText =title;
  }
  useEffect(updateTitle,[title]);
  return setTitle;
}

function App() {

  //UseInput
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  //UseTabs
  const {currentItem,changeItem} = useTabs(0, content);
  //UseTitle
  const titleUpdater = useTitle("Loding....");
  setTimeout(()=>titleUpdater("Home"),5000);

  return (
    <div>
      {/* UseInput */}
      <h1>hello</h1>
      <input placeholder="Name" type="text" {...name} />
      <hr />
      {/* UseTabs */}
      {content.map((section, index) =>
        <button
          key ={index}
          onClick={()=>changeItem(index)}
        >
          {section.tab}
        </button>
      )}
      <div>
        {currentItem.content}
      </div>
      <hr/>

    </div>
  );
}

export default App;  
