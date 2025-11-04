import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { generateSummary } from '../API/GenerateSummary'
import { SummaryContext } from '../context/summary'

const InputBox = () => {
    const [text, setText] = useState('')
    const [length, setLength] = useState('short')

    const { setSummary, setLoading } = useContext(SummaryContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!text || text.trim() === "") {
            toast.error('Please enter some text to summarize')
            return
        }
        try {
            setLoading(true)
            const result = await generateSummary(text, length)
            if (result) setSummary(result.summary)
            else throw new Error(res.error);
            setLoading(false)
        }
        catch (error) {
            toast.error('Something went wrong. Please try again')
        }
        finally {
            setLoading(false)
        }
    }

    const handleClear = () => {
        try {
            if (!text || text.trim() === '') {
                toast.error('No Content Found to be Deleted, try again')
            }
            else {
                setText('')
                toast.success('Content Deleted')
            }
        } catch (error) {
            toast.error('Deletion failed, try again')
            console.error(error.message)
        }
    }
    return (
        <form onSubmit={handleSubmit} className='w-full lg:flex-1 rounded-2xl bg-white shadow-xl ring-1 ring-indigo-100 p-6 md:p-8 relative transition-all duration-300 hover:shadow-2xl hover:ring-indigo-200'>
            <button
                type="button"
                onClick={handleClear}
                className='absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 cursor-pointer transition-all duration-200'
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear
            </button>
            <div className='mb-3'>
                <label className='flex items-center gap-2 text-base font-semibold text-gray-900'>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Your Notes
                </label>
                <p className='text-sm text-gray-500 mt-1'>Enter the text you'd like to summarize</p>
            </div>
            <textarea
                className='w-full resize-y rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 leading-relaxed min-h-64 transition-all duration-200'
                required
                rows={10}
                placeholder='Paste or type your content here...'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex items-center gap-3'>
                    <label htmlFor="length" className='text-sm font-medium text-gray-700 flex items-center gap-2'>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Summary Length
                    </label>
                    <select
                        id="length"
                        className='border-2 border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 bg-white focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 cursor-pointer transition-all duration-200'
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    >
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="long">Long</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="✨ Generate Summary"
                    className='w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300 cursor-pointer transition-all duration-200'
                />
            </div>
        </form>
    )
}

export default InputBox