function Contact() {
    return(
        <div classname="section" id="contactsection">
            <h1 id="header-font">CONTACT</h1>
        <form>
        <a href="mailto:andrearginn@gmail.com">
            Email me here!
        </a>
        <p>Name:</p> 
        <input label="name" required/>
        <p>Email:</p>
        <input label="email" required/>
        <p>Message:</p>
        <input label="message" required/>
        <input type = "submit"/>

        </form>
        </div>
    )
}
export default Contact