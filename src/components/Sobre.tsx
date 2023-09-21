
import { LightBlueToBlueGradient } from '../style'
import Paragraph from './elements/Paragraph'
import SectionDiv from './elements/SectionDiv'
import SectionHeaderRight from './elements/headers/SectionHeaderRight'


export default function Sobre() {

    return <>
        <SectionDiv containerStyle={{background: LightBlueToBlueGradient}}>
            <SectionHeaderRight title='Sobre' className='text-slate-950' />
            <Paragraph>
                Sou brasileiro, solteiro, tenho 25 anos, moro em Curitiba, sou formado em Filosofia pela Universidade Federal do Paraná e atualmente curso Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul. Estou em busca de oportunidades para avançar minha carreira no mercado de trabalho na área de desenvolvimento web. Tenho interesse por desenvolver novos conhecimentos e habilidades, aprendo rápido e me comunico bem.
            </Paragraph>
        </SectionDiv>
    </>
}