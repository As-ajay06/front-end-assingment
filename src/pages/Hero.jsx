// side bar and all the components

import { useState } from "react"
import TimelinePhoto from "../components/Photos"
import Profile from "../components/Profile"
import GreetingCard from "../components/GreetingCard"
import TaskCard from "../components/TaskCard"
import TitleCard from "../components/TitleCard"
import Activity from "../components/Activity"
import SideBar from "../components/SideBar"


const Hero = () => {

    const [visible , setVisible ] = useState(true)
    
    return <div className="flex">
        <SideBar visible={visible} setVisible={setVisible}/>
        <MainContent />
    </div>
}

export default Hero



function MainContent() {
    return <div className="w-full">
        <div className="bg-white w-full h-32 hidden md:block ">
        <TimelinePhoto />
            </div> 
    <div className="grid grid-cols-10 gap-8 p-8 ">
        <div className="col-span-2 h-56 bg-white -translate-y-16 shadow-lg hidden md:block rounded-2xl ">
            <div>
                <Profile />
            </div>
        </div>
        <div className="md:col-span-5 h-82 bg-white col-span-12" >
            <h1 className="text-sm mb-2 font-sans">Monday, 14 October</h1>
            <GreetingCard >
                <p>Good Morning, Ajay! </p>
            </GreetingCard >
            <div className="md:col-span-5 h-62 bg-white shadow-lg rounded-2xl col-span-12 mt-8 overflow-auto" >
                <TitleCard />
                <TaskCard time={"4:00"} title={"UX webinar"}/>
                <TaskCard time={"4:00"} title={"UX Druv"}/>
                <TaskCard time={"4:00"} title={"UX webinar"}/>
                <TaskCard time={"4:00"} title={"UX webinar"}/>
                <TaskCard time={"4:00"} title={"UX webinar"}/>
            </div>
        </div>
        <div className="md:col-span-3 col-span-12 h-56 bg-white shadow-lg rounded-2xl">
                <Activity />
        </div>
        </div>
    </div>
}