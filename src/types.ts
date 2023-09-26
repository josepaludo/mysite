export type ProjectType = {
    title: string
    description: string
    githubUrl: string
    websiteUrl?: string
}

export type HeightsType = {
    portfolioHeight: number,
    sobreHeight: number,
    contatoHeight: number,
}

export type SectionParamsType = {
    heights: HeightsType
    setHeights: React.Dispatch<React.SetStateAction<HeightsType>>
}

export enum Section {
    portfolio = "portfolio",
    sobre = "sobre",
    contato = "contato"
}