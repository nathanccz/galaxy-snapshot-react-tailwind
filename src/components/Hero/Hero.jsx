import APOD from "../Modal/APOD"
import Tech from '../Modal/Tech'
import About from "../Modal/About"
import Contact from "../Modal/Contact"

const Hero = () => {

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
                        <h1 className="mb-5 text-3xl font-bold uppercase text-white border-t-2 pt-20 tracking-wide lg:text-5xl" data-aos="fade-left">NASA | Agency Snapshot</h1>
                        <p className="mb-10 border-b-2 pb-20 uppercase font-bold tracking-widest text-md lg:text-lg" data-aos="fade-right">
                            Curious to know what NASA does? Explore this agency snapshot.
                        </p>
                        <div className="join join-vertical md:join-horizontal" data-aos="fade-up">
                            <button 
                                className="join-item btn btn-outline text-md text-white uppercase" 
                                onClick={()=>document.getElementById('my_modal_2').showModal()}
                                >Latest Tech
                            </button>
                            <button 
                                className="join-item btn btn-outline text-md text-white uppercase" 
                                onClick={()=>document.getElementById('my_modal_1').showModal()}
                                >Picture of the Day
                            </button>
                            <button 
                                className="join-item btn btn-outline text-md text-white uppercase"
                                onClick={()=>document.getElementById('my_modal_3').showModal()}
                                >About NASA</button>
                            <button 
                                className="join-item btn btn-outline text-md text-white uppercase"
                                onClick={()=>document.getElementById('my_modal_4').showModal()}
                                >Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero


{/* <footer id="footer" className="w-full max-w-full mt-10">
                    <p className="copyright tracking-widest text-sm opacity-75 mb-0 text-center">This website is for educational purposes only. It is not affiliated with NASA or related U.S. government agencies.</p>
                </footer> */}