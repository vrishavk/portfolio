import React from "react";
import { ProductConsumer } from "./content/Content";

export default function Project() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <section className="project">
            <div className="container">
              <div className="about-title">
                <h2>Projects</h2>
                <div className="underline"></div>
              </div>
              <div className="project-center">
                {value.project.map((item) => {
                  return (
                    <div className="single-project" key={item.id}>
                      <img src={item.img} alt="" />
                      <p>{item.title}</p>
                      <div className="hellp">
                  <button className="projectBtn">{item.btn}</button>
                  </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
