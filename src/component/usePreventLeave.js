const usePreventLeave = () =>{
    const listener = (event) =>{
      event.preventDefault();
      event.returnValue="";
    }
    const enablePrevent = () => window.addEventListener("beforeunload",listener);
    const disblePrevent = () => window.removeEventListener("beforeunload",listener);
    return {enablePrevent,disblePrevent}
}

export default usePreventLeave;
