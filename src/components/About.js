import React from 'react'
import profImg from '../prof.jpg'

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about-title">
                    <h2>About</h2>
                    <div className="underline"></div>
                </div>
                <div className="about-center">
                    <div className="about-logo">
                        <img src={profImg} alt="photo"/>
                    </div>
                    <div className="about-me">
                        <div className="profile">
                            <h2>My profile</h2>
                        </div>
                        <div className="name">
                            <p><span>Name:</span>Vrishav Khanal</p>
                        </div>

                        <div className="age">
                            <p><span>Age:</span>22</p>
                        </div>

                        <div className="address">
                            <p><span>Address:</span>Rupandehi, Bhairahawa(B.P.path-8)</p>
                        </div>
                        <div className="email">
                            <p><span>Email:</span><a href="khanalvrishav@gmail.com">khanalvrishav@gmail.com</a></p>
                        </div>
                        <div className="phone">
                            <p><span>Phone:</span>+(977) 9843622982</p>
                        </div>
                        <div className="website">
                            <p><span>Website:</span>bob.vis.com(Under Costruction)</p>
                        </div>
                        <div className="about-media">
                            <a href="www.youtube.com" target="blank" rel="noopener noreeferrer"><i className="fab fa-youtube-square"></i></a>
                            <a href="www.youtube.com" target="blank" rel="noopener noreeferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="www.youtube.com" target="blank" rel="noopener noreeferrer"><i className="fab fa-facebook-square"></i></a>
                            <a href="www.youtube.com" target="blank" rel="noopener noreeferrer"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>

                <div className="generally">
                    <span>See me,</span><p>I am a graduated student from the Tribhuwan University. I had completed my Bachelors in Electronics and Communication Engineerning. After graduation i worked about three months in Huawei Telecommunication. During the course of my study i had learned some of the programming languages like Javascript and Python. Below you will see my overall skills that i have in all my fields in my life </p>
                </div>
                <div className="certificate">
                    <h4>My Certificate</h4>
                    <p>* Degree as <b>Electroncics Engineer from Tribhuwan University</b></p>
                    <p>* Best Project <b>Motorcycle Number Plate Recognization</b> from <b>Delta </b></p>
                    <p>* Certificate <b>Gre </b></p>
                    <p>* Certificate <b>Ielts </b></p>
                </div>
            </div>
        </section>
    )
}
