import { useEffect, useRef, useState } from "react"

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
        nav.current.style.padding = scrollIsAtTop ? "30px" : "10px"
    } , [scrollIsAtTop])

    function resetScroll() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <nav
            className="text-white sticky top-0 z-10 shadow"
            style={{backgroundColor: "#33343a"}}
        >
            <div
                ref={nav}
                className="mx-auto w-10/12 flex justify-between items-center py-10"
                style={{
                    maxWidth: "1920px",
                    transition: "padding 0.6s ease",
                    // padding
                }}
            >
                <button
                    onClick={resetScroll}
                    className="text-2xl"
                >
                    Início
                </button>
                <div className="flex ">
                    <button>
                        Portfolio
                    </button>
                    <button className="mx-20">
                        Sobre
                    </button>
                    <button>
                        Contato
                    </button>
                </div>

            </div>
        </nav>
    )
}