import PropTypes from 'prop-types';
import Div from './Div';
const Skill = ({ id, title, list, text }) => {
    return (
        <Div className='py-5 relative'>
            <h4 className='mb-5 text-[20px]'>{id}.</h4>
            <h3 className='text-orange-500 text-[30px] mb-4'>{title}</h3>
            <div>
                {list.map((l, index) => (
                    <button key={index} className='px-[16px] py-[10px] bg-[#252525] rounded-xl mr-2 mb-2'>
                        {l}
                    </button>
                ))}
            </div>
            <p className='my-4'>{text}</p>
            <hr />
        </Div>
    );
};

Skill.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
};

export default Skill;
