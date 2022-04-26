import React from 'react'
import { Link } from 'react-router-dom';
const LinkToPage = ({to, children}) => {
  return (
    <Link to={`/${to}`} className='d-flex text-decoration-none mb-4 mb-md-0'>{children}<span className='material-icons ms-2'>arrow_right_alt</span></Link>
  )
}

export default LinkToPage