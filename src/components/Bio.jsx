import React from 'react';
import {BIO} from "../constants/index.jsx";
import {motion} from "framer-motion";

function Bio() {
    return (
        <section className='flex max-w-4xl flex-col gap-12 p-20 mx-auto' id='bio'>
            <motion.h2
                initial={{
                    opacity: 0,
                    y: -20,
                }}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className='text-center text-3xl lg:text-4xl'>BIO
            </motion.h2>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}>
                {BIO.map((bio, index) => (
                    <motion.p key={index} className='mb-4 text-lg lg:text-xl'
                              initial={{opacity: 0, x: -20}}
                              whileInView={{opacity: 1, x: 0}}
                              transition={{duration: 0.8, delay: index * 0.5}}>
                        {bio}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    );
}

export default Bio;
