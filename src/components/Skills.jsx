import { motion, useScroll, useTransform } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Wrapper from './Wrapper';
import { icons, skills } from '../assets/data';
import Skill from './Skill';
import pe1 from '../assets/images/sec-3-p-e-1.png';
import pe2 from '../assets/images/sec-3-p-e-2.png';
import pe3 from '../assets/images/sec-3-p-e-3.png';
import Div from './Div';

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id='skills'
            className=' text-[#C7C7C7] relative overflow-hidden bg-gradient-to-br from-[#401700] from-[-3.32%]  to-[#19322D] to-50.4% py-10'
        >
            <motion.img className='absolute top-[20%] right-[10px] w-[90px] md:w-[120px]' style={{ y: y1 }} src={pe1} />
            <motion.img
                className='absolute top-[50%] md:left-[-37px] left-[-34px] w-[115px] md:w-[155px]'
                style={{ y: y2 }}
                src={pe2}
            />
            <motion.img
                className='absolute bottom-[20%] right-[-30px] w-[72px] md:w-[90px]'
                style={{ y: y3 }}
                src={pe3}
            />
            <Wrapper>
                <Div>
                    <div className='flex items-center py-10 leading-[1.5] justify-center flex-wrap relative'>
                        {icons.map((icon) => (
                            <div className='w-[60px] h-[60px] p-4 m-2 bg-gray-400 rounded-[50%]' key={icon.id}>
                                <LazyLoadImage src={icon.icon} alt='icon' />
                            </div>
                        ))}
                    </div>
                    <div className='xl:grid xl:grid-cols-2 xl:gap-2 relative'>
                        <motion.h3 className='text-center text-[40px] md:text-[80px]'>
                            SOLVING PROBLEMS <br />
                            THROUGH <br />
                            GOOD <br />
                            SERVICES <br />
                        </motion.h3>
                        <div className=''>
                            {skills.map((skill) => (
                                <Skill key={skill.id} {...skill} />
                            ))}
                        </div>
                    </div>
                </Div>
            </Wrapper>
        </div>
    );
};

export default Skills;
