import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target : { name, value }}) => {
        setForm({...form, [name]: value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            await emailjs.send(
                'service_pk3xrs2',
                'template_kg0u2xa',
                {
                    from_name: form.name,
                    to_name: 'Kopal',
                    from_email: form.email,
                    to_email: 'kopal.kotecha@gmail.com',
                    message: form.message,
                },'s0Bor1EnTkC-MVxgc')
            setLoading(false);
            alert('Your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: '',
            });

        } catch (error) {
            setLoading(false);

            console.log(error);

            alert('Something went wrong!')
        }

    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text mt-12">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Not a founder (yet), but I love brainstorming interesting problem statements—tech or non-tech—and figuring out ways to make an impact. Always up for side projects, collaborations, or discussions that start with “What if we…?” and end with “Let’s do it!”</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">

                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Kopal Jain"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="kopal.kotecha@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={2}
                                className="field-input"
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;
