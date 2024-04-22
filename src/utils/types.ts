import React from "react"

export type MenuTypes = {
    id: number
    name: string
    link: string 
    icon : React.ElementType
}
export type formPdfInput = {
    name: string
    file: FileList
}