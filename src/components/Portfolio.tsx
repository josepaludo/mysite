import { LightBlueBG } from "../style";
import SectionDiv from "./elements/SectionDiv";
import SectionHeaderLeft from "./elements/headers/SectionHeaderLeft";
import PortfolioCarousel from "./elements/portfolio/PortfolioCarousel";
import PortfolioItem from "./elements/portfolio/PortfolioItem";


export default function Portfolio() {

    return <>
        <SectionDiv containerStyle={{backgroundColor: LightBlueBG}}>
            <SectionHeaderLeft title="Portfolio" className="mb-20" />

            {/* <PortfolioCarousel /> */}
            <PortfolioItem />
        </SectionDiv>
    </>
}