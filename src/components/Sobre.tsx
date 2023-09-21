
import Paragraph from './elements/Paragraph'
import SectionDiv from './elements/SectionDiv'
import SectionHeader from './elements/SectionHeader'


export default function Sobre() {

    return <>
        <SectionDiv
            containerClassName="py-40"
            // containerStyle={{backgroundColor: "#cac8cd"}}
            // containerStyle={{backgroundColor: "rgba(202,228,237,1)"}}
            containerStyle={{background: "linear-gradient(180deg, rgba(202,228,237,1) 0%, rgba(116,163,203,1) 100%)"}}
        >
            <SectionHeader title='Sobre' className='text-slate-950' />
            <Paragraph>
                Sou brasileiro, solteiro, tenho 25 anos, moro em Curitiba, sou formado em Filosofia pela Universidade Federal do Paraná e atualmente curso Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul. Estou em busca de oportunidades para avançar minha carreira no mercado de trabalho na área de desenvolvimento web. Tenho interesse por desenvoler novos conhecimentos e habilidades, aprendo rápido e me comunico bem.
            </Paragraph>
        </SectionDiv>
    </>
}