import React from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from 'react'

const TextForm = ({ h1Text, }) => {

    const [text, setText] = useState('')

    const handleUpClick = () => {
        console.log("Convert to UpperCase")
        setText(text.toUpperCase())
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
        console.log("Convert to UpperCase")
    }
    const handleClear = () => {
        setText('')
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };


    return (
        <>
            <div className="container mt-5">
                <h2>{h1Text}</h2>
                <div className="mb-3">
                    <textarea class="form-control my-2" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="btns d-flex">
                    <button className="btn m-3 ms-0 btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn m-3 btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn m-3 btn-primary" onClick={handleClear}>Clear Text</button>
                    <CopyToClipboard text={text} onCopy={onCopyText}>
                        <div className="copy-area">
                            <button className="btn m-3 btn-primary">Copy to Clipboard</button>
                            <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                                {isCopied ? "Copied!" : ""}
                            </span>
                        </div>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
