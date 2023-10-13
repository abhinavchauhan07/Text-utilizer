import React from 'react'
import { useState } from 'react'
const Textform = (props) => {
    const[text,setText]=useState('');
      
    const handleUp=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert("converted to uppercase","success");
    }
        const handleOnchange=(event)=>{
            setText(event.target.value);
        }
    const handleLow=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showalert("converted to lower case","success");
    }
     const removeWhite = () => {
    updateText(text.replaceAll(/\s+/g, ""));
    props.showAlert(" Removed All Whitespaces", "success");
   };
    const copy=()=>{
      let cpy=document.getElementById("textarea");
      cpy.select();
      navigator.clipboard.writeText(cpy.value);
      props.showalert("copied to clipboard","success");
    }
    
    const clr=()=>{
      let data=document.getElementById("textarea");
        setText(" ");
        props.showalert("cleared","success");
    }
  return (
    <div>
      
<div style={{color:props.mode==='dark'?'white':'black '}}>
<h2>{props.heading}</h2>

<div className="input-group ">
  
  <textarea className="form-control" rows="8"  id="textarea" onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode=='dark'?'white':'black'}} value={text} aria-label="With textarea"></textarea>
</div>
<button disabled={text.length==0} type="button" class="btn btn-primary  my-2" onClick={handleUp}>convert to uppercase</button>
<button disabled={text.length==0}type="button" class="btn btn-primary  my-1 mx-2" onClick={handleLow}>convert to Lowercase</button>
    <button disabled={text.length==0}type="button" class="btn btn-primary  my-1 mx-2" onClick={removeWhite}>Remove WhiteSpace</button>
<button disabled={text.length==0}type="button" class="btn btn-primary  my-1 mx-2" onClick={copy}>copy text</button>
<button disabled={text.length==0}type="button" class="btn btn-primary  my-1 mx-2" onClick={clr}>clear</button>

<div className="conatine my-3">
  <h1>Ur text summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length } words and {text.length} characters</p>
  <h2>preview</h2>
  <p>{text.length>0?text:" Nothing to preview"}</p>
</div>
    </div>
    </div>
  )
}

export default Textform
