import profileImage from '../assets/demo.png'


function Profile() {
    return (
        <>
        <ProfilePhoto />
        <Bio />
        </>
    )
}

function ProfilePhoto () {
    return <div className='flex justify-center p-2 mt-4'>
        <img className='h-24 w-24 rounded-xl ' src={profileImage} /> 
    </div>
}

export default Profile
function Bio(){
    return (
        <div className='p-2 content-center'>
            <Title />
            <Email />
            <Address />
            <Number />
        </div>
    )
}

function Title () {
    return <div className='font-semibold flex justify-center'>
        Druv 
    </div>
}

function Address () {
    return <div className='text-xs text-slate-400 font-medium flex justify-center'>
        Address
    </div>
}
function Email () {
    return <div className='font-medium text-slate-400 text-xs flex justify-center'>
        druvshau@gmail.com
        
    </div>
}
function Number () {
    return <div className='font-medium text-slate-400 text-xs flex justify-center'>
        4364546907
    </div>
}