import React from 'react'
import { Routes, Router, NavLink, BrowserRouter, Route, Navigate } from "react-router-dom"
import { ToggleMenu } from '../components/nav/ToggleMenu'
import { ToggleTheme } from '../components/nav/ToggleTheme'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Web } from '../components/Web'
import { Others } from '../components/Others'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'
import { Error } from '../components/Error'

export const MainRouter = () => {
  return (
    <BrowserRouter>

			<nav>
                <ToggleMenu />
				<ul>
					<li>
						<NavLink
							to="home"
							className={({ isActive }) => {
								return isActive ? "activado" : ""
							}}
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="about"
							className={({ isActive }) => {
								return isActive ? "activado" : ""
							}}
						>
							Sobre mí
						</NavLink>
					</li>
					<li>
						<NavLink
							to="web"
							className={({ isActive }) => {
								return isActive ? "activado" : ""
							}}
						>
							Web
						</NavLink>
					</li>
					<li>
						<NavLink
							to="others"
							className={({ isActive }) => {
								return isActive ? "activado" : ""
							}}
						>
							Otros
						</NavLink>
					</li>
					<li>
						<NavLink
							to="skills"
							className={({ isActive }) => {
								return isActive ? "activado" : ""
							}}
						>
							Habilidades
						</NavLink>
					</li>
                    <li>
						<NavLink
							to="contact"
							className={({ isActive }) => {
								return isActive ? "activado" : ""
							}}
						>
							Contacto
						</NavLink>
					</li>
				</ul>
                <ToggleTheme />
                <img src='https://alvarogreg.glitch.me/res/logo/logo-pato.png' className='navLogo' alt='AGREG Duck'></img>
			</nav>

            {/* MAIN */}
			<main>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/web"
						element={<Web />}
					/>
					<Route
						path="/others"
						element={<Others />}
					/>
					<Route
						path="/skills"
						element={<Skills />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>						

					<Route
						path="*"
						element={<Error />}
					/>
				</Routes>
			</main>
		</BrowserRouter>
  )
}
