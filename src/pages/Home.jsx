import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import LanguageIcon from '@mui/icons-material/Language';

import Card from '@/components/Card';

const Home = () => {
    const [isOPen, setisOpen] = useState(false);

    const handleOpen = () => {
        setisOpen(true);
    };

    const handleClose = () => {
        setisOpen(false);
    };

    return (<>
        <div className="wrapper flex flex-col items-center">
            <section id="head" className='mb-5'>
                <h1 className="text-black font-semibold text-base text-center leading-none tracking-tight md:leading-normal">Portal Informasi <br /> <span className='font-bold text-4xl gradient-green text-transparent bg-clip-text'>Desa Kimak</span></h1>
            </section>
            <section id="website" className='mb-12'>
                <Link target='_blank' rel='noreferrer noopener' to={'http://kimak.bangka.go.id/'}>
                    <div className="rounded-full flex flec-row justify-center items-center space-x-1 py-1 px-3 bg-gray-300 w-fit text-emerald-700">
                        <p className="text-sm">Website Resmi</p>
                        <LanguageIcon />
                    </div>
                </Link>
            </section>
            <main id="cards" className='grid md:grid-cols-3 gap-8'>
                {[1, 2, 3, 4, 5, 6].map((item) => {
                    return (
                        <Card key={item} />
                    )
                })}
            </main>
            <div className="text-center mt-24 font-semibold text-sm md:text-base underline text-gray-400">
                <button className='underline' onClick={handleOpen}>Cara Penggunaan 🛈</button>
                <Dialog
                    open={isOPen}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        <p className="font-semibold">
                            Cara Penggunaan
                        </p>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Isi skor SNBT yang kalian dapat pada <span className='italic'>form</span> terkait. Setelah itu, klik tombol Submit untuk melihat hasil skor SNBT kalian dalam bentuk grafik dan rekomendasi program studi.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>OK</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    </>);
}

export default Home;