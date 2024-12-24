import APOD from "../Modal/APOD"
import Tech from '../Modal/Tech'
import About from "../Modal/About"
import Contact from "../Modal/Contact"
import { Icon } from "@iconify/react";
import { useState } from "react"

const Hero = () => {
   
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <APOD />
            <Tech />
            <About />
            <Contact />
            <div
            data-aos="fade"
            className="hero min-h-screen brightness-75"
            style={{
                backgroundImage: "url(./bg-space.jpg)",
            }}>
                <div class="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-neutral-content text-center"> 
                    <div className="max-w-xlg" data-aos="fade">
                        <div className="w-full flex justify-center mb-10" data-aos="fade-down">
                            <Icon icon="line-md:moon-filled-loop" className='text-5xl'/>
                        </div>
                        <div data-aos="fade">
                            <h1 className="mt-4 text-3xl font-bold uppercase text-white border-t-2 pt-16 tracking-wide lg:text-5xl">NASA | Agency Snapshot</h1>
                            <p className="mb-10 border-b-2 pb-16 uppercase font-bold tracking-widest text-md lg:text-lg">
                                Curious to know what NASA does? Explore this agency snapshot.
                            </p>
                        </div>
                        <div className="join join-vertical md:join-horizontal" data-aos="fade-up">
                            <button 
                                className="join-item btn btn-outline text-md text-white uppercase" 
                                onClick={()=>{document.getElementById('my_modal_2').showModal(); setModalOpen(!modalOpen)}}
                                > Latest Tech <Icon icon="material-symbols:biotech-rounded" className='text-xl'/>
                            </button>
                            <button 
                                className="join-item btn btn-outline text-md text-white uppercase" 
                                onClick={()=>document.getElementById('my_modal_1').showModal()}
                                >Daily Snapshot <Icon icon="material-symbols-light:camera-outline" className='text-xl'/>
                            </button>
                            <button 
                                className="join-item btn btn-outline text-md text-white uppercase"
                                onClick={()=>document.getElementById('my_modal_3').showModal()}
                                >About NASA <Icon icon="lineicons:nasa" className='text-xl'/>
                            </button>
                            <button 
                                className="join-item btn btn-outline text-md text-white uppercase"
                                onClick={()=>document.getElementById('my_modal_4').showModal()}
                                >Contact <Icon icon="bxs:contact" className='text-xl'/>
                            </button>
                        </div>
                        <footer id="footer" className="mt-8">
                            <p className="copyright tracking-widest text-sm opacity-75 mb-0 text-center">This website is for educational purposes only and is not affiliated with NASA or any other U.S. government agency.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero