import React from 'react'
import  headerImg from '..//vri.jpg' ;



export default function Header() {
    return (
        <section className="header">
            <img src={headerImg} alt="" style={{ display:"block"}} />
            <div className="inner-container">
                <div className="texts">
                    <h1>Hello, I am Vrishav Khanal,</h1>
                    <h2>Electronics and Communication Engineer</h2>

                    <a href="khanalvrishav@gmail.com" className="contactBtn">Contact</a>
                </div>
            </div>
        </section>
    )
}
