import React from 'react'
import { ToggleMenu } from './ToggleMenu';
import { NavLink } from 'react-router-dom';
import { ToggleTheme } from './ToggleTheme';

export const Nav = () => {
  return (
    <nav>
				<ToggleMenu />
				<ul>
					<li>
						<NavLink
							to="/home"
							className={({ isActive }) => {
								return isActive ? "menuitem active" : "menuitem";
							}}
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) => {
								return isActive ? "menuitem active" : "menuitem";
							}}
						>
							Sobre mí
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/web"
							className={({ isActive }) => {
								return isActive ? "menuitem active" : "menuitem";
							}}
						>
							Web
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/others"
							className={({ isActive }) => {
								return isActive ? "menuitem active" : "menuitem";
							}}
						>
							Otros
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/skills"
							className={({ isActive }) => {
								return isActive ? "menuitem active" : "menuitem";
							}}
						>
							Habilidades
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) => {
								return isActive ? "menuitem active" : "menuitem";
							}}
						>
							Contacto
						</NavLink>
					</li>
				</ul>
				<ToggleTheme />
				<img
					src="https://alvarogreg.glitch.me/res/logo/logo-pato.png"
					className="navLogo"
					alt="AGREG Duck"
				></img>
			</nav>
  )
}
