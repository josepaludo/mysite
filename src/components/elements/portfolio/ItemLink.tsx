import GitHubSVG from "../svg/GitHubSVG"
import WebsiteSVG from "../svg/WebsiteSVG"

const iconsSize = "20px"
const githubUrl = "https://github.com/josepaludo/"

type ItemLinkType = {
    isGitHub?: true
    url: string
}


export default function ItemLink(
    {isGitHub, url}: ItemLinkType
) {
    return (
        <a
            className='flex hover:opacity-80'
            href={ (isGitHub ? githubUrl : "") + url }
        >
            { isGitHub ? <GithubIcon /> : <WebsiteIcon /> }

            <span className="ms-1">
                { isGitHub ? "Source Code" : "Live Website" }
            </span>
        </a>
    )
} 


function GithubIcon(
    {className}: {className?: string}
) {

    return (
        <div style={{width: iconsSize}} className={className}>
            <GitHubSVG />
        </div>
    )
}

function WebsiteIcon(
    {className}: {className?: string}
) {

    return (
        <div style={{width: iconsSize}} className={className}>
            <WebsiteSVG />
        </div>
    )
}
