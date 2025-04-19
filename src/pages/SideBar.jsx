export const SideBar = () =>  {
    return (
        <div className="flex">
            <div className="hidden sm:block bg-red-400 w-80 h-screen">
                Side bar
            </div>
            <div className="bg-amber-300 w-full h-screen sm:w-full">
                Content
            </div>
        </div>
    )
}