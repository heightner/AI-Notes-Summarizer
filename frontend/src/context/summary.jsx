import { createContext, useState } from "react";

export const SummaryContext = createContext()

export const SummaryProvider = ({children}) => {
    const [summary, setSummary] = useState('')
    const [loading, setLoading] = useState(false)

    return(
        <SummaryContext.Provider value={{summary, loading, setLoading, setSummary}}>
            {children}
        </SummaryContext.Provider>
    )
}