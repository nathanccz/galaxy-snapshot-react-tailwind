import { Icon } from "@iconify/react/dist/iconify.js"
import { useLocalStorage } from "@uidotdev/usehooks"

const FaveButton = ({ data }) => {
    const [isSaved, setIsSaved] = useLocalStorage(data.date, null)

    const handleFaveClick = () => {
        if (isSaved) {
            setIsSaved(null)
        } else {
            setIsSaved(JSON.stringify(data))
        }
    }

    return (
        <button className="btn btn-outline btn-secondary" onClick={handleFaveClick}>
            {isSaved ? "Faved!" : "Fave"} <Icon icon={isSaved ? "line-md:heart-filled" : "line-md:heart"} className='cursor-pointer text-lg'/> 
        </button>
    )
}

export default FaveButton