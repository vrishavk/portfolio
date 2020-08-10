import React , {useState} from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.png'
import {scroller} from "react-scroll"
import {ProductConsumer} from '../components/content/Content'
import './Navbar.css'


function Navbar() {

    const [state, setState] = useState(false);

    const handelClose  = ()=> {
        if(state ===true) {
            setState(!state);
        }
    }
    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
    
         duration:1500,
         delay:100,
         smooth:true,
         offset:-80
    
    
        })
    }

    return (
        <ProductConsumer>
            {(value) => {
                return(

                    
                        <div className="containerr sticky">
                            <nav className="sticky">
                            <div className="logoBtn">
                                <Link to="/" ><img src={logo} alt="Error-logo" onClick={()=>scrollToElement("Home")}/></Link>

                                <div className="btn" onClick={()=>setState(!state)}>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                </div>
                            </div>
 
                            <ul className={state? "newLinks links" : "links"}>
                                {value.links.map(links =>{
                                    return(
                                    <li key={links.id}><Link to="/" onClick={()=>scrollToElement(links.scrolling)} >{links.link}</Link></li>
                                    )
                                })}

                            </ul>
                            </nav>

                        </div>
                    
                )



            }}
        </ProductConsumer>
    )
}

export default Navbar;