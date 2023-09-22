import { LightBlueBG } from "../style";
import SectionDiv from "./elements/SectionDiv";
import SectionHeaderLeft from "./elements/headers/SectionHeaderLeft";
import PortfolioItem from "./elements/portfolio/PortfolioItem";

import social1 from '../assets/images/print1.png'
import social2 from '../assets/images/print2.png'
import social3 from '../assets/images/print3.png'
import PortfolioCarousel from "./elements/portfolio/PortfolioCarousel";


export default function Portfolio() {


    (console.log(import.meta.env.KEYY))
    return <>
        <SectionDiv containerStyle={{backgroundColor: LightBlueBG}}>

            <SectionHeaderLeft title="Portfolio" className="mb-20" />

            <PortfolioItem
                imageSources={[social1, social2, social3]}
                title="Social"
                liveSiteUrl="https://gooogle.com"
                githubRepo="nexttoken"
                description={socialDescriptionPTBR}
            />

            <PortfolioCarousel />

        </SectionDiv>
    </>
}

const socialDescriptionPTBR = "'Social' é uma aplicação web desenvolvida com Next.js utilizando Typescript, Prisma, Tailwind CSS, Postgresql e pussui um sistema próprio de autenticação com JWT. Em 'Social', os usuários podem criar e compartilhar posts, comentar e votar em posts, criar e seguir grupos, seguir outros usuários e realizar buscas utilizando-se de filtros com diversos parâmetros."
