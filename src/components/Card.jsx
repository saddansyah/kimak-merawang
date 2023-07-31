import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';

const Card = ({ data }) => {
    return (
        <>
            <Link to={data.link}>
                <ButtonBase component="div" className='active:scale-90 hover:scale-105 transition-all'>
                    <div id="card" className='flex flex-col items-center h-64 justify-center p-8 rounded-2xl shadow-xl bg-white outline outline-1 outline-gray-200 hover:shadow-2xl active:outline-emerald-600 active:outline-2 transition-all'>
                        <section id="title" className='text-xl text-center font-semibold tracking-tight leading-none mb-4'>
                            <h3>
                                {data.title}
                            </h3>
                        </section>
                        <section id="image" className='mb-4'>
                            {data.icon}
                        </section>
                        <section id="description" className='text-sm text-center'>
                            <p>
                                {data?.description?.length > 150 ? data.description?.substring(0, 150) + '...' : data.description}
                            </p>
                        </section>
                    </div>
                </ButtonBase>
            </Link>
        </>
    );
}

export default Card;