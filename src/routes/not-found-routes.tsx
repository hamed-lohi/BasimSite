import React, { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
//import AuthenticatedGuard from "src/guards/AuthenticatedGuard"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading"
import NotFound from "src/pages/not-found/not-found"
//import Routes from "./routes"
const Home = lazy(() => import("src/pages/home/home"))

export default function NotFoundRoutes() {
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
      
      {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
      <Route
        path='/*'
        element={
          <NotFound />
          //<Redirect to="/" />
          // <Navigate replace to="/" />
        }
      />
      
    </Routes>

  )
}
