import SectionHeader from "./SectionHeader"

type SectionHeaderType = {
    title: string
    className?: string
}

export default function SectionHeaderCenter(
    {title, className}: SectionHeaderType
) {

    return <>
        <SectionHeader
            title={title}
            className={" text-center " + className} />
    </>
}