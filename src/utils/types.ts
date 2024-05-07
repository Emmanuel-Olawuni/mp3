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
export type pricing = {
    id: number,
    title: string,
     amount: number,
     features: Array<string>
     desc: string;
}