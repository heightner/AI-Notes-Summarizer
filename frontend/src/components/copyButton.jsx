import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { SummaryContext } from '../context/summary'

const CopyButton = () => {
    const { summary } = useContext(SummaryContext)

    const handleCopy = async(e) => {
        try {
            await navigator.clipboard.writeText(summary)
            toast.success('Copied to clipboard')
        } catch (error) {
            toast.error('Copy failed, try again')
            console.error(error.message)
        }
    }
    return (
        <button 
            onClick={handleCopy} 
            type='button' 
            aria-label='Copy summary' 
            className='inline-flex items-center gap-2 rounded-lg border-2 border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-100 hover:border-indigo-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-200'
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy</span>
        </button>
    )
}

export default CopyButton