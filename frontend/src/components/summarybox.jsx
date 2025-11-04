import React, { useContext, useEffect, useState } from 'react'
import { SummaryContext } from '../context/summary'
import CopyButton from './copyButton'

const Summarybox = () => {
    const { summary, loading } = useContext(SummaryContext)
    const [showSummary, setShowSummary] = useState(false)


    useEffect(() => {
        if (summary && summary.trim().length > 0) {
            setShowSummary(true)
        }
    }, [summary])

    return (
        <div className='w-full lg:flex-1'>
            {
                loading
                    ?
                    <div className="rounded-2xl bg-white shadow-xl ring-1 ring-indigo-100 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse"></div>
                            <div className="h-6 w-40 rounded-lg bg-gradient-to-r from-indigo-200 to-purple-200 animate-pulse"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-3">
                                <div className="h-4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse"></div>
                                <div className="h-4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse" style={{width: '95%'}}></div>
                                <div className="h-4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse" style={{width: '88%'}}></div>
                                <div className="h-4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse" style={{width: '92%'}}></div>
                                <div className="h-4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse" style={{width: '85%'}}></div>
                            </div>
                            <div className="pt-4">
                                <div className="h-4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse" style={{width: '78%'}}></div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4 animate-spin text-indigo-600" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Generating your summary...</span>
                        </div>
                    </div>
                    :
                    showSummary &&
                    <div className='relative rounded-2xl bg-white shadow-xl ring-1 ring-indigo-100 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:ring-indigo-200 animate-fadeIn'>
                        <div className='mb-5 flex items-center justify-between border-b border-gray-100 pb-4'>
                            <h2 className='flex items-center gap-2 text-lg md:text-xl font-bold tracking-tight text-gray-900'>
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Summary
                            </h2>
                            <CopyButton />
                        </div>
                        <div className='text-gray-800 whitespace-pre-wrap leading-relaxed text-base max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar'>
                            {summary}
                        </div>
                    </div>

            }
        </div>
    )
}

export default Summarybox