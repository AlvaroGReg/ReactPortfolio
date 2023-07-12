import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavLinkButton = ({btn_name, btn_dir}) => {

  return (
    <>
        <NavLink
            to = { btn_dir }
            className = 'button'> { btn_name } </NavLink>
    </>
  )
}
