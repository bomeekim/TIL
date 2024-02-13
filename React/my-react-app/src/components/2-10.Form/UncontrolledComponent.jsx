import React, { useRef } from 'react'

export default function UncontrolledComponent() {
    const fileInputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`selected file - ${fileInputRef.current.files[0].name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* value 에 대해서는 전혀 모름 ref를 줌으로써 이 컴포넌트가 가진 값이 ref 에 담겼다. */}
                Upload file: <input type="file" ref={fileInputRef} />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
