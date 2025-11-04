import React, { useContext, useState } from 'react'
import { generateSummary } from '../API/GenerateSummary'
import {SummaryContext} from '../context/summary'

const InputBox = () => {
    const [text, setText] = useState('')
    const [length, setLength] = useState('short')

    const { setSummary } = useContext(SummaryContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (!text || text.trim() === "") alert('Please enter some text')
            const summarizer = async() => {
                const result = await generateSummary(text, length)
                setSummary(result.summary)
            }
            summarizer()
        } catch (error) {
            console.error('Error submitting text:', error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className='w-full rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-4 md:p-6'>
            <label className='block text-sm font-medium text-slate-700 mb-2'>Your Notes</label>
            <textarea className='w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 placeholder:text-slate-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 min-h-48' required rows={10} placeholder='Paste or type your content to summarize...' value={text} onChange={(e) => setText(e.target.value)} />
            <div className='mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <div className='inline-flex items-center gap-2'>
                    <label htmlFor="length" className='text-sm text-slate-600'>Summary length</label>
                    <select id="length" className='border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100' value={length} onChange={(e) => setLength(e.target.value)}>
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="long">Long</option>
                    </select>
                </div>
                <input type="submit" value="Generate Summary" className='w-full sm:w-auto inline-flex justify-center items-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 cursor-pointer' />
            </div>
        </form>
    )
}

export default InputBox