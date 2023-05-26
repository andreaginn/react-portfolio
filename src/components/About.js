function About() {
    return (
        <div className="section" id="aboutsection">
            <h1 id="header-font">ABOUT</h1>
            <div className="abt-left">
            <img id="andrea" src={require("../assets/andrea.jpg")} height="250px" alt="photo of Andrea" />
            </div>
            <div className="abt-right">
            <p><span id="hi">Hi, I'm Andrea!</span>
            <br />
            <br />
            <br />
                I'm a soon-to-be graduate from the University of Washington FullStack Bootcamp.<br />
                <br />
                I'm primarily interested in Front-End/UX design as I have a background in fine arts, and love using my creative skills whenever possible. I'm currently most familiar with HTML, CSS, Javascript, React, Node, and Express. 
                Feel free to check out my portfolio! I'll be updating it soon with additional fun projects.
            </p>
            </div>
        </div>
    )
}
export default About