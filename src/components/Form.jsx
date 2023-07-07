import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Div from './Div';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        desc: yup.string().required(),
    })
    .required();
const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            desc: '',
        },
    });
    const handleSubmitForm = (data) => {
        console.log('Data: ', data);
        reset();
        toast.success('Thanks for submitting your Query, I will get back to you shortly.');
    };
    return (
        <Div>
            <ToastContainer toastStyle={{ backgroundColor: '#cff8d1' }} />
            <form action='' onSubmit={handleSubmit(handleSubmitForm)}>
                <div className='grid grid-cols-2 gap-8 my-8'>
                    <div className=' '>
                        <label htmlFor='name' className='mb-4'>
                            Your Name*
                        </label>
                        <input
                            className='px-2 py-1 w-full'
                            type='text'
                            id='name'
                            name='name'
                            placeholder='your name'
                            {...register('name')}
                        />
                        {errors.name && <p className='text-red-600 mt-1 text-[14px] italic'>{errors.name.message}</p>}
                    </div>
                    <div className=' '>
                        <label htmlFor='email' className='mb-4'>
                            Your Email*
                        </label>
                        <input
                            className='px-2 py-1 w-full'
                            type='text'
                            id='email'
                            name='email'
                            placeholder='your email'
                            {...register('email')}
                        />
                        {errors.email && <p className='text-red-600 mt-1 text-[14px] italic'>{errors.email.message}</p>}
                    </div>
                </div>
                <div>
                    <label className='mb-4' htmlFor='desc'>
                        PLEASE TELL A BIT ABOUT YOURSELF & YOUR PROJECT*
                    </label>
                    <textarea
                        className='w-full'
                        name='desc'
                        id='desc'
                        cols='30'
                        rows='10'
                        {...register('desc')}
                    ></textarea>
                    {errors.desc && <p className='text-red-600 mt-1 text-[14px] italic'>{errors.desc.message}</p>}
                </div>
                <input
                    className='text-white bg-black px-4 py-2 rounded-lg cursor-pointer mt-4'
                    type='submit'
                    value='Send Request Now'
                />
            </form>
        </Div>
    );
};

export default Form;
