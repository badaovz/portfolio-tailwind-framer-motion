import ClientRateSlider from './ClientRateSlider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Wrapper from './Wrapper';
import { slices } from '../assets/data';
import '../slider.css';
import Div from './Div';

const ClientRate = () => {
    return (
        <section className='bg-gradient-to-r from-white from-60% to-[#BDF5EC]'>
            <Wrapper>
                <div className='text-center py-10'>
                    <Div>
                        <h3 className='text-[60px] uppercase font-bold'>CLIENT SAYS</h3>
                        <p className='mb-8'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Div>
                    <div className='bg-[#F2F2F2] rounded-2xl'>
                        <Carousel>
                            {slices.map((slice) => (
                                <ClientRateSlider key={slice.id} {...slice} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default ClientRate;
