import Login from "./pages/Login"
import Home from "./pages/Home"
import {Routes, Route} from'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/feed" element = {<Feed/>}/>
        <Route path = "/messages" element = {<Messages/>}/>
        <Route path = "/messages/:userId" element = {<ChatBox/>}/>x
        <Route path = "/discover" element = {<Discover/>}/>
        <Route path = "/createpost" element = {<CreatePost/>}/>
        <Route path = "/connections" element = {<Connections/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/profile/:profileId" element = {<Profile/>}/>
      </Routes> 
    </>
  )
}

export default App
