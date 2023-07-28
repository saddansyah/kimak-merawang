import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>
            <Link target='_blank' rel='noreferrer noopener' to={'https://www.instagram.com/ppsmb_kesatria/'}>
                <div id="card" className='flex flex-col items-center justify-center p-8 rounded-xl shadow-lg outline outline-1 outline-gray-200 hover:shadow-2xl active:outline-emerald-600 active:outline-2 hover:scale-105 transition-all'>
                    <section id="title" className='text-xl text-center font-semibold tracking-tight leading-none mb-4'>
                        Lorem, ipsum dolor.
                    </section>
                    <section id="image" className='mb-4'>
                        <HomeIcon color='mainGreen' sx={{ fontSize: 64 }} />
                    </section>
                    <section id="description" className='text-sm text-center'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </section>
                </div>
            </Link>
        </>
    );
}

export default Card;