import { motion, useScroll, useTransform } from 'framer-motion';
import pe1 from '../assets/images/sec-2-p-e-1.png';
import pe2 from '../assets/images/sec-2-p-e-2.png';
import Wrapper from './Wrapper';
import Div from './Div';

const About = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });

    return (
        <section
            id='about'
            className='relative py-10 overflow-hidden bg-gradient-to-r from-[#fff] from-30%  to-[#32e2ed] to-50.4% '
        >
            <motion.img
                className='absolute top-[10%] right-[-40px] w-[78px] md:w-[180px]'
                style={{ y: y1 }}
                src={pe1}
            />
            <motion.img
                className='absolute bottom-[-20%] md:left-[70%] md:-translate-x-[50%] left-[-50px] w-[93px] md:w-[170px]'
                style={{ y: y2 }}
                src={pe2}
            />
            <Wrapper>
                <div className=' md:max-w-[70%] relative'>
                    <Div className='text-[40px] md:text-[80px] font-bold'>A PRODUCT DESIGN BY ME</Div>
                    <Div className='text-[16px] text-gray-600 mb-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it
                    </Div>
                    <Div className='text-[16px] text-gray-600 mb-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it
                    </Div>
                    <Div className='text-[16px] text-gray-600 mb-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled itLorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                    </Div>
                </div>
            </Wrapper>
        </section>
    );
};

export default About;
