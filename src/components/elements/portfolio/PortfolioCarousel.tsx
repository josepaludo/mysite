import { MouseEventHandler, useState } from "react";
import { ArrowHeadSVG } from "../svg/ArrowHeads";
import CarouselItem from "./CarouselItem";
import ItemCard from "./ItemCard";
import { ProjectType } from "../../../types";

const projects: ProjectType[] = [
    {
        title: "Meu site pessoal",
        description: "Meu site pessoal foi feito com React, Typescript e Tailwind, utilizando Vite para build.",
        githubUrl: "mysite",
        websiteUrl: "."
    },
    {
        title: "Dungeon Way is Down",
        description: "Um jogo de linha de comando feito apenas com Python onde o jogador reúne sua party para derrotar goblins, orcs e outros monstros em dungeons onde não há como voltar: o único caminho possível é para baixo.",
        githubUrl: "dungeonwayisdown"
    },
    {
        title: "Tretris",
        description: "Um site onde o usuário pode jogar uma versão do famoso quebra-cabeça de blocos 'Tetris', feito utilizando apenas HTML, CSS e Javascript.",
        githubUrl: "Tretris",
        websiteUrl: "https://josepaludo.000webhostapp.com/tretris/index.html"
    },
    {
        title: "Pedra Papel Tesoura",
        description: "O primeiro projeto web que desenvolvi, feito utilizando apenas HTML, CSS e Javascript.",
        githubUrl: "RockPaperScissors",
        websiteUrl: "https://josepaludo.000webhostapp.com/rockpaperscissors/index.html"
    },
    {
        title: "Calendário",
        description: "Um simples site com um calendário onde é possível selecionar ano e mês, feito com HTML, Javascript e estilizado com Bootstrap.",
        githubUrl: "Calendar",
        websiteUrl: "https://josepaludo.000webhostapp.com/calendar/index.html"
    },
]
const lastInd = projects.length-1


export default function PortfolioCarousel() {

    const [ind, setInd] = useState(0)
    const [hide, setHide] = useState(false)

    function pushItemToRight() {
        if (hide) return;
        setHide(true)
        setTimeout(() => {
            setHide(false)
            setInd(oldInd => oldInd === lastInd ? 0 : oldInd+1)
        }, 550)
    }

    function pushItemToLeft() {
        if (hide) return;
        setHide(true)
        setTimeout(() => {
            setHide(false)
            setInd(oldInd => oldInd === 0 ? lastInd : oldInd-1)
        }, 550)
    }

    return (
        <ItemCard className=" mt-20 " >
            <h1 className="text-6xl text-center font-semibold pb-10">
                Outros Projetos
            </h1>

            <ProjectsBar ind={ind} setInd={setInd} hide={hide} setHide={setHide} />

            <div className="flex"> 
                <CarouselButton isLeft={true} onClick={pushItemToLeft} />
                <CarouselItem
                    project={projects[ind]}
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

function ProjectsBar(
    {ind, setInd, hide, setHide}: ProjectsBarType
) {

    function handleClick(ind: number) {
        if (hide) return
        setHide(true)
        setTimeout(() => {
            setHide(false)
            setInd(ind)
        }, 550)
    }

    return (
        <div className="flex px-5 mx-auto max-w-xl">
            { [...projects.keys()].map(key => (
                <button
                    key={key}
                    onClick={() => handleClick(key)}
                    className={
                        "grow  border-y border-r border-slate-500 h-4 shadow " +
                        (key === 0 ? " rounded-s-lg border-l " : " ") +
                        (key === lastInd ? " rounded-e-lg " : "") +
                        (key === ind ? " bg-slate-500 " : "") +
                        (key === ind && hide ? " bg-opacity-0 " : " bg-opacity-1 ")
                    }
                    style={{transition: "background-color 500ms"}}
                />
            ))}
        </div>
    )
}

type CarouselButtonType = {
    isLeft?: true,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

type ProjectsBarType = {
    ind: number,
    setInd: React.Dispatch<React.SetStateAction<number>>,
    hide: boolean,
    setHide: React.Dispatch<React.SetStateAction<boolean>>
}
