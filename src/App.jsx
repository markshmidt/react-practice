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

function App() {

  return (
    <>
    <Theme/>
      <ToDoList/>
      <Toggle/>
      <ColorPicker/>
      <Timer/>
      <Quote/>
      <CharacterCount/>
      <Modal/>
      </>
    
  )
}

export default App
