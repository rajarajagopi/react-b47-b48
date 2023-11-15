function Note({note}){
    // const note=props.note;
    if(note.important)//Conditional rendering
    {
        return(
            <li>{note.content}   ★</li>
          )
    }
   return(
     <li>{note.content}</li>
   )
   }
   export default Note;