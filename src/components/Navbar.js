import React, { Component} from 'react'
import { Link } from 'react-router-dom'

 export default function Navbar(props){

    let {style,modeText,switchMode} =  props;
 
    return (
      <div style={{position:"sticky",top:"0px",zIndex:"1",width:"100vw"}}>
             <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{margin:"0",padding:"0",backgroundColor:"blue"}}>
            <div className="container-fluid" style={{...style,backgroundColor:"gray"}} >
                <a className="navbar-brand" style={{...style,backgroundColor:"gray"}} to="/">NewsMania</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} to="/business">business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} to="/entertainment">entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} to="/general">general</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} to="/health">health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} to="/science">science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} to="/sports">sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={{...style,backgroundColor:"gray"}} to="/technology">technology</Link>
                    </li>
              

                </ul>
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onClick ={switchMode} role="switch" id="flexSwitchCheckDefault" style={{backgroundColor:"gray"}}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modeText}</label>
              </div>
                </div>
            </div>
            </nav>
      </div>
    )
  
}
