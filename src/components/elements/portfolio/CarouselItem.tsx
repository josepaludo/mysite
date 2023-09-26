import { ProjectType } from "../../../types"
import ItemLink from "./ItemLink"
import './style.css'

type CarouselItemType = { project: ProjectType, className?: string }


export default function CarouselItem(
    {project, className}: CarouselItemType
) {

    return (
        <div
            className={"py-10 px-5 md:p-12 lg:p-20 " + className}
        >

            <div className="justify-between sm:flex">
                <h1 className="text-3xl font-semibold ">
                    {project.title}
                </h1>

                <div className="mt-5 sm:mt-0">
                    <ItemLink isGitHub={true} url={project.githubUrl} />
                    { project.websiteUrl &&
                        <ItemLink url={project.websiteUrl} />
                    }
                </div>

            </div>

            <p className="md:w-4/5 mx-auto my-auto pt-10 text-justify">
                {project.description}
            </p>
        </div>
    )
}