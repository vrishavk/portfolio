import React from "react";
import {ProductConsumer} from "../components/content/Content";


export default function Skill() {
  return (
    <ProductConsumer>
      {value=>{
        return (
          <div className="skills">
            <div className="container">
              <div className="about-title">
                <h2>Skills</h2>
                <div className="underline"></div>
              </div>
              <div className="skill-center">
                  <div className="skills-web">
                      <h4>My skills</h4>
                      {value.don.map(links =>{
                                    return(
                                    <li key={links.id}>
                                        <h3>{links.title}</h3><span className="bar"><span className={links.percent}><p>{links.number}</p></span></span>
                                    </li>
                                    )
                                })}
                  </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
