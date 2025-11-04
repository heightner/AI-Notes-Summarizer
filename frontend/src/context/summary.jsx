import { createContext, useState } from "react";

export const SummaryContext = createContext()

export const SummaryProvider = ({children}) => {
    const [summary, setSummary] = useState('')

    return(
        <SummaryContext.Provider value={{summary, setSummary}}>
            {children}
        </SummaryContext.Provider>
    )
}