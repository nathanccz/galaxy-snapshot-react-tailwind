import { Icon } from "@iconify/react/dist/iconify.js"

const FaveButton = ({ data, saved, setter }) => {
 
    const handleFaveClick = () => {
        if (saved) {
            localStorage.removeItem(`apod_${data.date}`)
            setter(false)
        } else {
            localStorage.setItem(`apod_${data.date}`, JSON.stringify(data))
            setter(true)
        }
    }

    return (
        <button className="btn btn-outline btn-secondary" onClick={handleFaveClick}>
            <Icon icon={saved ? "line-md:heart-filled" : "line-md:heart"} className='cursor-pointer text-lg'/> 
        </button>
    )
}

export default FaveButton