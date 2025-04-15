
import Button from '../components/Button'
import Input from '../components/Input'
import { useState } from 'react'
import viteLogo from '../assets/assests.png'

function Emailpage() {
    const [disabled, setDisable] = useState(false)

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
                <Input setDisable={setDisable} type="text" placeholder="email id" varient={"bg-[#18406b] font-sans rounded-md py-2 px-2 mb-5 w-60 text-sm text-white"}/>
                </div>
            <div className="flex justify-center">
                <Button disabled={disabled} />
            </div>
        </div>
        </>
    )

}

export default Emailpage