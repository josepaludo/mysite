import { MouseEventHandler, useState } from "react";
import { ArrowHeadSVG } from "../svg/ArrowHeads";
import CarouselItem from "./CarouselItem";
import ItemCard from "./ItemCard";

type CarouselButtonType = {isLeft?: true, onClick?: MouseEventHandler<HTMLButtonElement>}

const mySiteDescription = "Meu site pessoal foi feito com React, Typescript e Tailwind, utilizando Vite para build."
const items: {title: string, description: string}[] = [
    { title: "Meu site", description: mySiteDescription },
    { title: "Outro site1", description: "Outro siteee 1" },
    { title: "Outro site2", description: "Outro siteee 2" },
    { title: "Outro site3", description: "Outro siteee 3" },
    { title: "Outro site4", description: "Outro siteee 4" },
    { title: "Outro site5", description: "Outro siteee 5" },
]
const lastInd = items.length-1


export default function PortfolioCarousel() {

    const [ind, setInd] = useState(0)
    const [hide, setHide] = useState(false)

    function pushItemToRight() {
        setHide(true)
        setTimeout(() => {
            setHide(false)
            setInd(oldInd => oldInd === lastInd ? 0 : oldInd+1)
        }, 500)
    }

    function pushItemToLeft() {
        setHide(true)
        setTimeout(() => {
            setHide(false)
            setInd(oldInd => oldInd === 0 ? lastInd : oldInd-1)
        }, 500)
    }

    return (
        <ItemCard className=" mt-20">
            <h1 className="text-6xl text-center font-semibold pb-10">
                Outros Projetos
            </h1>

            <div className="flex">
                <CarouselButton isLeft={true} onClick={pushItemToLeft} />
                <CarouselItem
                    title={items[ind].title}
                    description={items[ind].title}
                    className={" grow transition-opacity duration-1000 " + (hide ? "opacity-0" : "opacity-1")}
                />
                <CarouselButton onClick={pushItemToRight} />
            </div>
        </ItemCard>
    )
}

function CarouselButton({isLeft, onClick}: CarouselButtonType) {

    return (
        <button
            onClick={onClick}
            className={" flex flex-col justify-center min-h-full group " + (
                isLeft ? " ms-5 md:ms-10 " : " me-5 md:me-10 "
            )}
        >
            <div
                className={" group-hover:opacity-80 bg-gray-500 bg-opacity-20 pr-3.5 p-2 rounded-full "}
                style={{
                    transform: (isLeft ? "" : "scaleX(-1)"),
                    width: "45px",
                    height: "47px"
                }}
            >
                <ArrowHeadSVG />
            </div>
        </button>
    )
}
