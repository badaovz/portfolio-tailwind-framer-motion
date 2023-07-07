import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WorkCard = ({ image, imagePre, name }) => {
    return (
        <motion.div layout>
            <div className='overflow-hidden aspect-video rounded-[20px] cursor-pointer'>
                <LazyLoadImage
                    className='transition ease-linear duration-[2s] rounded-[20px] hover:translate-y-[-25%]'
                    src={image}
                    placeholderSrc={imagePre}
                    alt='cardImg'
                />
                {/* <img
                    className='transition ease-linear duration-[2s] rounded-[20px] hover:translate-y-[-25%]'
                    src={image}
                    alt='cardImg'
                /> */}
            </div>
            <p className='text-center text-[16px] mt-2'>{name}</p>
        </motion.div>
    );
};

WorkCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default WorkCard;
