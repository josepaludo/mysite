
export default function ItemCard(
    {children, className}: {children: React.ReactNode, className?: string}
) {

    return (
        <div className={"rounded-xl shadow-lg bg-white bg-opacity-90 max-w-4xl mx-auto py-10 lg:pt-20   " + className}>
            {children}
        </div>
    )
}