import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import NoteProps from "../types/NotePropTypes";

function SingleNotePage() {
  const { noteId } = useParams();
  const navigate = useNavigate()
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [body , setBody] = useState<string>('')
  const [title , setTitle] = useState<string>('')

  useEffect(() => {
    axios.get("http://localhost:3000/Notes").then((res: AxiosResponse) => {
      setNotes(res.data);
    });
  }, [setNotes]);

  const singleNote: NoteProps[] = notes.filter(
    (item: NoteProps) => item.id == noteId
  );

  function editNoteHandler() {
    setEditStatus(true);
  }

  function editFormHandler(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    axios.put(`http://localhost:3000/Notes/${noteId}`, {
      title : title.trim() != '' ? title : singleNote[0]?.title , 
      body : body.trim() != '' ? body : singleNote[0]?.body
    })
    .then(()=>{
      navigate('/')
    })
  }

  return (
    <>
      {editStatus ? (
        <div>
          <div>
            <h1 className="text-4xl text-center mt-4 capitalize">
              edit note
            </h1>
            <form
              onSubmit={(e) => editFormHandler(e)}
              className="flex flex-col md:w-6/12 mx-auto s:mw-10/12 bg-zinc-600 md:rounded-xl p-5 mt-4"
            >
              <input
                autoFocus
                type="text"
                placeholder="title"
                value={singleNote[0]?.title}
                onChange={(e) => setTitle(e.target.value)}
                className="inp-notes my-4"
              />
              <textarea
                rows={3}
                placeholder="body"
                value={singleNote[0]?.body}
                onChange={(e) => setBody(e.target.value)}
                className="inp-notes"
              ></textarea>
              <button
                type="submit"
                className="bg-zinc-800 mt-4 text-xl capitalize rounded-xl py-2 w-6/12 mx-auto"
              >
                edit note
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl text-center capitalize">
            note {singleNote[0]?.title}
          </h1>
          <div className="flex flex-col relative break-words md:w-6/12 mx-auto s:mw-10/12 bg-zinc-600 md:rounded-xl p-5 mt-4 text-xl capitalize text-center">
            <PencilIcon
              onClick={editNoteHandler}
              className="w-7 text-black  absolute right-4 cursor-pointer"
            />
            <div>{singleNote[0]?.title}</div>
            <div className="mt-2">{singleNote[0]?.body}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleNotePage;
