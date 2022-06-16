import React, { FunctionComponent } from 'react';

// Framer Motion Import
import { motion } from 'framer-motion';

const AnimatedMouse: FunctionComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mouse"
        >
            <div className="scroll"></div>
        </motion.div>
    );
};

export default AnimatedMouse;
