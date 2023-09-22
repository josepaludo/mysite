import { maxWidth1920px } from "../../style"

type SectionDivType = {
    children: React.ReactNode
    containerClassName?: string
    containedClassName?: string
    containerStyle?: React.CSSProperties
    containedStyle?: React.CSSProperties
    isContato?: true
    isSobre?: true
}


export default function SectionDiv({children, containerClassName, containedClassName, containedStyle, containerStyle}: SectionDivType) {

    return <>
        <section
            className={"py-20 "+containerClassName}
            style={containerStyle}
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