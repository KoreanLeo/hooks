import {useState, useEffect} from "react";

const useNetwork = (onChange) =>{
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange =() =>{
      if(typeof onChange ==="function"){
        setStatus(navigator.onLine);
      }
      setStatus(navigator.onLine);
    }
    useEffect(()=>{
      window.addEventListener("online",handleChange);
      window.addEventListener("offline",handleChange);
      return ()=>{
        window.removeEventListener("online",handleChange);
        window.removeEventListener("offline",handleChange);
      }
    },[])
    onChange(status)
    return status;
  }

  const handleNetworkChange = (online) =>{
    console.log(online ? "We just went online" :"We are offline" );
  } ;

  export {useNetwork,handleNetworkChange}