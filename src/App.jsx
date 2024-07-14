import { useState } from "react";
import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialButton from "./components/SocialButton";
import Experience from "./components/Experience";
import TabButton from "./components/TabButton";

import { EXPERIENCES } from "./data";

function App() {
  const [selectedContent, setSelectedContent] = useState("Selfbook");
  function handleSelect(selected) {
    setSelectedContent(selected);
  }

  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
          <div id="btns">
            <SocialButton>
              <i className="fa fa-envelope"></i> Send an Email
            </SocialButton>
            <SocialButton>
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </SocialButton>
            <SocialButton>
              <i className="fa-brands fa-upwork"></i> Upwork
            </SocialButton>
            <SocialButton>
              <i className="fa-brands fa-github"></i> Github
            </SocialButton>
          </div>
        </section>
        <section id="experience">
          <h3>Experience</h3>
          <div>
            <menu>
              <TabButton
                isSelected={selectedContent === "Selfbook"}
                onSelect={() => handleSelect("Selfbook")}
              >
                Selfbook
              </TabButton>
              <TabButton
                isSelected={selectedContent === "Wevoz"}
                onSelect={() => handleSelect("Wevoz")}
              >
                Wevoz
              </TabButton>
              <TabButton
                isSelected={selectedContent === "FreeBeings"}
                onSelect={() => handleSelect("FreeBeings")}
              >
                FreeBeings
              </TabButton>
              <TabButton
                isSelected={selectedContent === "TDF"}
                onSelect={() => handleSelect("TDF")}
              >
                TDF
              </TabButton>
              <TabButton
                isSelected={selectedContent === "Upwork"}
                onSelect={() => handleSelect("Upwork")}
              >
                Upwork
              </TabButton>
              <TabButton
                isSelected={selectedContent === "Shoppy"}
                onSelect={() => handleSelect("Shoppy")}
              >
                Shoppy
              </TabButton>
            </menu>
            <div id="content">
              {
                <Experience
                  key={EXPERIENCES[selectedContent].title}
                  {...EXPERIENCES[selectedContent]}
                />
              }
            </div>
          </div>
        </section>
        <hr />
      </main>
    </>
  );
}
export default App;
