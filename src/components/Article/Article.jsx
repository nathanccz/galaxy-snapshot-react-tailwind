import { useRef } from 'react'
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import parser from 'html-react-parser';

gsap.registerPlugin(useGSAP);

const Article = ({ text }) => {
    const container = useRef();

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                  trigger: ".newArticle", // The element that triggers the animation
                  start: "top bottom",   // When the top of the container hits the bottom of the viewport
                  end: "bottom top",     // When the bottom of the container reaches the top of the viewport
                  scrub: true,           // Smoothly sync animation with scroll
                }
              }).from('.newArticle *', {opacity: 0, stagger:0.3, duration:0.8})
        }, 
        {scope: container}
    )

    return (
        <div ref={container} className="article">
            <div className='newArticle '>
                {parser(text)}
            </div>
        </div>
    )
}

export default Article