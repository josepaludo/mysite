// import { forwardRef } from "react"
import ItemLink from "./ItemLink"

type CarouselItemType = {
    title: string
    description: string
    className?: string
}

// export const CarouselItem = forwardRef<
//     HTMLDivElement, CarouselItemType
// >((props, ref) => {
//     return (
//         <div
//             className={"py-10 px-5 md:px-20 transition-transform duration-1000 "+props.className}
//             ref={ref}
//         >

//             <div className="flex justify-between flex-wrap">
//                 <h1 className="text-4xl font-semibold">
//                     {props.title}
//                 </h1>

//                 <div>
//                     <ItemLink isGitHub={true} url="mysite" />
//                     <ItemLink url="https://google.com" />
//                 </div>

//             </div>

//             <p className="md:w-4/5 mx-auto my-auto pt-10 text-justify">
//                 {props.description}
//             </p>
//         </div>
//     )
// })

export default function CarouselItem(
    {title, description, className}: CarouselItemType
) {

    return (
        <div
            className={"py-10 px-5 md:px-20 transition-transform duration-1000 " + className}
            style={{transition: "visibility 1s"}}
        >

            <div className="flex justify-between flex-wrap">
                <h1 className="text-4xl font-semibold ">
                    {title}
                </h1>

                <div>
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