import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutMe">
    <div id="aboutMeContainer">
      <div id="aboutMeText">
        <h1>About Me</h1>
                <p>
                I'm a web-developer and multi-disciplinary artist based in NYC. I have
                an interest in design, responsive UI, and anything that makes a
                website seem modern, simple, and easy to use.<br /><br />
                When I'm not programing,
                I enjoy composing albums, painting, rollerskating, visiting museums,
                or going out to the city with my wife.<br /><br />
                I specialize in the language
                Java Script, and mainly use React to create web-apps. Other
                technologies I use are Node.js, Redux, posgreSQL, express.js, Sheet JS, HTML, CSS.
                </p>
            <div class="icons">
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-redux-original"></i>
            <i class="devicon-postgresql-plain"></i>
            <i class="devicon-nodejs-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-express-original-wordmark"></i>
            </div>
      </div>
    </div>
    </section>
  );
}
