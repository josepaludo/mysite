import f from './f.jpg'

export default function Hero() {

    return <>
        <div
            // style={{background: "linear-gradient(180deg, rgba(127,170,213,1) 0%, rgba(225,231,229,1) 100%)"}}
            style={{background: "linear-gradient(180deg, rgba(116,163,203,1) 0%, rgba(202,228,237,1) 100%)"}}
            className="py-16 relative z-0"
        >
            <div className="mx-auto" style={{maxWidth: "1920px"}}>
                <div className="sm:absolute sm:top-0 w-full">
                    <div className="text-slate-900 mx-auto w-10/12 sm:w-9/12 xl:w-10/12 sm:pt-20 pb-10">
                        <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
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
                        className='w-full max-w-screen-lg mx-auto rounded-2xl lg:ml-auto lg:mr-0 shadow-2xl'
                    />
                </div>
            </div>
        </div>
    </>
}
// const imgSrc = "https://i.postimg.cc/tCkNZr0P/foto-perfil-jose-paludo.jpg"
