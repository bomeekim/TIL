import React, { useState } from 'react'

export default function ControlledComponent() {
    const [name, setName] = useState('')
    const [essay, setEssay] = useState('Please write an essay about your essay')

    const handleSubmit = (e) => {
        alert(`name: ${name}, essay: ${essay}`)
        e.preventDefault()
    }

    const handleChange = (e) => {
        // setName(e.target.value)
        const name = e.target.name

        if (name === 'name') {
            setName(e.target.value)
        }

        if (name === 'essay') {
            setEssay(e.target.value)
        }
    }

    // const handleChangeEssay = (e) => {
    //     setEssay(e.target.value)
    // }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
                Essay:
                <textarea name="essay" value={essay} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
