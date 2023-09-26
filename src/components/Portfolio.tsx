import { LightBlueBG } from "../style";
import SectionDiv from "./elements/SectionDiv";
import SectionHeaderLeft from "./elements/headers/SectionHeaderLeft";
import PortfolioItem from "./elements/portfolio/PortfolioItem";
import PortfolioCarousel from "./elements/portfolio/PortfolioCarousel";

import social1 from '../assets/images/print1.png'
import social2 from '../assets/images/print2.png'
import social3 from '../assets/images/print3.png'
import { Section } from "../types";

const liveImages = [
    "https://u.cubeupload.com/josepaludo/print1.png",
    "https://u.cubeupload.com/josepaludo/print2.png",
    "https://u.cubeupload.com/josepaludo/print3.png"
]


export default function Portfolio() {

    return <>
        <SectionDiv
            containerStyle={{backgroundColor: LightBlueBG}}
            id={Section.portfolio}
        >

            <SectionHeaderLeft title="Portfolio" className="mb-20" />

            <PortfolioItem
                // imageSources={liveImages}
                imageSources={[social1, social2, social3]}
                title="Social"
                liveSiteUrl="https://gooogle.com"
                githubRepo="nexttoken"
                description={socialDescription}
            />

            <PortfolioItem
                className="mt-20"
                imageSources={[social1, social2, social3]}
                title="Clone"
                liveSiteUrl="https://gooogle.com"
                githubRepo="djangoforum"
                description={cloneDescription}
            />

            <PortfolioCarousel />

        </SectionDiv>
    </>
}

const socialDescription = "'Social' é uma aplicação web desenvolvida com Next.js utilizando Typescript, Prisma, Tailwind CSS, Postgresql e pussui um sistema próprio de autenticação com JWT. Em 'Social', os usuários podem criar e compartilhar posts, comentar e votar em posts, criar e seguir grupos, seguir outros usuários e realizar buscas utilizando-se de filtros com diversos parâmetros."
const cloneDescription = "'Clone' é uma aplicação web desenvolvida com Django 4.2 utilizando Bootstrap 5 e Postgresql. Suas características e funcionalidades são, em essência, as mesmas que as de 'Social', pois o objetivo dessas duas aplicações foi o de realizar projetos semelhantes com stacks diferentes."
