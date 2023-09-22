import { useEffect, useState } from 'react'
import './style.css'

import f1 from './print1.png'
import f2 from './print2.png'
import f3 from './print3.png'

const imageSources = [f1, f2, f3]


export default function ImageRotator() {

    const [imgInd, setImgInd] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            setImgInd(ind => ind === imageSources.length-1 ? 0 : ind+1)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="mx-auto w-5/6 relative">
            { imageSources.map((imageSource, key) => (
                <Img
                    key={key}
                    src={imageSource}
                    ind={key}
                    currentInd={imgInd}
                />
            ))}
        </div>
    )
}

function Img(
    {src, ind, currentInd}: {src: string, ind: number, currentInd: number}
) {
    const className = ind === currentInd ?
        " opacity-1 static " : " opacity-0 absolute "

    return (
        <img
            src={src}
            alt={`Print screen ${ind} da aplicação web 'Social'`}
            className={`top-0 transition-opacity duration-500 ${className}`}
            />
    )
}


    // const img1 = <img src={f1} alt="Print screen 1 da aplicação web 'Social'" className={'transition-opacity duration-500 '} />
    // const img2 = <img src={f2} alt="Print screen 2 da aplicação web 'Social'" />
    // const img3 = <img src={f3} alt="Print screen 3 da aplicação web 'Social'" />

    // const images = [img1, img2, img3]

        //  {images[imgInd]} 
        //      <Img src={f1} ind={1} currentInd={imgInd} />
        //     <Img src={f2} ind={2} currentInd={imgInd} />
        //     <Img src={f3} ind={3} currentInd={imgInd} /> 