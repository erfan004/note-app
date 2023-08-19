import axios from "axios"
import { useEffect , useState } from "react"
import SingleNote from "./SingleNote"
function Notes() {
  const [notes , setNotes] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/Notes')
    .then((res)=>{
      console.log(res.data);
      setNotes(res.data)
    })
  } , [])
  return (
    <div>
      <h1 className="text-4xl text-center mt-4">Notes</h1>
        <SingleNote notes={notes}/>
    </div>
  )
}

export default Notes