import Otp from "../components/Otp";
import Button from "../components/Button";
import Input from "../components/Input";
import { useRef, useState } from "react";


export default function Otppage() {

  const [disabled, setDisable] = useState(true);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  

  return (
    <>
      <div className='h-screen bg-[#002a5a] w-screen '>
          <p className='text-[#3fdfcf] font-normal flex justify-center p-20'>
            <div>
              {/* <img src={viteLogo} className="logo w-7 h-7" alt="Vite logo" /> */}
            </div>
            Webinar<span className="text-white">.gg</span>
          </p>
          <p className="text-[#f4f6f8] font-bold tracking-wide mb-10 flex justify-center">Check Your email for Code</p>
          <div className="flex justify-center">
          <SubOptBox reference={ref1} onDone={() => ref2.current.focus()} />
          <SubOptBox reference={ref2} onDone={() => ref3.current.focus()}/>
          <SubOptBox reference={ref3} onDone={() => ref4.current.focus()}/>
          <SubOptBox reference={ref4} onDone={() => ref5.current.focus()}/>
          <SubOptBox reference={ref5} onDone={() => ref6.current.focus()}/>
          <SubOptBox reference={ref6} setDisable={setDisable} onDone={ () => setDisable(false)}/>
          </div>
          <div className="flex justify-center">
            <Button disabled={disabled}/>
          </div>
      </div>
    </>
  )
}


function SubOptBox({onDone, reference}){

    return (
        <div className="flex justify-center">
          <input ref={reference}
          onChange={
            (e) => {
              console.log("hi there")
              onDone()}
            } 
            className="bg-[#18406b] font-sans rounded-md py-2 px-2 mb-5 w-6 text-sm text-white m-1 outline-none"/>
        </div>
    )
}


