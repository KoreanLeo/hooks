const useConfirm = (message, onConfirm, onCancel)=>{
    if(!onCancel || typeof onConfirm !== "function"){
      return;
    }
    if(!onConfirm || typeof onCancel !== "function"){
        return;
    }
    const confirmAction = () =>{
      if(window.confirm(message)){
        onConfirm();
      }else{
        onCancel();
      }
    }
    return confirmAction;
}
export default useConfirm