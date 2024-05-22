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
     tag: string
}
export type activitesCardType ={
    id: number
    title: string
    desc: string
}
export type loginFormType = {
    email: string;
    password: string
}
export type conversionType = {
    name: string;
    text: string;
    speed: number;
    voice: string;
    pitch: number;
}