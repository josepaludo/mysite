
export function List(
    {children, className}: {children: React.ReactNode, className?: string}
) {

    return <>
        <ul className={"max-w-5xl mx-auto "+className}>
            {children}
        </ul>
    </>
}

export function Item(
    {children, className}: {children: React.ReactNode, className?: string}
) {

    return <>
        <li className={"text-2xl "+className}>
            {children}
        </li>
    </>
}
