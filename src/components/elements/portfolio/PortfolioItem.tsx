import GitHubSVG from '../svg/GitHubSVG'
import WebsiteSVG from '../svg/WebsiteSVG'
import ImageRotator from './ImagesRotator'

export default function PortfolioItem() {

    const githubUrl = "https://github.com/josepaludo/"

    return (
        <div className=" rounded-xl shadow-lg bg-white bg-opacity-90 max-w-4xl mx-auto py-10 lg:pt-20 ">

            <div className="mb-10 sm:flex">
                <div className='w-2/3 mb-10 mx-auto sm:my-auto sm:w-fit'>
                    <h1 className=" mx-auto text-4xl font-semibold self-center lg:text-6xl">
                        Social
                    </h1>

                    <div className='mt-10'>
                        <a className='flex hover:opacity-80' href={githubUrl+"nexttoken"}>
                            <GithubIcon className='me-1' />
                            Source Code
                        </a>
                        <a className='flex hover:opacity-80' href="https://google.com">
                            <WebsiteIcon className='me-1' />
                            Live website
                        </a>
                    </div>

                </div>

                <p className="w-10/12 sm:w-1/2 mx-auto text-justify">
                    {socialDescriptionPTBR}
                </p>
            </div>

            <ImageRotator />

        </div>
    )
}

function GithubIcon(
    {className}: {className?: string}
) {

    return (
        <div style={{width: iconsSize}} className={className}>
            <GitHubSVG />
        </div>
    )
}

function WebsiteIcon(
    {className}: {className?: string}
) {

    return (
        <div style={{width: iconsSize}} className={className}>
            <WebsiteSVG />
        </div>
    )
}

const iconsSize = "20px"

const socialDescriptionPTBR = "'Social' é uma aplicação web desenvolvida com Next.js utilizando Typescript, Prisma, Tailwind CSS, Postgresql e pussui um sistema próprio de autenticação com JWT. Em 'Social', os usuários podem criar e compartilhar posts, comentar e votar em posts, criar e seguir grupos, seguir outros usuários e realizar buscas utilizando-se de filtros com diversos parâmetros."


        // <div className=" rounded-xl shadow bg-white bg-opacity-90 max-w-4xl mx-auto py-10 ">

        //     <div className="flex mb-10">
        //         <h1 className=" mx-auto text-4xl font-semibold self-center">
        //             Social
        //         </h1>
        //         <p className="w-1/2 mx-auto text-justify">
        //             {socialDescriptionPTBR}
        //         </p>
        //     </div>

        //     <div className="flex">
        //         <div className="w-2/3 mx-auto">
        //             <img src={f} alt="Print screen da aplicação web 'Social'" />
        //         </div>
        //         <div className="mx-auto self-center">
        //             <h1 className='flex'>
        //                 <GithubIcon className='me-1' />
        //                 Source Code
        //             </h1>
        //             <h1 className='flex'>
        //                 <WebsiteIcon className='me-1' />
        //                 Live website
        //             </h1>
        //         </div>
        //     </div>

        // </div>