import { navs } from '../assets/data';
import Wrapper from './Wrapper';

const Footer = () => {
    return (
        <section className='py-10 bg-[#151813] text-white'>
            <Wrapper>
                <div className='md:flex md:items-center md:justify-between'>
                    <h3 className={`text-4xl cursor-pointer text-center`}>
                        <span className='text-yellow-500'>DN.</span>nguyen
                    </h3>
                    <ul className='flex justify-center'>
                        {navs.map((nav) => (
                            <li key={nav.id} className='px-[20px] py-2 hover:bg-slate-600 rounded-md cursor-pointer'>
                                {nav.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </Wrapper>
        </section>
    );
};

export default Footer;
