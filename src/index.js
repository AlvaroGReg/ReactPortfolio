import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Web } from "./components/Web";
import { Others } from "./components/Others";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/home", element: <Home />, name: "Inicio"  },
	{ path: "/about", element: <About />, name: "Sobre mí"  },
	{ path: "/web", element: <Web />, name: "Proyectos web"  },
	{ path: "/others", element: <Others />, name: "Otros Proyectos"  },
	{ path: "/skills", element: <Skills />, name: "Habilidades" },
	{ path: "/contact", element: <Contact />, name: "Contacto"  },
  ])

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MainRouter router = { router } />
		</BrowserRouter>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
