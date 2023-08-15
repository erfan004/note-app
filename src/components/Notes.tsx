import SingleNote from "./SingleNote"
import NoteProps from "../types/NotePropTypes";
function Notes() {
  const testNotes: NoteProps[] = [
    {
      id: 1,
      title: "test 1",
      body: "this is a simple text for testing note part",
    },
    {
      id: 2,
      title: "test 2",
      body: "this is a simple text for testing note part2",
    },
    {
      id: 3,
      title: "test 3",
      body: "this is a simple text for testing note part3",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl text-center mt-4">Notes</h1>
        <SingleNote notes={testNotes}/>
    </div>
  )
}

export default Notes