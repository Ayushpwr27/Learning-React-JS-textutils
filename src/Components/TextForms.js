import React,{useState}from 'react'



export default function TextForms(props) {

    const handleUpClick =() =>{
            let newText = text.toUpperCase();
            setText(newText)
            if (text === "") {
                return 0
            }
            else{
                props.showAlert(" : Converted to Uppercase!","success");
            }
    }
    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText)
        if (text === "") {
            return 0
        }
        else{
            props.showAlert(" : Converted to Lowerercase!","success");
        }
    }
    const ClearText =() =>{
        setText('')
        if (text === "") {
            return 0
        }
        else{
            props.showAlert(" : Text Cleared","success");
        }
    }
    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text) 
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        if (text === "") {
            return 0
        }
        else{
            props.showAlert(" : Extra spaces removed","success");
        }
        
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
    const [text, setText] = useState('');  
        
    return (
        <>
            <div className='container'style={{color: props.mode==='dark'?'white':'#34383e'}}>
                <div className="mb-3 my-1">
                <h1 className='mb-4' >{props.heading} </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'hsl(216deg 10% 36%)':'white',color: props.mode==='dark'?'white':'#34383e'}} id="Mybox" rows="3"></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'danger'}`} onClick={handleUpClick}> Convert to Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'danger'} mx-1 my-1`} onClick={handleLoClick}> Convert to Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'danger'} mx-1 my-1`} onClick={ClearText}> Clear text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'danger'} mx-1 my-1`} onClick={handleCopy}> Copy text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'danger'} mx-1 my-1`} onClick={handleExtraSpace}> Remove Extra Space</button>
            </div>
            <div className="container my-3"style={{color: props.mode==='dark'?'white':'#34383e'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
                <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <p>{sentenceCount()} Sentence</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing To preview"}</p>
            </div>
        </>
    )
}
