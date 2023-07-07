import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navs } from '../assets/data';
import { scrollTo } from '../utils/helpers';
import Wrapper from './Wrapper';

const Navbar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const ref = useRef(null);
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' },
    };

    const closeSidebar = (id) => {
        setIsSideBarOpen(false);
        scrollTo(id);
    };
    return (
        <motion.div
            id='navbar'
            className='shadow-lg py-[8px] relative h-[60px] bg-transparent'
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
        >
            <Wrapper>
                <nav ref={ref} className=' flex items-center justify-between '>
                    <h3 className={`text-4xl text-gray-800 cursor-pointer`}>
                        <span className='text-yellow-500'>DN.</span>nguyen
                    </h3>
                    <ul className='hidden md:flex '>
                        {navs.map((nav) => (
                            <li
                                key={nav.id}
                                className='px-[20px] py-2 hover:bg-slate-600  rounded-md  cursor-pointer '
                                onClick={() => {
                                    scrollTo(nav.id);
                                }}
                            >
                                {nav.title}
                            </li>
                        ))}
                    </ul>
                    <motion.button
                        className='md:hidden transition ease-in-out duration-100 text-[24px] cursor-pointer bg-transparent '
                        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                        // whileHover={{ scale: 2.5 }}
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                        }}
                    >
                        <FaBars />
                    </motion.button>
                </nav>
            </Wrapper>
            <motion.div
                className={`fixed top-0 left-0 h-[100vh] w-[300px] bg-gray-100 shadow-lg p-5  z-[100]`}
                animate={isSideBarOpen ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.3 }}
            >
                <div className={`text-4xl text-gray-800 cursor-pointer mb-5 flex items-center justify-between`}>
                    <p>
                        <span className='text-yellow-500'>DN.</span>nguyen
                    </p>
                    <button
                        className=' text-red-600 text-[24px] transition ease-in-out duration-200 hover:scale-125'
                        onClick={closeSidebar}
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul className=''>
                    {navs.map((nav) => (
                        <li
                            key={nav.id}
                            className='px-[20px] py-2 hover:bg-slate-600 rounded-md cursor-pointer'
                            onClick={() => closeSidebar(nav.id)}
                        >
                            {nav.title}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;
