


const Button = ({children,onClick,disabled}) => {
    return(
        <button disabled={disabled} onClick={onClick} className="flex justify-between items-center rounded-md shadow-md shadow-black py-1 px-3 mx-2 my-1 hover:scale-95 bg-white disabled:opacity-75">{children}</button>
    )
}


export default Button