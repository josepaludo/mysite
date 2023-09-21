
type SectionHeaderType = {
    title: string
    className?: string
}


export default function SectionHeader(
    {title, className}: SectionHeaderType
) {

    return <>
        <h1 className={"text-end font-bold text-5xl lg:text-6xl xl:text-7xl mr-20 lg:mr-40 xl:mr-72 2xl:mr-96 mb-10 " + className}>
            {title}
        </h1>
    </>
}