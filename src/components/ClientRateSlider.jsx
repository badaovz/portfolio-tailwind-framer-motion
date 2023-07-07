import PropTypes from 'prop-types';
const ClientRateSlider = ({ img, name, text }) => {
    return (
        <div className='text-center p-10'>
            <img className='w-[80px] max-w-[80px] h-[80px] rounded-full' src={img} alt='img' />
            <h4 className='font-bold'>{name}</h4>
            <p className='mb-4'>client</p>
            <p>{text}</p>
        </div>
    );
};

ClientRateSlider.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ClientRateSlider;
