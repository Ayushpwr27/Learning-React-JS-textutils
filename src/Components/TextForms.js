import React,{useState}from 'react'



export default function TextForms(props) {

    const handleUpClick =() =>{
            // console.log("Uppercase was clicked" + text);
            let newText = text.toUpperCase();
            setText(newText)
    }
    const handleLoClick =() =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
}
    const handleOnChange =(event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');  
        
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                <h1>{props.heading} </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-5" onClick={handleLoClick}> Convert to Lowercase</button>

            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 *text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
