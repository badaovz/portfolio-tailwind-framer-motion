import Div from './Div';
import Form from './Form';
import Wrapper from './Wrapper';

const Contact = () => {
    return (
        <section id='contact' className='bg-[#F2F2F2] py-10'>
            <Wrapper>
                <Div className='text-[16px]'>
                    <h3 className='text-[60px] font-bold text-center'>LET’S TALK</h3>
                    <p className='text-center'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it
                    </p>
                </Div>

                <Form />
            </Wrapper>
        </section>
    );
};

export default Contact;
