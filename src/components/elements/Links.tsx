import EmailSVG from "./svg/EmailSVG"
import GitHubSVG from "./svg/GitHubSVG"
import WhatsAppSVG from "./svg/WhatsAppSVG"


export function MailLink() {

    return (
        <Link url="mailto:joseppaludo@gmail.com">
            <EmailSVG />
        </Link>
    )
}

export function GithubLink({className}: {className?: string}) {

    return (
        <Link url="https://github.com/josepaludo" className={className}>
            <GitHubSVG />
        </Link>
    )
}

export function WhatsappLink() {

    return (
        <Link url="https://wa.me/41999988836">
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
            className={"underline h-20 w-20 bg-white p-2 rounded-2xl hover:bg-opacity-50 "+className}
        >
            {children}
        </a>
    )
}