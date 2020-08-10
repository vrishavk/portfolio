import React from 'react'

import {ProductConsumer} from './content/Content'

import {Link} from "react-router-dom"


export default function Contact() {
    return (
       <ProductConsumer>
           {value => {
               return(
                   <section className="contact">
                       <div className="container">
                           <div className="about-title">
                               <h2>Contact</h2>
                               <div className="underline"></div>
                           </div>
                           <div className="contact-center">
                               <div className="contact-links">
                                   <h3>Links</h3>
                                   <div className="links-items">
                                       {value.links.map(item=>{
                                           return(
                                               <li key={item.id}>
                                                   <Link to="/">{item.link}</Link>
                                               </li>
                                           )
                                       })}
                                   </div>
                               </div>
                               <div className="media-links">
                                   <h3>Media</h3>
                                   <div className="media-items">
                                       <li><a href="#"><i className="fab fa-youtube-square"></i>Youtube</a></li>
                                       <li><a href="#"><i className="fab fa-linkedin"></i>Linkedin</a></li>
                                       <li><a href="#"><i className="fab fa-facebook-square">Facebook</i></a></li>
                                       <li><a href="#"><i className="fab fa-twitter"></i>Twitter</a></li>
                                   </div>
                               </div>
                           </div>
                           <div className="footer">
                               <p>Designed and developed by Vrishav</p>
                           </div>
                       </div>
                   </section>
               )
           }}
       </ProductConsumer>
    )
}

