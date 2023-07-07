import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const WorkCircleBox = ({ count, text }) => {
    const num = useMotionValue(0);
    const rounded = useTransform(num, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        // count number from 0 to value
        const controls = animate(num, isInView ? count : 0, {
            duration: 2,
        });
    }, [count, isInView, num]);
    return (
        <div className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] p-[20px] border-2 border-dashed rounded-xl  lg:rounded-[50%] text-[10px] md:text-[16px] text-center'>
            <div className='flex justify-center text-[40px] md:text-[50px]'>
                <motion.div ref={ref}>{rounded}</motion.div>
                <span>+</span>
            </div>
            <p className='uppercase' dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    );
};

WorkCircleBox.propTypes = {
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

export default WorkCircleBox;
