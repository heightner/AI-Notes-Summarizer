import React, { useContext } from 'react'
import { SummaryContext } from '../context/summary'

const CopyButton = () => {
    const { summary } = useContext(SummaryContext)

    const handleCopy = async(e) => {
        try {
            await navigator.clipboard.writeText(summary)
            alert("Copied to Clipboard")
        } catch (error) {
            alert("Copy Failed, Try Again")
            console.error(error.message)
        }
    }
    return (
        <button onClick={handleCopy} className='p-1.5 rounded-md border-2 p-2 cursor-pointer'>Copy</button>
    )
}

export default CopyButton