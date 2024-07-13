import { useState } from "react";
import React from "react";
import "./App.css";

import Header from "./Header";
import Hero from "./Hero";
import Button from "./Button";
import Experience from "./Experience";

import { EXPERIENCES } from "./data";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
          <div id="btns">
            <Button className="socialbtn">
              <i className="fa fa-envelope"></i> Send an Email
            </Button>
            <Button className="socialbtn">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </Button>
            <Button className="socialbtn">
              <i className="fa-brands fa-upwork"></i> Upwork
            </Button>
            <Button className="socialbtn">
              <i className="fa-brands fa-github"></i> Github
            </Button>
          </div>
        </section>
        <section id="experience">
          {/* <h3>Experience</h3> */}
          {/* <menu> */}
            {/* <Button className="menubtn"></Button> */}
            {/* <Button className="menubtn">Wevoz</Button>
            <Button className="menubtn">FreeBeings</Button>
            <Button className="menubtn">TDF</Button>
            <Button className="menubtn">Upwork</Button>
            <Button className="menubtn">Shoppy</Button> */}
             {/* {EXPERIENCES.map( item => (
              <Button className="menubtn" key={item.title}>{item.title}</Button>
            ))}
          </menu>
          <div id="content">
           {EXPERIENCES.map( item => (
            <Experience key={item.title} {...item} />
           ))}
          </div> */}
        </section>
      </main>
    </>
  );
}
export default App;
