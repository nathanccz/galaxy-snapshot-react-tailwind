import { useState, useEffect } from 'react'
import React from 'react'
import { Icon } from "@iconify/react";
import TechVideo from '../Videos/TechVideo';
import parser from 'html-react-parser';

const Tech = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [projectData, setProjectData] = useState([])
    const [projectCount, setProjectCount] = useState(0)
    const [activeProject, setActiveProject] = useState({})
    const [textTransform, setTextTransform] = useState(false)
    const MY_TECH_API = 'https://nasa-techport-custom.onrender.com/'

    useEffect(() => {
        async function fetchProjectData() {
            console.log('start loading')
            const response = await fetch(MY_TECH_API)
            const data = await response.json()
            const projects = data.projects.slice()
            console.log(data)
          
            setProjectData(projects) 
            setProjectCount(1)  
            
        }

        fetchProjectData()
    }, [])

    useEffect(() => {

        switch(true) {
            case projectData.length === 0:  
                return;
            case projectCount > 5:
                setProjectCount(5)
                return
            case projectCount < 1:
                setProjectCount(1)
                return
            default:
                setTextTransform(false)
                setActiveProject(projectData[projectCount - 1])
                break
        }

    }, [projectCount])

    const handleTextTransform = async() => {
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 3000))
        setIsLoading(false)
        setTextTransform(!textTransform)
    }


    return (
        <>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box max-w-3xl">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                    <h1 className='mb-2 mt-3'>Discover the Future of Innovation</h1>
                    <p className="pb-5">Explore the cutting edge of technology in this Latest Tech section, powered by AI.</p>
                    <TechVideo />

                    <h2 className='text-2xl font-bold my-3'>Latest Projects</h2>
                    <p>Transform complex NASA project summaries into engaging content, showcasing the latest tech advancements shaping our world—and beyond:</p>
                    
                    
                    {isLoading ? 
                    <button className="btn btn-primary btn-outline mr-4 my-3 w-full uppercase font-bold" onClick={handleTextTransform}>
                        Transforming text <span className="loading loading-dots loading-sm"></span>
                    </button>
                    :
                    <button className="btn btn-primary btn-outline mr-4 my-3 w-full uppercase font-bold" onClick={handleTextTransform}>
                        Transform text <Icon icon="mingcute:ai-line" className='cursor-pointer text-lg'/>
                    </button>
                    }
                    <h3 className="font-bold text-lg mt-5">{textTransform ? activeProject.ai_title : activeProject.default_title}</h3>
                    <article className="py-4">
                        {textTransform ? 
                            parser(activeProject.ai_text) 
                            : activeProject.default_text}
                        <br/>
                        <a className="link link-primary mt-4" href={activeProject.url} target='_blank'>Learn More</a>
                    </article>
                    <div className='w-full flex justify-between my-5 gap-3'>
                        
                        <div role="tablist" className="tabs tabs-boxed w-full flex items-center justify-between">
                            
                            {
                                projectData.map((p, i) => {
                                   return (
                                    <a key={i} role='tab' className={projectCount === i + 1 ? "tab tab-active" : "tab"} onClick={() => setProjectCount(i + 1)}>
                                        {String(i + 1)}
                                    </a>
                                   )
                                })
                            }
                            
                        </div>
                        
                    
                    </div>
                    <div className='flex w-full justify-between'>
                        <button className="btn btn-outline" onClick={() => setProjectCount(projectCount - 1)}>
                            Next <Icon icon="ooui:previous-ltr" className='cursor-pointer text-lg'/>
                        </button>
                        <button className="btn btn-outline" onClick={() => setProjectCount(projectCount + 1)}>
                            Prev <Icon icon="ooui:previous-rtl" className='cursor-pointer text-lg'/>
                        </button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div> 
                    
                </div> 
            </dialog>
        </>
    )
}

export default Tech