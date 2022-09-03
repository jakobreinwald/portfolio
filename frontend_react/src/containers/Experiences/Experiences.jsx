import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Experiences.scss';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';

        client.fetch(query)
            .then((data) => {
                setExperiences(data);
            });
    }, []);

    return (
        <>
            <h2 className="head-text">Programming <span>Experience</span></h2>

            <div className="app__experiences-container">
                <motion.div className="app__experiences-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__experiences-exp-item"
                            key={experience.year}
                        >
                            <div className="app__experiences-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__experiences-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: .5 }}
                                            className="app__experiences-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text-black">{work.name}</h4>
                                            <p className="p-text" style={{ color: 'white' }}>{work.company}</p>
                                        </motion.div>
                                        <ReactToolTip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="experiences-tooltip"
                                        >
                                            {work.desc}
                                        </ReactToolTip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Experiences, 'app__experiences'),
    'experiences',
    "app__brownbg",
);