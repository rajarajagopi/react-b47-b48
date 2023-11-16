function Note({note}){
    // const note=props.note;
   return(
     <li>{note.content} {note.important && '★'}</li>
   )
   }
   export default Note;