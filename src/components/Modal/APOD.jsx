import { useState, useEffect } from 'react'
import { formatDate, generateRandomDate, getToday } from '../../../utils/helpers'
import { Icon } from "@iconify/react";
import APODVideo from '../Videos/APODVideo';
import APODSkeleton from '../Skeleton/APODSkeleton';
import FaveButton from '../Button/FaveButton';

const APOD = () => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [isPlaying, setIsPlaying] = useState(true)
    const [apiData, setApiData] = useState(null)
    const [date, setDate] = useState(null)
    const [query, setQuery] = useState('')
    const BASE_URL = import.meta.env.VITE_NASA_URL
    const API_KEY = import.meta.env.VITE_NASA_KEY

    useEffect(() => {
        async function fetchAPOD() {
            try {
                const response = await fetch(BASE_URL + API_KEY + query)
                const data = await response.json()
                console.log(data)
                setApiData(data)
                setDate(data.date)
            } catch (error) {
                console.log(error)
            }

            await new Promise(resolve => setTimeout(resolve, 1200))
            
            setIsLoading(false)
            
        }
        fetchAPOD()
    }, [query])

    const handleDateChange = (date) => {
        if (apiData.media_type === 'video') {
            setIsPlaying(true)
        }
        
        if (date === getToday()) {
            setQuery('')
        } else {
            setIsLoading(true)
            setQuery('&date=' + date)
        }
    }

    const handleModalClose = () => {
        setIsPlaying(false)
        handleDateChange(getToday())
    }

    return (
        <>
            {apiData && 
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-3xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleModalClose}>✕</button>
                    </form>
                    
                    <h1 className='mb-2 mt-3'>Astronomy Picture of the Day</h1>
                    <span className='font-bold'>{formatDate(apiData.date)}</span>
                    <div className="modal-inner-btn mt-5">
                        <div className='flex flex-col gap-3'>
                            <div className="btn btn-outline w-full" id="date-picker">
                                <div className="inner btn-outline">
                                    <label htmlFor="choose">Choose date: </label>
                                    <input type="date" id="choose-date" name="choose-date" value={date} min="1995-06-16" max='' onChange={(e) => handleDateChange(e.target.value)} />
                                </div>
                            </div>
                            <div className='flex justify-between w-full gap-3'>
                                {!isLoading ? 
                                <button className="btn btn-outline basis-3/4" onClick={() => handleDateChange(generateRandomDate())}>
                                    Get random date <Icon icon="ix:random" className='cursor-pointer text-lg'/>
                                </button> : 
                                <button className="btn btn-outline basis-3/4" onClick={() => handleDateChange(generateRandomDate())}>
                                    <span className="loading loading-spinner loading-sm"></span>
                                </button>}
                                <button className="btn btn-outline basis-1/4 shrink" onClick={() => handleDateChange(getToday())}>
                                    <Icon icon="carbon:reset" className='cursor-pointer text-lg'/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {!isLoading ? 
                    <>
                    {apiData.media_type === 'image' ?
                        <> 
                        <a href={apiData.hdurl} target="_blank">
                        <img src={apiData.url} alt="" className="my-10"/>
                        </a>
                        
                        </>
                    : apiData.media_type === 'video' && isPlaying ? 
                        <> 
                        <APODVideo url={apiData.url} />
                        
                        </>
                    :
                        <div className='py-40'>
                            <h2><em>Media not supported. Please pick another day.</em></h2>
                        </div>
                    }
                    <h3 className="font-bold text-lg mt-5">{apiData.title}</h3>
                    <p className="py-4">{apiData.explanation}</p> 
                    </> 
                    : 
                    <APODSkeleton />
                    }
                    <div className="modal-action flex justify-between">
                        <FaveButton data={ apiData }/>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" onClick={handleModalClose}>Close</button>
                        </form>
                    </div> 
                
                </div> 
            </dialog>
            }
        </>
    )
}

export default APOD





