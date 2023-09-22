import EmailSVG from "./svg/EmailSVG"
import GitHubSVG from "./svg/GitHubSVG"
import WhatsAppSVG from "./svg/WhatsAppSVG"

import './style.css'


export function MailLink() {

    return (
        <Link url="mailto:joseppaludo@gmail.com" className="shadow">
            <EmailSVG />
        </Link>
    )
}

export function GithubLink({className}: {className?: string}) {

    return (
        <Link url="https://github.com/josepaludo" className={"shadow "+className}>
            <GitHubSVG />
        </Link>
    )
}

export function WhatsappLink() {

    return (
        <Link url="https://wa.me/41999988836" className="shadow" >
            <WhatsAppSVG />
        </Link>
    )
}

function Link(
    {children, url, className}: {children: React.ReactNode, url: string, className?:string}

) {
    return (
        <a
            href={url}
            className={"underline h-20 w-20 p-2 rounded-2xl link "+className}
        >
            {children}
        </a>
    )
}