
import { LightBlueBG } from '../style'
import { Section } from '../types'
import Paragraph from './elements/Paragraph'
import SectionDiv from './elements/SectionDiv'
import SectionHeaderRight from './elements/headers/SectionHeaderRight'


export default function Sobre() {

    return <>
        <SectionDiv
            containerStyle={{backgroundColor: LightBlueBG}}
            id={Section.sobre}
        >
            <SectionHeaderRight title='Sobre Mim' className='mb-20' />
            <Paragraph>
                Sou brasileiro, solteiro, tenho 25 anos, moro em Curitiba, sou formado em Filosofia pela Universidade Federal do Paraná e atualmente curso Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul. Estou em busca de oportunidades para avançar minha carreira no mercado de trabalho na área de desenvolvimento web. Tenho interesse por desenvolver novos conhecimentos e habilidades, aprendo rápido e me comunico bem.
            </Paragraph>
        </SectionDiv>
    </>
}