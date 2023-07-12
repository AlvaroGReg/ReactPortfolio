import React from 'react'
import { NavigationMenu } from './NavigationMenu'
import { ToggleTheme } from './ToggleTheme'
import { ToggleMenu } from './ToggleMenu'

export const Nav = () => {
  return (
    <nav>
    	<ToggleMenu/>
        <NavigationMenu/>
        <ToggleTheme/>
        <img src='https://alvarogreg.glitch.me/res/logo/logo-pato.png' className='navLogo' alt='AGREG Duck'></img>
    </nav>
  )
}
