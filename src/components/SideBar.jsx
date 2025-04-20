import homeicon from '../icons/home.svg'
import usericon from '../icons/user.svg'
import settingicon from '../icons/settings.svg'
import receipt from '../icons/receipt-text.svg'
import usersicon from '../icons/users.svg'
import profileImage from '../assets/demo.png'

function SideBar({visible, setVisible}) {

    function Toggle() {
        setVisible(prev => !prev)
    }

    return <div className={`${visible? "w-0 md:w-62 h-screen bg-white": "w-8 h-screen bg-white" }`}>
        
        <WebinarButton visible={visible}/>
        <Component title={"Home"} icon={homeicon}/>
        <Component title={"webinars"} icon={usersicon} />
        <Component title={"Billings"} icon={receipt}/>
        <Component title={"User Management"} icon={usericon}/>
        <Component title={"Setting"} icon={settingicon}/>

    </div>
}


export default SideBar



function Component ({title , icon}) {
    return <>
        <div className="flex  border-none m-1 h-8 rounded-sm place-content-between p-2 items-center">
            <div className="text-sm font-normal">{title}</div>
            <div>
            <img src={icon} />
            </div>
        </div>
    </>
}

function WebinarButton({visible , icon}) {
    return <div className='flex place-content-between py-4 px-2 place-items-center'>
     
        <button className={`${visible? "w-20 text-white border-2 rounded-sm p-1 text-xs bg-[#002a5a]": "bg-white"}`} >webinar.gg</button>
        <img className='bg-green-300' src={profileImage} style={{width:28, height:28, borderRadius:2 }} />
    </div>
}