import { useEffect, useState } from 'react'
import './style.css'


export default function ImageRotator(
    {imageSources}: {imageSources: string[]}
) {

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
