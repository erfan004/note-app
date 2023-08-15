import NoteProps from "../types/NotePropTypes";

function SingleNote({notes} : {notes:NoteProps[]} ) {
  return (<div>
    {notes.map((item : NoteProps)=>(
        <div key={item.id} className="grid text-gray-400 w-full hover:border-white hover:text-white hover:cursor-pointer select-none grid-cols-1 border-4 border-zinc-700 duration-300 p-2 md:rounded-xl md:w-6/12 mx-auto mt-5 text-center capitalize text-lg">
            <p className=" font-bold">{item.title}</p>
            <p>{item.body}</p>
        </div>
    ))}
  </div>) ;
}

export default SingleNote;
