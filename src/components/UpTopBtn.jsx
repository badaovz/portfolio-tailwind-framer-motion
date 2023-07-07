import Wrapper from './Wrapper';
import { FaAngleUp } from 'react-icons/fa';
import { scrollTo } from '../utils/helpers';
import { useEffect, useState } from 'react';

const UpTopBtn = () => {
    const [scrollH, setScrollH] = useState();
    useEffect(() => {
        const handleScroll = () => {
            setScrollH(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Wrapper>
            <div
                className={`${
                    scrollH > 200 ? '' : 'hidden'
                } max-[767px]:hidden fixed bottom-2 right-2 bg-gray-500 text-white hover:text-blue-400  p-2 rounded-md`}
            >
                <button className='flex flex-col items-center justify-center' onClick={() => scrollTo('navbar')}>
                    <FaAngleUp className=' w-full text-[40px] ' />
                </button>
            </div>
        </Wrapper>
    );
};

export default UpTopBtn;
