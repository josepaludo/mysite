import { LightBlueBG } from "../style";
import SectionDiv from "./elements/SectionDiv";
import SectionHeaderLeft from "./elements/headers/SectionHeaderLeft";
import PortfolioItem from "./elements/portfolio/PortfolioItem";
import PortfolioCarousel from "./elements/portfolio/PortfolioCarousel";
import { Section } from "../types";

import social1 from '../assets/images/social1.png'
import social2 from '../assets/images/social2.png'
import social3 from '../assets/images/social3.png'
import social4 from '../assets/images/social4.png'
import social5 from '../assets/images/social5.png'
import social6 from '../assets/images/social6.png'
import social7 from '../assets/images/social7.png'
import social8 from '../assets/images/social8.png'

import clone1 from '../assets/images/clone1.png'
import clone2 from '../assets/images/clone2.png'
import clone3 from '../assets/images/clone3.png'
import clone4 from '../assets/images/clone4.png'
import clone5 from '../assets/images/clone5.png'
import clone6 from '../assets/images/clone6.png'
import clone7 from '../assets/images/clone7.png'
import clone8 from '../assets/images/clone8.png'


const socialImages = [social1, social2, social3, social4, social5, social6, social7, social8]
const cloneImages = [clone1, clone2, clone3, clone4, clone5, clone6, clone7, clone8]


export default function Portfolio() {

    return <>
        <SectionDiv
            containerStyle={{backgroundColor: LightBlueBG}}
            id={Section.portfolio}
        >

            <SectionHeaderLeft title="Portfolio" className="mb-20" />

            <PortfolioItem
                // imageSources={liveImages}
                imageSources={socialImages}
                title="Social"
                liveSiteUrl="https://nextsocial-two.vercel.app/"
                githubRepo="nextsocial"
                description={socialDescription}
            />

            <PortfolioItem
                className="mt-20"
                imageSources={cloneImages}
                title="Clone"
                liveSiteUrl="https://gooogle.com"
                githubRepo="djangoclone"
                description={cloneDescription}
            />

            <PortfolioCarousel />

        </SectionDiv>
    </>
}

const socialDescription = "'Social' é uma aplicação web desenvolvida com Next.js utilizando Typescript, Prisma, Tailwind CSS, Postgresql e pussui um sistema próprio de autenticação com JWT. Em 'Social', os usuários podem criar e compartilhar posts, comentar e votar em posts, criar e seguir grupos, seguir outros usuários e realizar buscas utilizando-se de filtros com diversos parâmetros."
const cloneDescription = "'Clone' é uma aplicação web desenvolvida com Django 4.2 utilizando Bootstrap 5 e Postgresql. Suas características e funcionalidades são, em essência, as mesmas que as de 'Social', pois o objetivo dessas duas aplicações foi o de realizar projetos semelhantes com stacks diferentes."
