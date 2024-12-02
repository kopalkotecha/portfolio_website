const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Keep Hustling</p>
                <p>|</p>
                <p>Good vibes only ッ</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                </div>

                <div className="social-icon">
                    <a href="https://x.com/jainkopal_" className="w-1/2 h-1/2" target="_blank">
                    <img src="/assets/twitter.svg" alt="twitter"/>
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/kopalkotecha/" target="_blank" className="w-1/2 h-1/2">
                    <img src="/assets/linkedln.svg" alt="linkedln"/>

                    </a>
                </div>
            </div>

            <p className="text-white-500">Made with ❤ by Kopal Kotecha</p>

        </section>
    )
}
export default Footer;
