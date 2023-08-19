import Layout from "./components/Layout"
import { Routes , Route  } from "react-router"
import AddNotes from "./components/AddNotes"
import {BrowserRouter as Router} from 'react-router-dom'
import Notes from "./components/Notes"
function App() {
  return (
    <div>
      <Router>
      <Layout>
        <Routes>
          <Route path="/"  element={<Notes />}/>
          <Route path="/add-notes"  element={<AddNotes />}/>
        </Routes>
      </Layout>
      </Router>
    </div>
  )
}

export default App