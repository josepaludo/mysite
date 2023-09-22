import ItemLink from "./ItemLink"
import './style.css'

type CarouselItemType = {
    title: string
    description: string
    className?: string
}


export default function CarouselItem(
    {title, description, className}: CarouselItemType
) {

    return (
        <div
            className={"py-10 px-5 md:p-12 lg:p-20 " + className}
        >

            <div className="justify-between sm:flex">
                <h1 className="text-4xl font-semibold ">
                    {title}
                </h1>

                <div className="mt-5 sm:mt-auto">
                    <ItemLink isGitHub={true} url="mysite" />
                    <ItemLink url="https://google.com" />
                </div>

            </div>

            <p className="md:w-4/5 mx-auto my-auto pt-10 text-justify">
                {description}
            </p>
        </div>
    )
}