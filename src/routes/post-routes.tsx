import React, { lazy, Suspense } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading"
const Post = lazy(() => import("src/pages/post/post"))

export default function PostRoutes() {
  return (
    <Routes>
      {/* <Route
        //path={'/'}
        index
        element={
          <>
            <h1>ooooooooooooooo</h1>
            <Outlet />
          </>
        }
      /> */}

      <Route

        path={':id'}
        element={
          <Suspense fallback={<Loading />}>
            <Post />
          </Suspense>
        }
      />
    </Routes>
  )
}
