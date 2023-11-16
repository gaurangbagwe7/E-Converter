import { useState } from "react"


export default function ConverterForm(props) {
  //UpperCase Function
  const handleOnupclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("The text has been converted to Uppercase.","success")
  }

  //LoweCase Function
  const handleOnlowclick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("The text has been converted to Lowercase.","success")
  }

  //Remove Extra Spaces
  const handleOnrmvExtSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed from the text","success");
  }
  
  //All clear Function
  const handleOnclrclick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("The text has been cleared.","success")
  }
  
  //Copy Function
  const handleOncopy = () => {
    const textArea = document.getElementById("myBox");
  
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textArea.value);
        props.showAlert("The text has been copied.", "success");
      } else {
        textArea.select();
        document.execCommand("copy");
        props.showAlert("The text has been copied.", "success");
      }
    } catch (error) {
      console.error("Copy error:", error);
      props.showAlert("Copy operation failed.", "danger");
    }
  };

  

  const handleOnchange = (event)=>{
    setText(event.target.value)
  }
  
  //Use State for TextBox
  const [text, setText] = useState("Enter Your Text")

  //Words, Characters and Time Counting Function
  const wordsCount = text.split(" ").filter(word => word !== "").length;
  const charactersCount = text.length;
  const timeCount = 0.48 * text.split(" ").filter(time => time !== "").length;
  
  //Words, Characters and Time Lable Function
  const wordsLabel = wordsCount < 2 ? "word" : "words";
  const charactersLabel = charactersCount < 2 ? "character" : "characters";

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 className="my-3">{props.title}</h1>    
          <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'} mt-5`} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
        </div>
        <div className="container text-center">
        <button className="btn btn-primary m-1" onClick={handleOnupclick}>Uppercase</button> 
        <button className="btn btn-primary m-1" onClick={handleOnlowclick}>Lowercase</button>
        <button className="btn btn-primary m-1" onClick={handleOnrmvExtSpace}>Format</button>
        <button className="btn btn-primary m-1" onClick={handleOnclrclick}>Clear</button>  
        <button className="btn btn-primary m-1" onClick={handleOncopy}>Copy</button>
        <p className="m-2">
          <b> {wordsCount} {wordsLabel} and {charactersCount} {charactersLabel} and {timeCount} seconds to read </b>
        </p>
        </div>
      </div>
      <div className="container">
        <h2 className="mt-4">Preview</h2>
        <p>{text===""?"Enter Something in Text Area to See the Preview.":text}</p>
      </div>
    </>
  )
}
