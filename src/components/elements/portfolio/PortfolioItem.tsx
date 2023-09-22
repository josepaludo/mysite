import ItemLink from './ItemLink'
import ImageRotator from './ImagesRotator'
import ItemCard from './ItemCard'

type PortfolioItemType = {
    imageSources: string[]
    title: string
    liveSiteUrl: string
    githubRepo: string
    description: string
}


export default function PortfolioItem(
    {imageSources, title, liveSiteUrl, githubRepo, description}: PortfolioItemType
) {

    return (
        <ItemCard>

            <div className="mb-10 sm:flex">
                <div className='w-2/3 mb-10 mx-auto sm:my-auto sm:w-fit'>
                    <h1 className=" mx-auto text-4xl font-semibold self-center lg:text-6xl">
                        {title}
                    </h1>

                    <div className='mt-10'>
                        <ItemLink isGitHub={true} url={githubRepo} />
                        <ItemLink url={liveSiteUrl} />
                    </div>

                </div>

                <p className="w-10/12 sm:w-1/2 mx-auto text-justify">
                    {description}
                </p>
            </div>

            <ImageRotator imageSources={imageSources} />

        </ItemCard>
    )
}
