
type SectionHeaderType = {
    title: string
    className?: string
}


export default function SectionHeader(
    {title, className}: SectionHeaderType
) {

    return <>
        <h1 className={" font-bold text-5xl lg:text-6xl xl:text-7xl mb-10 " + className}>
            {title}
        </h1>
    </>
}
