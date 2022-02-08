import React, { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading"
const Page = lazy(() => import("src/pages/page/page"))

export default function PageRoutes() {
  return (
    <Routes>
      {/* <Route index element={<h2>dddddddddddddddddddddddddd</h2>}></Route> */}
      <Route
        path={':id'}
        element={
          <Suspense fallback={<Loading />}>
            <Page />
          </Suspense>
        }
      />
    </Routes>
  )
}
