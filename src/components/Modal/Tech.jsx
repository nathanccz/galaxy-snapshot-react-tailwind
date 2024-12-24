import { useState, useEffect } from 'react'
import React from 'react'
import { Icon } from "@iconify/react";
import TechVideo from '../Videos/TechVideo';
import Article from '../Article/Article';
import TechSkeleton from '../Skeleton/TechSkeleton';
import Button from '../Button/Button';

const Tech = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [projectData, setProjectData] = useState([])
    const [projectCount, setProjectCount] = useState(0)
    const [activeProject, setActiveProject] = useState({})
    const [textTransform, setTextTransform] = useState(false)
    const [defaultText, setDefaultText] = useState(true)
    const MY_TECH_API = 'https://nasa-techport-custom.onrender.com/'

    useEffect(() => {
        async function fetchProjectData() {
            setIsLoading(true)
           try {
                const response = await fetch(MY_TECH_API)
                const data = await response.json()
                const projects = data.projects.slice()
            
                setProjectData(projects) 
                setProjectCount(1)
                setIsLoading(false)  
           } catch (error) {
                console.log(error)
           }
        }

        fetchProjectData()
    }, [])

    useEffect(() => {

        switch(true) {
            case projectData.length === 0:  
                return;
            case projectCount > projectData.length:
                setProjectCount(projectData.length)
                return
            case projectCount < 1:
                setProjectCount(1)
                return
            default:
                setDefaultText(true)
                setTextTransform(false)
                setActiveProject(projectData[projectCount - 1])
                break
        }

    }, [projectCount])

    const handleTextTransform = async() => {
        setIsLoading(true)
        setDefaultText(!defaultText)
        if (defaultText) {
            await new Promise(resolve => setTimeout(resolve, 3000))
        }
        setIsLoading(false)
        setTextTransform(!textTransform)
    }

    return (
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box max-w-3xl">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h1 className='mb-2 mt-3'>The Future of Innovation</h1>
                <TechVideo />
                <h2 className='text-2xl font-bold my-3'>Explore the cutting edge of technology</h2>
                <p>Transform complex NASA project summaries into engaging content, showcasing the latest tech advancements shaping our world—and beyond:</p>
                {isLoading && !defaultText &&
                <Button clickEvent={handleTextTransform}>
                    Transforming text <span className="loading loading-dots loading-sm"></span>
                </Button>}
                {defaultText && 
                <Button clickEvent={handleTextTransform}>
                    Transform text <Icon icon="mingcute:ai-line" className='cursor-pointer text-lg'/>
                </Button>}
                {textTransform && !isLoading && 
                <Button clickEvent={handleTextTransform}>
                    See original text <Icon icon="carbon:reset" className='cursor-pointer text-lg'/>
                </Button>
                }
                <h3 className="font-bold text-lg mt-3">{textTransform ? activeProject.ai_title : isLoading ? '' : activeProject.default_title}</h3>
                <article className="py-4">
                    {isLoading && !defaultText && <TechSkeleton />}
                    {defaultText && isLoading && 
                    <div className='h-32 my-20 mx-auto text-center w-full'>
                        <h2 className='mb-10'>Loading API data... Please hold 🙏</h2>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                    }
                    {textTransform && <Article text={activeProject.ai_text} url={activeProject.url} />}
                    {defaultText && activeProject.default_text}  
                </article>
                <div className='w-full flex justify-between my-5 gap-3'>
                    <div role="tablist" className="tabs tabs-boxed w-full flex items-center justify-between">
                        {
                            projectData.map((p, i) => {
                               return (
                                <a key={i} role='tab' className={projectCount === i + 1 ? "tab w-1/5 tab-active" : "tab w-1/5"} onClick={() => setProjectCount(i + 1)}>
                                    {String(i + 1)}
                                </a>
                               )
                            })
                        }
                    </div>
                </div>
                    <div className='flex w-full justify-between'>
                        <button className="btn btn-outline" onClick={() => setProjectCount(projectCount - 1)}>
                            <Icon icon="ooui:previous-ltr" className='cursor-pointer text-lg'/> Prev
                        </button>
                        <button className="btn btn-outline" onClick={() => setProjectCount(projectCount + 1)}>
                            Next <Icon icon="ooui:previous-rtl" className='cursor-pointer text-lg'/>
                        </button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div> 
                    
                </div> 
            </dialog>
    )
}

export default Tech