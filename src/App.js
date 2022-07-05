// import {useState, useEffect, useRef} from "react";

import useInput from "./component/useInput";
import {useTabs,content} from "./component/useTabs";
import useTitle from "./component/useTitle";
import useClick from "./component/useClick";
import useHover from "./component/useHover";
import useConfirm from "./component/useConfirm";
import usePreventLeave from "./component/usePreventLeave";
import useBeforeLeave from "./component/useBeforeLeave";
import useFadeIn from "./component/useFadeIn";
import {useNetwork,handleNetworkChange} from "./component/useNetwork";
import useScroll from "./component/useScroll";
import useFullScreen from "./component/useFullScreen";
import useNotification from "./component/useNotification";
import useAxios from "./component/useAxios";



const App = () => {

  const { loading, data, error, refetch } = useAxios({
    url:
    "https://yts.mx/api/v2/list_movies.json"
    });
  console.log(loading)
  console.log(data)
  console.log(`loding: ${loading}, data: ${data}, error: ${error}`);
  
  //UseInput
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  //UseTabs
  const {currentItem,changeItem} = useTabs(0, content);
  //UseTitle
  const titleUpdater = useTitle("Loding....");
  setTimeout(()=>titleUpdater("Home"),5000);

  //UseClick
  const onClick =()=>{ console.log("Click");}
  const clickTitle = useClick(onClick);

  //UseHover
  const onHover =()=>{ console.log("Hover");}
  const hoverTitle = useHover(onHover);

  //UseConfirm
  const delteWorld = () =>{console.log("deleteing world");}
  const abort = () =>{console.log("Aborted")}
  const confirmDelete = useConfirm("Are u sure?", delteWorld, abort)

  // usePreventLeave
  const {enablePrevent, disblePrevent }= usePreventLeave();

  // useBeforeLeave
  const onBefore = () =>{console.log("pls don't leave ")}
  useBeforeLeave(onBefore);

  //useFadeIn   
  const fadeIn1 = useFadeIn(2,1);
  const fadeIn2 = useFadeIn(3,2);

  // useNetwork
  const onLine = useNetwork(handleNetworkChange);

  // useScroll
  const {y}=useScroll();

  // useFullScreen
  const onFullS=(isFull)=>{console.log(isFull ? "we are full" : "we are small");}
  const {element,triggerFull,exitFull} =useFullScreen(onFullS);

  //useNotification
  const triggerNotif = useNotification("Can I steal your kimchi"
  ,{
    body : "I love kimchi dont you"
  });

  return (
    <div style={{height:"1000vh"}}>
      {/* UseInput */}
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
        {currentItem.content}
      <hr/>

      {/* useClick */}
      <h1 ref={clickTitle}>Click</h1>
      <hr/>

      {/* UseHover */}
      <h1 ref={hoverTitle}>Hover</h1>
      <hr/>

      {/* UseConfirm */}
      <button onClick={confirmDelete}>Delte the world</button>
      <hr/>

      {/* usePreventLeave */} 
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disblePrevent}>Unprotect</button>
      <hr/>
      {/* useBeforeLeave */}

      {/* useFadeIn */}
      <h1 {...fadeIn1}>FadeIn1</h1>
      <h1 {...fadeIn2}>FadeIn2</h1>
      <hr />

      {/* useNetwork */}
      <h1>{onLine ? "onLine" : "offLine"}</h1>
      <hr />

      {/* useScroll */}
      <h1 style={{position:"fixed", color: y>100 ? "red":"blue"}}>UseScroll</h1>
      
      {/* useFullScreen */}
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"/>
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
      <hr />
      {/* triggerNotif */}
      <button onClick={triggerNotif}>Notification</button>
      <hr />

      <div>{data && data.status}</div>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;  
