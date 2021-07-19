import React from "react";

function Note(props) {
  return ( < div class = "note" > < h1 class="name"> {props.header} < /h1><p>{props.content}</p > <img src={"images/"+props.img} alt={props.header}/>< /div>);
  }

  export default Note;
