

function Input ( {
    type,
    placeholder,
    setDisable
})  {



    return (
        <>
        <input onChange={ (e) => {
            
            if(e.target.value.length != 0){
                setDisable(false)
                }
                else{
                    setDisable(true)
                }
            }}
            type={type} placeholder={placeholder} className="bg-[#18406b] font-sans rounded-md py-2 px-2 mb-5 w-60 text-sm text-white"></input>
        </>
    )
}


export default Input