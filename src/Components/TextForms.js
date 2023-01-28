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
    const ClearText =() =>{
        // console.log("Uppercase was clicked" + text);
        setText('')
    }
    const handleOnChange =(event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    function wordCount(){
        let words;
        if (text === '') {
            words = 0;
        }
        else{
            words = text.split(" ").length;
        }
        return words
    }
    function sentenceCount(){
        let words;
        if (text === '') {
            words = 0;
        }
        else if(text.split(".").length > 1){
            words = text.split(".").length - 1;
        }
        else{
            words = text.split(".").length;
        } 
        return words
    }
    function readingTime(){
        let readTime;
        if (text === '') {
            readTime = 0;
        }
        else{
            readTime = 0.008 *text.split(" ").length;
        }
        return readTime
    }
    const [text, setText] = useState('');  
        
    return (
        <>
            <div className='container'>
                <div className="mb-3 my-5">
                <h1>{props.heading} </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={ClearText}> Clear text</button>

                


            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{wordCount()} words and {text.length} Characters</p>
                <p>{readingTime()} Minutes read</p>
                <p>{sentenceCount()} Sentence</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
