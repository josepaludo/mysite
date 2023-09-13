import { useEffect, useRef, useState } from "react"


export default function NavBar() {

    const nav = useRef<HTMLDivElement|null>(null)
    const [scroll, setScroll] = useState<number>(10)
    const [padding, setPadding] = useState("50px")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (!nav.current) return
            const scrollNum = Math.round(window.scrollY/100)*10
            setScroll(scrollNum)
        })
    }, [])

    useEffect(() => {
        let value: string
        if (scroll > 40) return
        switch (scroll) {
            case 0:
                value = "50px"
                break
            case 10:
                value = "40px"
                break
            case 20:
                value = "30px"
                break
            case 30:
                value = "20px"
                break
            default:
                value = "10px"
                break
        }
        setPadding(value)
    }, [scroll])


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
                    padding
                }}
            >
                <h1 className="text-2xl hover:cursor-pointer">
                    Início
                </h1>
                <div className="flex ">
                    <button>
                        Portfolio
                    </button>
                    <button className="ms-20">
                        GitHub
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