import SectionHeader from "./SectionHeader"

type SectionHeaderType = {
    title: string
    className?: string
}

export default function SectionHeaderLeft(
    {title, className}: SectionHeaderType
) {

    return <>
        <SectionHeader
            title={title}
            className={" ml-20 lg:ml-40 2xl:ml-72 " + className} />
    </>
}