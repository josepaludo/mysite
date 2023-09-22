import { maxWidth1920px } from '../style'
import f from './f.jpg'


export default function Hero() {

    return <>
        <div
            style={{background: "linear-gradient(180deg, rgba(116,163,203,1) 0%, rgba(202,228,237,1) 100%)"}}
            className="pb-8 md:pb-20 relative z-0"
        >
            <div className="mx-auto" style={maxWidth1920px}>

                <div className="md:absolute md:top-0 w-full" style={maxWidth1920px}>
                    <div className="w-10/12 mx-auto md:pt-2 lg:pt-10 pb-4">
                        <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white">
                            José Pedro Paludo
                        </h1>
                        <h1 className=" font-light text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                            Desenvolvedor Web
                        </h1>
                    </div>
                </div>

                <div className='w-10/12 mx-auto'>
                    <img
                        // src={imgSrc}
                        src={f}
                        alt="Foto de Perfil de José Pedro Paludo"
                        className='w-full md:w-10/12 lg:w-2/3 mx-auto rounded-2xl lg:ml-auto lg:mr-0 shadow-2xl'
                    />
                </div>
            </div>
        </div>
    </>
}
// const imgSrc = "https://i.postimg.cc/tCkNZr0P/foto-perfil-jose-paludo.jpg"
