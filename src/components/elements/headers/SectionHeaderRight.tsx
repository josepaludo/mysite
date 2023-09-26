import SectionHeader from "./SectionHeader"

type SectionHeaderType = {
    title: string
    className?: string
}

export default function SectionHeaderRight(
    {title, className}: SectionHeaderType
) {

    return <>
        <SectionHeader
            title={title}
            className={" text-end mr-20 lg:mr-40 2xl:mr-72 " + className} />
    </>
}