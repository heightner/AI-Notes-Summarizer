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
                const result = await generateSummary(text)
                setSummary(result.summary)
                console.log("Result: ", result)
            }
            summarizer()
        } catch (error) {
            console.error('Error submitting text:', error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col p-5 items-center gap-5 justify-center border-b-2 border-gray-300 mx-auto w-full'>
            <textarea className='w-full p-2 rounded-md p-2 border-2 border-gray-500' required rows={10} placeholder='Enter your text here' value={text} onChange={(e) => setText(e.target.value)} />
            <div className='flex items-start gap-2'>
                <input type="submit" value="Generate Summary" className='bg-blue-700 text-white font-semibold p-2 rounded-md active:p-1.5 cursor-pointer' />
                <select className='border-2 rounded-md p-2 py-1.5 cursor-pointer' value={length} onChange={(e) => setLength(e.target.value)}>
                    <option value="short">Short</option>
                    <option value="medium">Medium</option>
                    <option value="long">Long</option>
                </select>
            </div>
        </form>
    )
}

export default InputBox