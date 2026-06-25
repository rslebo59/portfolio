import OvalBlue from "../fx/OvalBlue.jsx";
import "../../styles/components/sections/contact.scss";

export default function Contact({ tag: Heading = 'h2'}) {
    return (
        <section className="section-contact">
            <OvalBlue/>

            <div className="wrapper">
                <header>
                    <Heading>
                        <span className="text-kicker">Get In Touch</span>
                        <span className="text-content">Let's Work Together</span>
                    </Heading>
                    <p>Have a project in mind? Drop me a message and I'll get back to you witin 24 hours.</p>
                </header>
                <div className="section-contact-form">
                    <form>
                        <div className="form-body">
                            <label>
                                <span>Full Name</span>
                                <input type="text" name="contact_fullname" placeholder="John Doe"/>
                            </label>
                            <label>
                                <span>Email Address</span>
                                <input type="email" name="contact_email" placeholder="john@example.com"/>
                            </label>
                            <label>
                                <span>Your Message</span>
                                <textarea name="contact_message" rows="5" placeholder="How can I help you?"/>
                            </label>
                        </div>
                        <div className="form-footer">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}