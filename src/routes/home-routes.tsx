import React, { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
//import AuthenticatedGuard from "src/guards/AuthenticatedGuard"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading"
//import Routes from "./routes"
const Home = lazy(() => import("src/pages/home/home"))

export default function HomeRoutes() {
  return (
    // <Switch>
    //   <AuthenticatedGuard
    //     exact
    //     path={PATH.HOME}
    //     component={() => (
    //       <Suspense fallback={<Loading />}>
    //         <Home />
    //       </Suspense>
    //     )}
    //   />
    // </Switch>

    <Routes>
      <Route
        index
        //path='/'
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
    </Routes>

  )
}
