import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="text-4xl font-extrabold tracking-wide text-white">
                Ilya <span className="text-blue-500">Hvostenko</span>
            </div>
            <div className="mt-2 w-16 h-1 bg-blue-500"></div>
        </motion.div>
    );
};

export default Logo;
