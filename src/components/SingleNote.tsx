import NoteProps from "../types/NotePropTypes";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function SingleNote({ notes , click }: { notes: NoteProps[] , click : (a:string)=>unknown }) {


  return (
    <div>
      {notes.map((item: NoteProps) => (
        <div
          key={item.id}
          className="grid break-words text-gray-400 w-full hover:border-white hover:text-white hover:cursor-pointer select-none grid-cols-1 border-4 relative border-zinc-700 duration-300 p-2 md:rounded-xl md:w-6/12 mx-auto mt-5 text-center capitalize text-lg"
        >
          <Link to={`/add-notes/${item.id}`}>
            <p className=" font-bold">{item.title}</p>
            <p>{item.body.slice(0, 60)}...</p>
          </Link>
          <button
            onClick={() => click(item.id)}
            className=" absolute rounded-xl top-4 left-2 border-2 hover:bg-red-500 duration-300 border-red-500 p-2"
          >
            <XMarkIcon className="w-7" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default SingleNote;
