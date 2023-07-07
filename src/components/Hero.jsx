import { FaExternalLinkAlt, FaHandSparkles } from 'react-icons/fa';
import { motion } from 'framer-motion';
import avatar from '../assets/images/avatar.png';
import Wrapper from './Wrapper';
import useFollowPointer from '../hooks/useFollowPointer';
import { useRef } from 'react';
import { scrollTo } from '../utils/helpers';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Hero = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <section id='hero' className='bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden'>
            {/* style for pointermove */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className='hidden md:block bg-gradient-to-r from-[#ff3c47] from-[-3.32%] via-[#eec850] via-12.21% to-[[#3257ed]] to-73.4% border-[122px] border-[#d21655] border-solid blur-[187px] md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]'
                transition={{ type: 'linear' }}
            />
            <span className='hidden md:block bg-gradient-to-r from-[#e65300] from-7.99% via-[#e7af00] via-47.79% to-[#006be9] to-86.72% border-[122px] border-[#d21655] border-solid blur-[187px] md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]' />
            {/* end */}

            <Wrapper>
                <div className='relative min-h-[calc(100vh-60px)]'>
                    <motion.h1
                        className='text-[30px] md:text-[80px] text-center py-4 md:py-10'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        I AM A FRONTEND
                        <br /> DEVELOPER
                    </motion.h1>
                    <motion.div
                        initial={{ y: 300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                    >
                        <h5 className='text-center md:text-start'>
                            <FaHandSparkles className='mx-auto md:mx-0 text-yellow-500 text-[24px]' /> Hi, I Am{' '}
                            <span>Dao</span>
                        </h5>
                        <div className='max-w-[90vw] text-center md:text-start md:max-w-[50vw] text-[14px] md:text-[20px]'>
                            <p>
                                I create and maintain modern websites and applications.{' '}
                                <br className='hidden md:block' />I solve all your business problems. Lorem Ipsum is
                                simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='hidden md:grid lg:hidden grid-cols-2 gap-x-4 py-6 text-[20px]'
                        initial={{ y: 300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                    >
                        <div className='flex items-center'>
                            <h3 className='text-[80px]'>30+ </h3>
                            <p>
                                SUCCESS <br /> COMPLETED <br /> PROJECT
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <h3 className='text-[80px]'>3+ </h3>
                            <p>
                                YEAR OF <br /> EXPERIENCE
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className='' initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
                        <img
                            className='max-w-[400px] absolute bottom-0 left-[50%] translate-x-[-50%] h-auto'
                            src={avatar}
                            alt='heroImg'
                        />
                        {/* <div className='w-[500px] h-[400px] mx-auto bg-slate-400'> */}
                        <motion.div
                            className='hidden md:flex w-[100px] h-[100px] bg-gray-300 text-center text-[20px] flex-col items-center justify-center text-[#111111] cursor-pointer absolute bottom-[200px]  md:left-[calc(50%+200px)]'
                            animate={{
                                scale: [1, 1.2, 1.2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                            }}
                            transition={{
                                duration: 2,
                                ease: 'easeInOut',
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                            drag
                            dragConstraints={{
                                top: -10,
                                left: -10,
                                right: 10,
                                bottom: 10,
                            }}
                            onClick={() => scrollTo('contact')}
                        >
                            <span>
                                <FaExternalLinkAlt />
                            </span>
                            <p>Hire Me!</p>
                        </motion.div>
                        {/* </div> */}
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;
