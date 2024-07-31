import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    newText.length>0? props.showAlert("Text Converted to UpperCase", "success") : props.showAlert("Enter Text Please", "warning");
  };

  const handleLowClick = () => {
    console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    newText.length>0?props.showAlert("Text Converted to LowerCase", "success"): props.showAlert("Enter Text Please", "warning");
  };

  const handleClearClick = () => {
    console.log("Clear was Clicked" + text);
    let newText = '';
    setText(newText);
    newText.length>0?props.showAlert("Text Cleared", "success"): props.showAlert("No text Entered", "warning");
  };

  const handleSpaceClick = () => {
    console.log("Space was Clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    newText.length>0?props.showAlert("Extra spaces removed", "success"): props.showAlert("Enter Text Please", "warning");
  };

  const handleCopyClick = () => {
    console.log("Copy was Clicked" + text);
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert text to Upper Case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert text to Lower Case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleSpaceClick}>
        Remove Extra Space
      </button>
      <button className="btn btn-primary" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
        Copy Text
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h2>Your Text Summary</h2>
      <p>{text.length > 0 ? text.trim().split(/\s+/).filter(word => word.length > 0).length : 0} words and {text.replace(/\s/g, '').length} characters</p>
      <p>{text.length>0?0.008*text.trim().split(/\s+/).filter(word => word.length > 0).length :0} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
