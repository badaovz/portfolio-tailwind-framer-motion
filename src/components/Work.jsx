import { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { achievements, filters, projects } from '../assets/data';
import WorkCard from './WorkCard';
import WorkCircleBox from './WorkCircleBox';
import Div from './Div';

const Work = () => {
    const [filter, setFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredProjects(projects);
        } else {
            let filProjects = projects.filter((project) => project.tags.includes(filter));
            setFilteredProjects(filProjects);
        }
    }, [filter]);

    return (
        <section id='work' className='bg-gradient-to-bl from-[#111111] to-[#19322D]  text-[#E8E8E8] py-10'>
            <Wrapper>
                <div className='text-center text-[16px]'>
                    <Div>
                        <h3 className='text-[40px] md:text-[80px]'>LATEST PROJECTS</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Div>
                    <Div className='text-center my-10'>
                        {filters.map((fil) => (
                            <button
                                key={fil.id}
                                className={`${
                                    fil.id === filter ? 'bg-orange-500' : ''
                                } min-w-[100px] rounded-lg py-2 mr-2 last:mr-0`}
                                onClick={() => setFilter(fil.id)}
                            >
                                {fil.name}
                            </button>
                        ))}
                    </Div>
                    <Div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {filteredProjects.map((project, index) => (
                            <WorkCard key={index} {...project} />
                        ))}
                    </Div>
                    <Div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 py-10 md:py-20 m-x-auto place-items-center'>
                        {achievements.map((md) => (
                            <WorkCircleBox key={md.id} {...md} />
                        ))}
                    </Div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Work;
