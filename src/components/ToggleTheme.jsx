import React, { useEffect, useState } from 'react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'

export const ToggleTheme = () => {

	const [theme, setTheme] = useState(
		localStorage.getItem('theme') || 'theme-light')

	useEffect(() => {
		
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
		
	}, [theme])

	const toggleTheme = () => {

		if (theme === 'theme-dark'){
			setTheme('theme-light')
		}else{
			setTheme('theme-dark')
		}
	}

  return (
	<>
		{theme === 'theme-light' ?
		<BsFillSunFill onClick={ toggleTheme } className='themeIcon'/> :
		<BsMoonFill onClick={ toggleTheme } className='themeIcon'/>}

	</>
  )
}
