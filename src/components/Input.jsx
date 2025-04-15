import { useRef } from "react";

function Input ( {
    type,
    placeholder,
    setDisable,
    varient,

})  {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();


    return (
        <>
        <input 
            onChange={ (e) => {
            if(e.target.value.length != 0){
                setDisable(false)
                }
                else{
                    setDisable(true)
                }
            }}
            
            type={type} placeholder={placeholder} className={varient}></input>
        </>
    )
}


export default Input