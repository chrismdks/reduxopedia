import logo from '../../images/logo192.png'
import React from 'react'

function Header() {
  return (
    <div>
        <div className="py-2 pl-2" style={{borderBottom: "1px solid #777"}}>
            <img src={logo} alt="logo" style={{height:"35px",verticalAlign:"top"}}/>
            <span className="h2 pt-4 m-2 text-white-50">ReduxOPedia</span>
        </div>
    </div>
  )
}
export default Header