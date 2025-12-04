import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout:React.FC = () => {
  return (
    <div style={{maxWidth:960, margin:'24px auto', padding:16}}>
        <h1>Products</h1>
        <nav style={{display:'flex', gap:12, marginBottom:16}}>
            <NavLink to="/">List</NavLink>
            <NavLink to="/products/new">Create</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout