"use client"

import { createContext, useContext, useState } from "react"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "../../styles/scss/home/home.module.css"
import { Services } from "./Services";
import { Landing } from "./landing";
import { PageSearch } from "./PageSearch";
import { Cards } from "./Cards";
import { Footer } from "./footer";



interface IThisContext {

}

export const ThisContext = createContext<IThisContext>(null as any)
export function Index() {
    const allcontext: IThisContext = {

    }

    return (
        <ThisContext.Provider value={allcontext}>
            <Landing />
            <Services />
            <PageSearch />
            <Cards />
            <Footer />
        </ThisContext.Provider>
    )
}

