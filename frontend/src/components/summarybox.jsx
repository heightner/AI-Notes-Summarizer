import React, { useContext, useEffect, useState } from 'react'
import { SummaryContext } from '../context/summary'
import CopyButton from './copyButton'

const Summarybox = () => {
    const { summary } = useContext(SummaryContext)
    const [showSummary, setShowSummary] = useState(false)

    useEffect(() => {
        if (summary && summary.trim().length > 0) {
            setShowSummary(true)
        }
    }, [summary])

    return (
        <div className='w-full'>
            {
                showSummary
                    ?
                    <div className='relative rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-4 md:p-6'>
                        <div className='mb-3 flex items-center justify-between'>
                            <h2 className='text-base md:text-lg font-semibold text-slate-800'>Summary</h2>
                            <CopyButton />
                        </div>
                        <div className='text-slate-700 whitespace-pre-wrap leading-7 max-h-[50vh] overflow-y-auto pr-1'>
                            {summary}
                        </div>
                    </div>
                    :
                    <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-4 md:p-6">
                        <div className="animate-pulse space-y-4">
                            <div className="h-4 w-32 rounded bg-slate-200"></div>
                            <div className="space-y-3">
                                <div className="h-3 rounded bg-slate-200"></div>
                                <div className="h-3 rounded bg-slate-200"></div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="col-span-2 h-3 rounded bg-slate-200"></div>
                                    <div className="col-span-1 h-3 rounded bg-slate-200"></div>
                                </div>
                                <div className="h-3 rounded bg-slate-200"></div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Summarybox