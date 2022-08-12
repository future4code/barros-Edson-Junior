import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHomePage from '../Pages/AdminHomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage'
import HomePage from '../Pages/HomePage'
import ListTripPage from '../Pages/ListTripPage'
import LoginPage from '../Pages/LoginPage'
import TripDetailsPage from '../Pages/TripDetailsPage'

export default function Router() {
  return (
    <section>
        <BrowserRouter>
            <Routes>
                <Route index element = { <HomePage/> } />
                <Route path = "/listtrip" element = { <ListTripPage/> } />
                <Route path = "/applicationform" element = { <ApplicationFormPage/> } />
                <Route path = "/login" element = { <LoginPage/> } />
                <Route path = "/admin" element = { <AdminHomePage/> } />
                <Route path = "/tripdetails" element = { <TripDetailsPage/> } />
                <Route path = "/createtrip" element = { <CreateTripPage/> } />
            </Routes>
        </BrowserRouter>
    </section>
  )
}
