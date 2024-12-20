const Button = ({children, clickEvent}) => {
    return (
        <button className="btn btn-primary btn-outline mr-4 my-3 w-full uppercase font-bold md:w-2/5" onClick={clickEvent}>
            {children}
        </button>
    )
}

export default Button