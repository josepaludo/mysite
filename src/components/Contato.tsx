import { BlueBG } from "../style";
import { GithubLink, MailLink, WhatsappLink } from "./elements/Links";
import SectionDiv from "./elements/SectionDiv";
import SectionHeaderCenter from "./elements/headers/SectionHeaderCenter";


export default function Contato() {

    const email = "joseppaludo@gmail.com"
    const number = "41 99998 8836"
    const github = "github.com/josepaludo"

    return <>
        <SectionDiv containerStyle={{backgroundColor: BlueBG}}>
            <SectionHeaderCenter title="Contato" className="text-white" />

            <div className="flex mx-auto w-fit py-10">
                <MailLink />
                <GithubLink className="mx-5" />
                <WhatsappLink />
            </div>

            <ul className="w-fit mx-auto text-center mt-10">
                <li>
                    <Link href={"mailto:"+email} message={email} />
                </li>
                <li>
                    <Link href={"https://"+github} message={github} />
                </li>
                <li>
                    <Link
                        href={"https://wa.me/"+number.replaceAll(" ", "")}
                        message={number}
                    />
                </li>
            </ul>
        </SectionDiv>
    </>
}

function Link({href, message}: {href: string, message: string}) {

    return (
        <a href={href} className="underline">
            {message}
        </a>
    )
}

// function MailLink() {
//     return <Link beforeUrl="mailto:" url="joseppaludo@gmail.com" />
// }

// function GithubLink() {
//     return <Link beforeUrl="https://" url="github.com/josepaludo" />
// }

// function WhatsappLink() {
//     return <Link beforeUrl="https://wa.me/" url="41999988836" />
// }

    // const number = "41 99998 8836"

    // return <>
    //     <a href={"https://wa.me/"+number.replaceAll(" ", "")} className="underline">
    //         {number}
    //     </a>
    // </>


    // const githubRepo = "github.com/josepaludo"
    // return <>
    //     <a href={"https://"+githubRepo} className="underline">
    //         {githubRepo}
    //     </a>
    // </>


    // const email = "joseppaludo@gmail.com"

    // return <>
    //     <a href={"mailto:"+email} className="underline">
    //         {email}
    //     </a>
    // </> 
