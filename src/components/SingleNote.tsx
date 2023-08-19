import NoteProps from "../types/NotePropTypes";
import { Link  } from "react-router-dom";
function SingleNote({ notes }: { notes: NoteProps[] }) {
  return (
    <div>
      {notes.map((item: NoteProps) => (
        <Link
          to={`/add-notes/${item.id}`}
          key={item.id}
          className="grid break-words text-gray-400 w-full hover:border-white hover:text-white hover:cursor-pointer select-none grid-cols-1 border-4 border-zinc-700 duration-300 p-2 md:rounded-xl md:w-6/12 mx-auto mt-5 text-center capitalize text-lg"
        >
          <p className=" font-bold">{item.title}</p>
          <p>{item.body.slice(0, 60)}...</p>
        </Link>
      ))}
    </div>
  );
}

export default SingleNote;
