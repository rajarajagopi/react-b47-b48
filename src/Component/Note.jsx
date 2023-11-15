function Note({note}){
    // const note=props.note;
   return(
     <li>{note.important ? note.content +'★' : note.content}</li>
   )
   }
   export default Note;