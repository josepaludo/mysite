import { MouseEventHandler, useState } from "react";
import { ArrowHeadSVG } from "../svg/ArrowHeads";
// import {CarouselItem} from "./CarouselItem";
import CarouselItem from "./CarouselItem";
import ItemCard from "./ItemCard";

enum Direction { left, right }

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

    // const item = useRef<HTMLDivElement>(null)
    const [canClick, setCanClick] = useState(true)
    const [itemsInd, setItemsInd] = useState(0)
    const [direction, setDirection] = useState<Direction>()

    function pushItemToRight() {
        if (!canClick) return
        setCanClick(false)
        setDirection(Direction.right)
        setTimeout(() => {
            setItemsInd(oldInd => oldInd === 0 ? lastInd : oldInd-1)
            setTimeout(() => setCanClick(true), 500)
        }, 1000)
    }

    function pushItemToLeft() {
        if (!canClick) return
        setCanClick(false)
        setDirection(Direction.left)
        setTimeout(() => {
            setCanClick(true)
            setItemsInd(oldInd => oldInd === lastInd ? 0 : oldInd+1)
        }, 1000)
    }

    return (
        <ItemCard className=" mt-20">
            <h1 className="text-6xl text-center font-semibold pb-10">
                Outros Projetos
            </h1>

            <div className="flex">
                <CarouselButton isLeft={true} onClick={pushItemToLeft} />
                <CarouselSpin
                    canClick={canClick}
                    direction={direction}
                    itemsInd={itemsInd}
                />
                <CarouselButton onClick={pushItemToRight} />
            </div>
        </ItemCard>
    )
}

function CarouselButton(
    {isLeft, onClick}: {isLeft?: true, onClick?: MouseEventHandler<HTMLButtonElement>}
) {

    return (
        <button
            onClick={onClick}
            className={" flex flex-col justify-center bg-gray-500 min-h-full bg-opacity-10 group " + (
                isLeft ? " ms-5 md:ms-16 rounded-l-xl" : " me-5 md:me-16 rounded-r-xl"
            )}
        >
            <div
                className={"w-10 group-hover:opacity-80 "}
                style={{transform: (isLeft ? "" : "scaleX(-1)")}}
            >
                <ArrowHeadSVG />
            </div>
        </button>
    )
}

function CarouselSpin(
    {direction, itemsInd, canClick}: {direction?: Direction, itemsInd: number, canClick: boolean}
) {

    return (
        <div className="relative min-h-fit grow overflow-hidden">
            { [-1, 0, 1].map((item, key) => {
                let transitionClass = ""
                let ind = item
                switch (ind) {
                    case -1:
                        if (direction === Direction.left) return
                        ind = itemsInd === 0 ? lastInd : itemsInd-1
                        transitionClass = canClick ? " invisible -translate-x-80 scale-50" : " " 
                        return (
                            <CarouselItem
                                key={key}
                                title={items[ind].title}
                                description={items[ind].description}
                                className={"absolute top-0 " + transitionClass}
                            />
                        )
                    case 0:
                        transitionClass = direction === Direction.right ? " translate-x-80" : " -translate-x-80"
                        return (
                            <CarouselItem
                                key={key}
                                title={items[itemsInd].title}
                                description={items[itemsInd].description}
                                className={canClick ? "" : (" scale-50" + transitionClass)}
                            />
                        )
                    case 1:
                        if (direction === Direction.right) return
                        ind = itemsInd === lastInd ? 0 : itemsInd+1
                        transitionClass = canClick ? " translate-x-80 scale-50 invisible" : " "
                        return (
                            <CarouselItem
                                key={key}
                                title={items[ind].title}
                                description={items[ind].description}
                                className={"absolute top-0 " + transitionClass}
                            />
                        )
                }
            })}
        </div>) 
}




                        // if (ind === -1 || (itemsInd === 0 && ind === items.length-1)) {
                        //     return (
                        //         <CarouselItem
                        //             key={ind}
                        //             title={item.title}
                        //             description={item.description}
                        //         />
                        //     )
                        // }
                        // if (ind === itemsInd) {
                        //     return (
                        //         <CarouselItem
                        //             key={ind}
                        //             title={item.title}
                        //             description={item.description}
                        //             className={( canClick ? "" : "translate-x-80 scale-50")}
                        //         />
                        //         )

                        // }
                        // if (ind === itemsInd +1 || (itemsInd === items.length-1 && ind === 0)) {
                        //     return (
                        //         <CarouselItem
                        //             key={ind}
                        //             title={item.title}
                        //             description={item.description}
                        //         />
                        //     )
                        // }