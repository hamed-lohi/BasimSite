import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import ProductRoutes from "./ProductRoutes"
// import LoginRoutes from "./post-routes"
import HomeRoutes from "./home-routes"
import PageRoutes from "./page-routes"
import PostRoutes from "./post-routes"
import NotFoundRoutes from "./not-found-routes"
import Layout from "src/layouts/Layout"
import SmoothScroll from "smooth-scroll"
import { PATH } from "src/constants/paths"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

export default function MainRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path={PATH.HOME} element={<Layout />} >

          <Route path={'/*'} element={<HomeRoutes />} />
          
          <Route path={PATH.POST+'/*'} element={<PostRoutes />}>
            {/* 
            path={["/home", "/users", "/widgets"]}
            <Route path="invoices" element={<Invoices />} />
            <Route path="team" element={<Team />} /> */}
          </Route>
          <Route path={PATH.PAGE+'/*'} element={<PageRoutes />}>
            {/* <Route path="invoices" element={<Invoices />} />
            <Route path="team" element={<Team />} /> */}
          </Route>

          <Route path={PATH.NOTFOUND} element={<NotFoundRoutes />} />

        </Route>

        {/* <ProductRoutes />
      <LoginRoutes /> */}
      </Routes>
    </BrowserRouter>
  )
}
