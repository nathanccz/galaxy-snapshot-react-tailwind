import { useRef } from 'react'
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import parser from 'html-react-parser';

gsap.registerPlugin(useGSAP);

const Article = ({ text }) => {
    const container = useRef();

    useGSAP(
        () => {
            gsap.timeline().from('.newArticle *', {opacity: 0, stagger:0.3, duration:0.8})
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