import { LightBlueBG } from "../style";
import SectionDiv from "./elements/SectionDiv";
import SectionHeaderLeft from "./elements/headers/SectionHeaderLeft";


export default function Portfolio() {

    return <>
        <SectionDiv containerStyle={{backgroundColor: LightBlueBG}}>
            <SectionHeaderLeft title="Portfolio" />
        </SectionDiv>
    </>
}