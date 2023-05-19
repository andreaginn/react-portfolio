function Contact() {
    return(
        <form>
        <a href="mailto:andrearginn@gmail.com">
            email me here!
        </a>
        <p>Name:</p> 
        <input label="name" required/>
        <p>Email:</p>
        <input label="email" required/>
        <p>Message:</p>
        <input label="message" required/>
        <input type = "submit"/>

        </form>
    )
}
export default Contact