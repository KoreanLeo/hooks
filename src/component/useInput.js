import {useState} from "react";

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

export default useInput;