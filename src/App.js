import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {Element} from "react-scroll"
import {Route} from "react-router-dom"
import {ProductConsumer} from './components/content/Content'
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <ProductConsumer >

        {
          value => {

            return (
              <>
              <Navbar /> 

              <Element name="Home">
              <Route exact path="/" component={Header} />
              </Element>

              <div className="basic">


              <Element name="About">
              <Route exact path="/" component={About} />
              </Element>

              <Element name="Skill">
              <Route exact path="/" component={Skill} />
              </Element>

              <Element name="Project">
              <Route exact path="/" component={Project} />
              </Element>

              </div>

              <Element name="Contact">
              <Route exact path="/" component={Contact} />
              </Element>
              </>

            )
          }
        }

      


      </ProductConsumer>
      



    </div>
  );
}

export default App;
