import React,{useState}from 'react'



export default function TextForms(props) {

    const handleUpClick =() =>{
            let newText = text.toUpperCase();
            setText(newText)
    }
    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const ClearText =() =>{
        setText('')
    }
    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        let text =document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
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
            <div className='container'style={{color: props.mode==='dark'?'white':'#34383e'}}>
                <div className="mb-3 my-5">
                <h1>{props.heading} </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#34383e':'white',color: props.mode==='dark'?'white':'#34383e'}} id="Mybox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={ClearText}> Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}> Remove Extra Space</button>
            </div>
            <div className="container my-3"style={{color: props.mode==='dark'?'white':'#34383e'}}>
                <h1>Your Text Summary</h1>
                <p>{wordCount()} words and {text.length} Characters</p>
                <p>{readingTime()} Minutes read</p>
                <p>{sentenceCount()} Sentence</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in textbox above to preview"}</p>
            </div>

        </>
    )
}
