function TasKCard({time, title}) {
    return <div>
        <SubTask time={time} title={title} />
    </div>
}

export default TasKCard


function SubTask({time, title}) {
    return <div className="flex p-1 border-b-1 border-slate-300 m-2">
        <div>
            <Time time={time} />
        </div>
        <div>
            <Work title={title}/>
        </div>
    </div>
}

function Time({time}) {
    return <div className="px-2">
        <div className="font-medium font-snas text-sm text-black">
            {time}
        </div>
        <div className="text-xs font-sans text-slate-400">
            {time}
        </div>
    </div>
}

function Work ({title}) {
    return <div  className="border-l-2 border-cyan-500 px-2 ml-1 ">
        <div className="text-xs font-sans text-slate-400">
            {title}
        </div>
        <div className="font-semibold font-snas text-sm text-black">
            {title}
        </div>
    </div>
}