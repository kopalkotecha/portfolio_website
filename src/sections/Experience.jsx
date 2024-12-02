import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Suspense, useState} from "react";
import Developer from "../components/Developer.jsx";

const Experience = () => {

    const [animationName, setAnimationName] = useState('idle');
    
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>

                <div className="work-container">

                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10,10,10]} angle={0.15} penubra={1}/>
                            <directionalLight position={[10,10,10]} intensity={1}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-3} scale={3} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({id, name, pos, icon, duration, title, animation}) => (
                                <div key={id} className="work-content_container group" onClick={() => setAnimationName(animation.toLowerCase())} onPointerOver={() => setAnimationName(animation.toLowerCase())} onPointerOut={() => setAnimationName('idle')}>
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={icon} alt="logo" className="w-full h-full"/>
                                        </div>
                                        <div className="work-content_bar"/>
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{name}</p>
                                        <p className="text-sm mb-5">{pos} -- {duration}</p>
                                        <p className="group-hover:text-white transition ease-in-out duration-500 mb-2">Responsibilities
                                            : </p>
                                        <ul className="list-disc pl-5">
                                            <li className="mb-2">Directed all aspects of business operations, including
                                                documentation, sales, and client management,ensuring smooth and
                                                efficient workflows.
                                            </li>
                                            <li className="mb-2">Implemented digital tools to optimize record-keeping
                                                and sales tracking, enhancing accuracy and efficiency.
                                            </li>
                                            <li className="mb-2">Automated repetitive tasks improving operational
                                                processes and reducing manual workload.
                                            </li>
                                            <li className="mb-2">Analyzed sales data to identify patterns, trends, and
                                                actionable insights for strategic decision-making.
                                            </li>
                                        </ul>

                                        <p className="group-hover:text-white transition ease-in-out duration-500 mb-2">Achievements
                                            : </p>

                                        <ul className="list-disc pl-5">
                                            <li className="mb-2">
                                                Reduced administrative overhead through process optimization and basic automation.
                                            </li>
                                            <li className="mb-2">
                                                Enhanced efficiency by introducing structured workflows for documentation and sales management.
                                            </li>
                                            <li className="mb-2">
                                                Trained a team on new software, ensuring 100% adoption and improved efficiency in managing client data.
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
)
}
export default Experience;
