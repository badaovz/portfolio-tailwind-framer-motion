import PropTypes from 'prop-types';

const Wrapper = ({ children, ...props }) => {
    return (
        <div className='max-w-[1280px] px-5 md:px-10 mx-auto' {...props}>
            {children}
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
