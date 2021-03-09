import React, { useEffect } from "react";
import { Span } from "./style/HomeContainer";
import { TitleContainer } from "../reusable-components/style";

const Title = () => {
  const greetings = "Hi,";
  const name = "bhishek,";
  const web = "web";
  const developer = "developer.";

  useEffect(() => {
    let title = document.getElementsByClassName("title");
    let letters = title[0].childNodes;
    letters.forEach((letter) => {
      if (!(letter.textContent === " ")) {
        letter.addEventListener("mouseenter", () => {
          letter.classList.add("blast");
          setTimeout(() => {
            letter.classList.remove("blast");
          }, 1000);
        });
      }
    });
  }, []);

  return (
    <TitleContainer
      className="title"
      padding={true}
      displayNoneAtSmallScreen={true}
    >
      {greetings.split("").map((ele, i) => (
        <Span key={i}>{ele}</Span>
      ))}
      <br />
      <Span>I</Span>
      <Span>&rsquo;</Span>
      <Span>m</Span>
      <span> </span>
      <Span style={{ color: "#ff2253" }}>A</Span>
      {name.split("").map((ele, i) => (
        <Span key={i}>{ele}</Span>
      ))}
      <br />
      {web.split("").map((ele, i) => (
        <Span key={i}>{ele}</Span>
      ))}
      <span> </span>
      {developer.split("").map((ele, i) => (
        <Span key={i}>{ele}</Span>
      ))}
    </TitleContainer>
  );
};

export default Title;
