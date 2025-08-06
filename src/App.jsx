import React from 'react'
import './App.css'
import ToDoList from './ToDoList'
import Toggle from './Toggle'
import ColorPicker from './ColorPicker'
import Timer from './Timer'
import Theme from './Theme'
import Quote from './Quote'
import CharacterCount from './CharacterCount'
import Modal from './Modal'
import ScrollButton from './ScrollButton'
import GitHubUserFetch from './GitHubUserFetch'

function App() {

  return (
    <>
    <ScrollButton/>
    <Theme/>
      <ToDoList/>
      <Toggle/>
      <ColorPicker/>
      <Timer/>
      <Quote/>
      <CharacterCount/>
      <Modal/>
      <GitHubUserFetch/>
      </>
    
  )
}

export default App
