import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"

// PAGES
import NotFoundPage from '../pages/status/404'
import Index from '../pages/HomePage'

export default () => {
    return (
        <Routes>
            <Route path={'/'} element={<Index/>} />
            <Route path="/404" element={<NotFoundPage/>} />

            {/* Redirect to /404 */}
            <Route path="*" element={<Navigate to="/404" />}/>
        </Routes>
    )
}