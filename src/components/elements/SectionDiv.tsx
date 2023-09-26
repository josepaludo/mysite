import { maxWidth1920px } from "../../style"

type SectionDivType = {
    children: React.ReactNode
    containerClassName?: string
    containedClassName?: string
    containerStyle?: React.CSSProperties
    containedStyle?: React.CSSProperties
    isContato?: true
    isSobre?: true
    id?: string
}


export default function SectionDiv({children, containerClassName, containedClassName, containedStyle, containerStyle, id}: SectionDivType) {

    return <>
        <section
            className={"py-20 "+containerClassName}
            style={containerStyle}
            id={id}
        >
            <div
                className={"w-10/12 mx-auto "+containedClassName}
                style={{...containedStyle, ...maxWidth1920px}}
            >
                {children}
            </div>
        </section>
    </>
}