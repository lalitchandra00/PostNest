import ChatBox from "./pages/ChatBox"
import Connections from "./pages/Connections"
import CreatePost from "./pages/CreatePost"
import Discover from "./pages/Discover"
import Feed from "./pages/Feed"
import Login from "./pages/Login"
import Messages from "./pages/Messages"
import Profile from "./pages/Profile"
import {Routes, Route} from'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/feed" element = {<Feed/>}/>
        <Route path = "/messages" element = {<Messages/>}/>
        <Route path = "/messages/:userId" element = {<ChatBox/>}/>
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
