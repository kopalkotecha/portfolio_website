import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("kopal.kotecha@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/developer.png" alt="grid-1"
                             className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">About me ( っ˶´ ˘ `)っ </p>
                            <p className="grid-subtext">By day, I’m a developer and researcher. By evening, I’m a
                                badminton player smashing shuttlecocks and by night, I’m a music enthusiast grooving to
                                beats. Somewhere in between, I fell in love with programming and might have learned a
                                thing or two...maybe 🤷🏼‍♀️</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/devlogo.jpeg" alt="grid-2"
                             className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech I'm familiar with</p>
                            {/*<p className="grid-subtext">I specialize in JavaScript/TypeScript with a focus on React and*/}
                            {/*    Next.js ecosystems.</p>*/}
                            <p className="grid-subtext">
                                With classics like C++, JavaScript, React.js, and TypeScript in my arsenal, I’m just here to code, create and occasionally debug my life decisions!</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 21.194970,
                                    lng: 81.376930,
                                    text: "I'm here!",
                                    color: "white",
                                    size: 20,
                                }]}/>
                        </div>
                        <div>
                            {/*<p className="grid-headtext">I can work remotely across most timezones.</p>*/}
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I'm based in India, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for coding</p>
                            {/*<p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>*/}
                            <p className="grid-subtext">I thrive on learning something new every day and my coding journey reflects that. I started a 100 Days of Code challenge on Twitter and while I’ve already completed Day 100, the streak is still going strong — because why stop when there’s always more to learn?</p>

                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">kopal.kotecha@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About;
