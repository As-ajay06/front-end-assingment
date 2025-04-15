

function Button({
    disabled
    }) {

    return (
        <div className={ `${disabled ? "bg-[#7f95ac]" : "bg-blue-800"} font-semibold px-20 py-2 rounded-sm w-60 text-[#eaedf1] cursor-pointer`}>
            Continue
        </div>
    )
}

export default Button