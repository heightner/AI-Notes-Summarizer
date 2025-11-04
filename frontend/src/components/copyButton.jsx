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
        <button onClick={handleCopy} type='button' aria-label='Copy summary' className='inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 active:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200'>
            <span className='i'>Copy</span>
        </button>
    )
}

export default CopyButton