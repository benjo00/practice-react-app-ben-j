import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'
import ProfileContainer from './ProfileContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard />
      <ProfileContainer />
    </>
  )
}

export default App
