
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { defineRoutes, asBrowserRouter, AsRouteConfig } from 'react-router-typing'
import { NotFoundPage, RootErrorBoundary } from './pages/ErrorPages'
import { HomePage } from './pages/index/Index'

const routes = defineRoutes([
    { path: '*', element: <NotFoundPage /> },
    { path: '/', element: <HomePage /> },
] as const)

export type RouteConfig = AsRouteConfig<typeof routes>

const router = createBrowserRouter(asBrowserRouter(routes))

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}