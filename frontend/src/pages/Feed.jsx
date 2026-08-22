import React from 'react'
import {useState} from "react"
import Loading from '../components/loading'

function Feed() {
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFeed = async () => {
    setFeed(dummyPostsData)
  }
  
  return !loading ?(
    <div>Feed</div>
  )
  :
  <Loading/>
}

export default Feed