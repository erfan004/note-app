import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddNotes() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate()
  function addNoteHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Notes", {
        title,
        body,
      })
      .then(() => {
        navigate('/')
      });
  }
  return (
    <div>
      <h1 className="text-4xl text-center mt-4 capitalize">add your note</h1>
      <form
        onSubmit={(e) => addNoteHandler(e)}
        className="flex flex-col md:w-6/12 mx-auto s:mw-10/12 bg-zinc-600 md:rounded-xl p-5 mt-4"
      >
        <input
          autoFocus
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="inp-notes my-4"
        />
        <textarea
          rows={3}
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="inp-notes"
        ></textarea>
        <button
          type="submit"
          className="bg-zinc-800 mt-4 text-xl capitalize rounded-xl py-2 w-6/12 mx-auto"
        >
          add note
        </button>
      </form>

    </div>
  );
}

export default AddNotes;
