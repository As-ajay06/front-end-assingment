import { useEffect, useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import viteLogo from './assets/assests.png'

function App() {

  const [disabled, setDisable] = useState(true);


  

  return (
    <>
      <div className='h-screen bg-[#002a5a] w-screen '>
          <p className='text-[#3fdfcf] font-normal flex justify-center p-20'>
            <div>
              <img src={viteLogo} className="logo w-7 h-7" alt="Vite logo" />
            </div>
            Webinar<span className="text-white">.gg</span>
          </p>
          <p className="text-[#f4f6f8] font-bold tracking-wide mb-10 flex justify-center">Lets Get Started</p>
          <div className="flex justify-center">
            <Input setDisable={setDisable} type="text" placeholder="email id" />
          </div>
          <div className="flex justify-center">
            <Button disabled={disabled} />
          </div>
      </div>
    </>
  )
}

export default App
