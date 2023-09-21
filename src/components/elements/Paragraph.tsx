
type ParagraphType = {
    children: React.ReactNode
}

export default function Paragraph(
    {children}: ParagraphType
) {

    return <>
        <p className="text-lg max-w-5xl mx-auto text-justify lg:text-xl">
            {children}
        </p>
    </>
}