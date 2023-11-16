import React from 'react'

export default function Alert(props) {
  
  //Function to Capitalize First Character of a First Word
  const capitalize = (word)=> {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    props.alert && <div className={`alert my-2 alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

