import React from "react";
import {
	Routes,
	Route
} from "react-router-dom";
import { Footer } from "../components/Footer";
import { Nav } from "../components/nav/Nav";

export const MainRouter = (router) => {
  
    return (
      <>
        <Nav routes={router} />
        
        <main>
          <Routes>
{/*             <Route path="/" element={router.Home} />
            <Route path="/home" element={router.Home} />
            <Route path="/about" element={router.} />
            <Route path="/web" element={<Web />} />
            <Route path="/others" element={<Others />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />

            {console.log(router.Home)} */}

            
          </Routes>
        </main>
  
        <Footer />
      </>
    )
  }

