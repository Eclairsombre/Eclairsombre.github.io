import React from "react";
import { useInView } from "react-intersection-observer";

import "./Skills.scss";

function Skills({ darkMode }) {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref8, inView8] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref9, inView9] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref10, inView10] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref11, inView11] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref12, inView12] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref13, inView13] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className={`SkillsBox ${darkMode ? "dark" : ""}`}>
      <h1>Skills</h1>
      <p>
        Voici quelques-unes des compétences que j'ai apprises et utilisées dans
        mes projets :
      </p>
      <ul>
        <li>
          <div
            ref={ref1}
            className={`skill animated-element ${inView1 ? "animate" : ""}`}
          >
            <p style={{ marginRight: "20px" }}>C++ :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              {" "}
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref2}
            className={`skill animated-element ${inView2 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>HTML :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref3}
            className={`skill animated-element ${inView3 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>CSS :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref4}
            className={`skill animated-element ${inView4 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>React :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref5}
            className={`skill animated-element ${inView5 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>JavaScript :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref6}
            className={`skill animated-element ${inView6 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>Python :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref7}
            className={`skill animated-element ${inView7 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>Java :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref8}
            className={`skill animated-element ${inView8 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>SQL :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref9}
            className={`skill animated-element ${inView9 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>Git :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref10}
            className={`skill animated-element ${inView10 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>GitHub :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref11}
            className={`skill animated-element ${inView11 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>Linux :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref12}
            className={`skill animated-element ${inView12 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>PHP :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
        </li>
        <li>
          <div
            ref={ref13}
            className={`skill animated-element ${inView13 ? "animate" : ""}`}
          >
            {" "}
            <p style={{ marginRight: "20px" }}>AfterEffect :</p>
            <div className={`progress-bar ${darkMode ? "dark" : ""}`}>
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
