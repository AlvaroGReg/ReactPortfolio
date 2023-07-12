import React, { useState } from 'react'
import { BsFilterLeft } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

export const ToggleMenu = () => {

  const [menuState, setMenuState] = useState("closed")

  const toggleMenu = () => {
	menuState === "closed" ? setMenuState("open"): setMenuState("closed")
  }

  const ComponenteDinamico = menuState === "open" ? IoClose : BsFilterLeft;

  return (
	<>
		<ComponenteDinamico onClick={ toggleMenu } className='toggleMenuIcon'/>	
	</>
  )
}
