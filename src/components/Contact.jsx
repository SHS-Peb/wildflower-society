export default function Contact() {
    return (
        <section
            id="contact"
            className="relative z-10 flex justify-center px-6 pt-20 pb-32"
        >
            <div
                className="contact-card max-w-3xl w-full text-center px-10 py-14"
            >
                <h2 className="contact-title mb-6">
                    Get in Touch
                </h2>

                <p className="contact-text mb-10">
                    Have a question, an idea, or want to collaborate?
                    We’d love to hear from you.
                </p>

                <form className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="contact-input"
                    />

                    <input
                        type="email"
                        placeholder="Your email"
                        className="contact-input"
                    />

                    <textarea
                        rows={4}
                        placeholder="Your message"
                        className="contact-input resize-none"
                    />

                    <button
                        type="submit"
                        className="contact-button mx-auto mt-4"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}
