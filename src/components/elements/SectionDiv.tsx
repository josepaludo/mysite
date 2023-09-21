
type SectionDivType = {
    children: React.ReactNode
    containerClassName?: string
    containedClassName?: string
    containerStyle?: React.CSSProperties
    containedStyle?: React.CSSProperties
}

const maxWidth = "1920px"


export default function SectionDiv({children, containerClassName, containedClassName, containedStyle, containerStyle}: SectionDivType) {

    return <>
        <section
            className={containerClassName}
            style={containerStyle}
        >
            <div
                className={"w-10/12 mx-auto "+containedClassName}
                style={{...containedStyle, maxWidth}}
            >
                {children}
            </div>
        </section>
    </>
}