import { useParams } from "react-router"
import { useState , useEffect } from "react"
import axios from "axios"
import {AxiosResponse} from "axios"
import NoteProps from "../types/NotePropTypes"
function SingleNotePage() {


  const [notes , setNotes]  = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/Notes')
    .then((res : AxiosResponse)=>{
      setNotes(res.data)
    })
  } , [])

  const {noteId} = useParams()
  const singleNote : NoteProps[] = notes.filter((item :NoteProps) => item.id == noteId)  
  return (
    <>
      <h1 className="text-4xl text-center capitalize">note {singleNote[0]?.title}</h1>
      <div className="flex flex-col break-words md:w-6/12 mx-auto s:mw-10/12 bg-zinc-600 md:rounded-xl p-5 mt-4 text-xl capitalize text-center">
        <div>{singleNote[0]?.title}</div>
        <div className="mt-2">{singleNote[0]?.body}</div>
      </div>
    </>
  )
}

export default SingleNotePage