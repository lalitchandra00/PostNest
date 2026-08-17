import ChatBox from "./pages/ChatBox"
import Connections from "./pages/Connections"
import CreatePost from "./pages/CreatePost"
import Discover from "./pages/Discover"
import Feed from "./pages/Feed"
import Layout from "./pages/Layout"
import Login from "./pages/Login"
import Messages from "./pages/Messages"
import Profile from "./pages/Profile"
import { Routes, Route } from 'react-router-dom'
import { useUser } from "@clerk/react"

function App() {
  const { user } = useUser()

  
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Layout /> : <Login />}>
          {user ? (
            <>
              <Route index element={<Feed />} />
              <Route path="feed" element={<Feed />} />
              <Route path="messages" element={<Messages />} />
              <Route path="messages/:userId" element={<ChatBox />} />
              <Route path="discover" element={<Discover />} />
              <Route path="createpost" element={<CreatePost />} />
              <Route path="connections" element={<Connections />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profile/:profileId" element={<Profile />} />
              <Route path="createpost" element={<CreatePost />} />
            </>
          ) : null}
        </Route>
      </Routes>
    </>
  )
}

export default App
