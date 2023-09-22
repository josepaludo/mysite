import { useEffect, useRef, useState } from "react"
import { maxWidth1920px } from "../style"

export default function NavBar() {

    const nav = useRef<HTMLDivElement|null>(null)
    const [scrollIsAtTop, setScrollIsAtTop] = useState(true)

    useEffect(() => {

        function handleScroll() {
            if (!nav.current) return
            const scrollNum = Math.round(window.scrollY/400)
            setScrollIsAtTop(scrollNum < 1)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    useEffect(() => {
        if (!nav.current) return
        nav.current.style.paddingTop = scrollIsAtTop ? "30px" : "10px"
        nav.current.style.paddingBottom = scrollIsAtTop ? "30px" : "10px"
    } , [scrollIsAtTop])

    function resetScroll() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <nav
            className="text-white sticky top-0 z-10 shadow"
            style={{backgroundColor: "#041525"}}
        >
            <div
                ref={nav}
                className="mx-auto w-10/12 flex justify-between items-center py-10"
                style={{...maxWidth1920px, transition: "padding 0.6s ease"}}
            >
                <button
                    onClick={resetScroll}
                    className="text-lg md:text-xl lg:text-2xl"
                >
                    Início
                </button>

                <div className="flex text-xs md:text-sm lg:text-base ">
                    <button>
                        Portfolio
                    </button>
                    <button className="mx-3 md:mx-10 lg:mx-20">
                        Sobre Mim
                    </button>
                    <button>
                        Contato
                    </button>
                </div>

            </div>
        </nav>
    )
}