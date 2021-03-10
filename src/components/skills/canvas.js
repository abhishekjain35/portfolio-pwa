import React from "react";
import {Canvas} from "./style/canvas"

const CanvasContainer = () => {
  return (
    <>
      <div id="tags" style={{ display: "none" }}>
        <ul>
          <li>
            <a data-weight="25" href="https://en.wikipedia.org/wiki/HTML">
              Html
            </a>
          </li>
          <li>
            <a
              data-weight="25"
              href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
            >
              Css
            </a>
          </li>
          <li>
            <a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript">
              ES5/ES6
            </a>
          </li>
          <li>
            <a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript">
              TypeScript
            </a>
          </li>
          <li>
            <a
              data-weight="24"
              href="https://en.wikipedia.org/wiki/Representational_state_transfer"
            >
              Rest API
            </a>
          </li>
          <li>
            <a data-weight="14" href="https://en.wikipedia.org/wiki/JSON">
              JSON
            </a>
          </li>
          <li>
            <a data-weight="13" href="https://en.wikipedia.org/wiki/XML">
              GraphQl
            </a>
          </li>
          <li>
            <a data-weight="14" href="https://en.wikipedia.org/wiki/AngularJS">
              PWA
            </a>
          </li>
          <li>
            <a data-weight="26" href="https://en.wikipedia.org/wiki/WordPress">
              Cloud
            </a>
          </li>
          <li>
            <a data-weight="26" href="https://en.wikipedia.org/wiki/Shopify">
              NextJs
            </a>
          </li>
          <li>
            <a data-weight="21" href="https://en.wikipedia.org/wiki/Node.js">
              Node JS
            </a>
          </li>
          <li>
            <a data-weight="17" href="https://en.wikipedia.org/wiki/Git">
              Git
            </a>
          </li>
          <li>
            <a data-weight="17" href="https://www.npmjs.com/package/lodash">
              _lodash
            </a>
          </li>
          <li>
            <a
              data-weight="23"
              href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
            >
              Bootstrap
            </a>
          </li>
          <li>
            <a
              data-weight="15"
              href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
            >
              Sass
            </a>
          </li>
          <li>
            <a data-weight="24" href="https://reactjs.org/">
              ReactJS
            </a>
          </li>
          <li>
            <a data-weight="12" href="https://en.wikipedia.org/wiki/JQuery">
              Docker
            </a>
          </li>
          <li>
            <a data-weight="19" href="http://mongoosejs.com/">
              MongoDB
            </a>
          </li>
          <li>
            <a data-weight="19" href="http://gulpjs.com/">
              Firebase
            </a>
          </li>
          <li>
            <a data-weight="19" href="https://www.npmjs.com/">
              npm
            </a>
          </li>
          <li>
            <a data-weight="19" href="https://en.wikipedia.org/wiki/BEM">
              ExpressJS
            </a>
          </li>
        </ul>
      </div>
      <div id="myCanvasContainer">
        <Canvas width="600" height="600" id="myCanvas"></Canvas>
      </div>
    </>
  );
};

export default CanvasContainer;
