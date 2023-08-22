import axios from "axios"
import { useEffect , useState } from "react"
import SingleNote from "./SingleNote"
import NoteProps from "../types/NotePropTypes"
function Notes() {
  const [notes , setNotes] = useState<NoteProps[]>([])

  useEffect(()=>{
    axios.get('http://localhost:3000/Notes')
    .then((res)=>{
      console.log(res.data);
      setNotes(res.data)
    })
  } , [])

  function removeNoteHandler(id: string) {
   const newNotes =  notes.filter((item) => item.id != id);
   setNotes(newNotes)
   axios.delete(` http://localhost:3000/Notes/${id}`)
  }
  return (
    <div>
      <h1 className="text-4xl text-center mt-4">Notes</h1>
        <SingleNote click={removeNoteHandler} notes={notes}/>
    </div>
  )
}

export default Notes