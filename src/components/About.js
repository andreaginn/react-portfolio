function About() {
    return (
        <div classname="section" id="aboutsection">
            <h3 classname="heading">ABOUT</h3>
            <img id="andrea" src={require("../assets/andrea.jpg")} height="250px" alt="photo of Andrea" />
            <p>Hi, I'm Andrea!<br />
                I'm a soon-to-be graduate from the University of Washington FullStack Bootcamp.<br />
                I'm primarily interested in Front-End/UX design as I have a background in <br />
                fine arts, and love using my creative skills whenever possible. <br />
                I'm currently most familiar with HTML, CSS, Javascript, React, Node, and Express. <br />
                Feel free to check out my portfolio! I'll be updating it soon with <br />
                additional fun projects.

            </p>
        </div>
    )
}
export default About