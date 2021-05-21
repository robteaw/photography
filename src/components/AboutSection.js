import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import person from "../img/home.png";

function AboutSection() {
  return (
    <About>
      <Text>
        <h1>Ren Tea</h1>
        <h2>Freelance Photographer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          quisquam rerum beatae cum commodi consequuntur totam, voluptates,
          possimus, aspernatur laborum sapiente consectetur perferendis quia.
          Libero minima quasi assumenda non ea.
        </p>
        <Link to="/portfolio">{/* <button>View Images</button> */}</Link>
      </Text>

      <Image>
        <div className="box">
          <div className="circle">
            {/* <img src={person} alt="person" /> */}
          </div>
          <img src={person} alt="person" />
        </div>
      </Image>
    </About>
  );
}

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;

  @media (max-width: 991px) {
    padding: 0 3%;
    padding-top: 7.5rem;
    padding-bottom: 2rem;
  }
  html {
    font-size: 80%;
  }

  @media (max-width: 768px) {
    flex-flow: column-reverse;
    /* }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.5rem; */
  }

  Image img {
    width: 100%;
  }
`;

const Text = styled.div`
  flex-basis: 30%;
  position: relative;
  padding: 2rem;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  h2 {
    color: #77a7bd;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 8px 0 8px;
  }

  p {
    font-size: 1rem;
    color: #888;
    line-height: 2rem;
    margin: 20px 0;
  }
`;

const Image = styled.div`
  position: relative;
  display: flex;
  }

  .box {
    position: relative;
    width: 22.5rem;
    height: 24rem;
    background: #fff;
    margin: 20px 40px;
    overflow: hidden;
  }

  .box .circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 22.5rem;
    height: 22.5rem;
    overflow: hidden;
    background: linear-gradient(360deg, #2f4f4f 25%, #dcdcdc 75%);
    border-radius: 50%;
    border: 6px solid #1c2237;
  }

  .box .circle img,
  .box img {
    position: relative;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 24rem;
  }

  .box::before {
    content: "";
    position: absolute;
    left: 0;
    width: 22.5rem;
    height: 24rem;
    border-radius: 50%;
    background: transparent;
    z-index: 1;
    box-shadow: 0 7.5rem 0 22.5rem #fff;
  }

  .box::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 22.5rem;
    height: 24rem;
    box-sizing: border-box;
    border-radius: 50%;
    border: 6px solid transparent;
    border-bottom: 6px solid #1c2237;
  }
`;

export default AboutSection;