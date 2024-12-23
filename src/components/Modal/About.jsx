const About = () => {

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box max-w-3xl">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h1 className='mb-2 mt-3'>About NASA</h1>
                <img src="../../image.jpg" alt="" className="my-10"/>
                <h3 className="font-bold text-lg mt-5">For more than 50 years, NASA has been breaking barriers to achieve the seemingly impossible.</h3>
                <p className="py-4">At its 20 centers and facilities across the country – and the only National Laboratory in space – NASA studies Earth, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.</p>
                <a href="https://www.nasa.gov/" target="_blank">
                    <button className="btn btn-outline">Learn more</button>
                </a> 
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div> 
            </div> 
        </dialog>
    )
}

export default About