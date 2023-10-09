import { LightBlueToBlueGradient } from "../style";
import { Section } from "../types";
import { GithubLink, LinkedinLink, MailLink, WhatsappLink } from "./elements/Links";
import SectionDiv from "./elements/SectionDiv";
import SectionHeaderCenter from "./elements/headers/SectionHeaderCenter";


export default function Contato() {

    return <>
        <SectionDiv
            containerStyle={{background: LightBlueToBlueGradient}}
            id={Section.contato}
        >

            <SectionHeaderCenter title="Contato"/>

            <div className="flex flex-col sm:flex-row mx-auto w-fit py-10">
                <MailLink />
                <GithubLink className="my-3 sm:mx-5 sm:my-0" />
                <WhatsappLink className="mb-3 sm:me-5 sm:mb-0" />
                <LinkedinLink />
            </div>

            <SmallLinks />

        </SectionDiv>
    </>
}

function SmallLinks() {

    const email = "joseppaludo@gmail.com"
    const github = "github.com/josepaludo"
    const linkedin = "linkedin.com/in/josepaludo"

    return <>
        <ul className="w-fit mx-auto text-center mt-10">
            <li>
                <SmallLink href={"mailto:"+email} message={email} />
            </li>
            <li className="my-2">
                <SmallLink href={"https://"+github} message={github} />
            </li>
            <li className="mb-2">
                <SmallLink href={"https://"+linkedin} message={linkedin} />
            </li>
            <li>
                <SmallLink href="https://wa.me/41999988836" message="41 99998 8836" />
            </li>
        </ul>
    </>
}

function SmallLink({href, message}: {href: string, message: string}) {

    return (
        <a href={href} className="underline hover:opacity-80">
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
