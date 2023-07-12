import React from 'react'
import { NavLinkButton } from './nav/NavLinkButton'

export const Home = () => {
  return (
    <section className='home'>
        <h1 className='sectiontitle'>AGREG</h1>

        <NavLinkButton btn_name = "Contacto" btn_dir = "/contact" />
    </section>
  )
}
