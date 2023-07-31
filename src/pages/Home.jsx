import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import AOS from "aos";
import "aos/dist/aos.css";

import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DescriptionIcon from '@mui/icons-material/Description';

import CustomTooltip from '@/components/CustomTooltip';
import Card from '@/components/Card';
import mapSvg from '@/assets/petaKimak-01.svg';
import citySvg from '@/assets/smartCity.svg';

const Home = () => {
    // AOS
    AOS.init();
    AOS.refresh();

    // Link List
    const links = [
        {
            title: 'SiKaWa',
            icon: <LanguageIcon color='mainGreen' sx={{ fontSize: 64 }} />,
            description: 'SiKaWa merupakan sistem informasi pelayanan surat keterangan usaha segara online yang dikenbangkan untuk warga Desa Kimak.',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScQOalXjQThJwnSBYTwyL3BvHV45NHfRmevyN6XPVKEoh9P5A/viewform?usp=sf_link'
        },
        {
            title: 'Persyaratan Berkas',
            icon: <DescriptionIcon color='mainGreen' sx={{ fontSize: 64 }} />,
            description: 'Berisi mengenai persyaratan berkas yang harus dipenuhi, contohnya berkas Akta Kelahiran.',
            link: 'persyaratan-berkas'
        },
    ]

    // Social Medias
    const socialMedias = [
        {
            id: 'facebook',
            baseColor: 'bg-blue-600',
            icon: <FacebookIcon className='text-white' />,
            link: 'https://www.facebook.com/profile.php?id=100011542398342&mibextid=ZbWKwL'
        },
        {
            id: 'instagram',
            baseColor: 'bg-gray-600',
            icon: <InstagramIcon className='text-white' />,
            link: 'https://www.instagram.com/desakimak/'
        },
        {
            id: 'youtube',
            baseColor: 'bg-red-600',
            icon: <YouTubeIcon className='text-white' />,
            link: 'https://www.youtube.com/@PEMDES_KIMAK'
        },
        {
            id: 'email',
            baseColor: 'bg-emerald-600',
            icon: <EmailIcon className='text-white' />,
            link: 'mailto:pemdeskimak@gmail.com'
        },
    ]

    // Toggle Cara Penggunaan
    const [isOPen, setisOpen] = useState(false);

    const handleOpen = () => {
        setisOpen(true);
    };

    const handleClose = () => {
        setisOpen(false);
    };

    // Parallax
    const cityImg = useRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            cityImg.current.style.opacity = scrollTop / (document.body.scrollHeight + window.innerHeight);
        })
    }, [])



    return (<>
        <div className="wrapper flex flex-col items-center">
            <img src={citySvg} ref={cityImg} alt="Ilustrasi Kota" className='h-[35vh] scale-125 w-full -z-30 md:hidden -bottom-20 fixed bg-gradient-to-t from-emerald-800 bg-clip-padding opacity-0 transition-transform' />
            <img src={mapSvg} alt="Peta Desa Kimak" className='absolute h-[35vh] md:h-[70vh] -z-20 top-24 opacity-30'/>
            <section id="head" className='mb-5' data-aos="fade-up">
                <h1 className="text-black font-semibold text-base text-center leading-none tracking-tight md:leading-normal" >Portal Informasi <br /> <span className='font-bold text-4xl gradient-green text-transparent bg-clip-text'>Desa Kimak</span></h1>
                <p className='my-5 text-center text-gray-500' >Akses semua layanan digital Desa Kimak dalam satu genggaman 🌐</p>
            </section>
            <section id="website" className='mb-12' data-aos="fade-up" data-aos-offset="400">
                <CustomTooltip title={'kimak.bangka.go.id'} >
                    <Link target='_blank' rel='noreferrer noopener' to={'http://kimak.bangka.go.id/'}>
                        <div className="rounded-full flex flec-row justify-center items-center space-x-1 py-1 px-3 h- bg-cyan-300 w-fit text-cyan-800 hover:gradient-green hover:text-white hover:shadow-xl transition-all">
                            <p className="text-sm">Website Resmi</p>
                            <LanguageIcon />
                        </div>
                    </Link>
                </CustomTooltip>
            </section>
            <main id="cards" className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12' data-aos="fade-up">
                {links && links.map((item, i) => {
                    return (
                        <Card key={i} data={item}/>
                    )
                })}
            </main>
            <section id="social-medias w-full">
                <h2 className='font-bold text-xl mb-5 text-center mx-auto' data-aos="fade-up">Media Sosial:</h2>

                <div className="social-media-items flex flex-row justify-center items-center space-x-2" data-aos="fade-up">
                    {socialMedias && socialMedias.map((item, i) => {
                        return (
                            <div key={item.id} id={item.id} className={`${item.baseColor} hover:animate-wiggle w-fit p-2 rounded-full hover:shadow-lg hover:scale-105 transition-all active:scale-90`}>
                                <div className="logo aspect-square">
                                    <IconButton centerRipple href={item.link} target='_blank' rel='noopener noreferrer' size='small'>
                                        {item.icon}
                                    </IconButton>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <div className="text-center mt-24 font-semibold text-sm md:text-base underline">
                <button className='py-1 px-3 bg-white bg-opacity-70 outline outline-1 outline-gray-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm' onClick={handleOpen}>Cara Penggunaan 🤔</button>
                <Dialog
                    open={isOPen}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        <p className="font-semibold">
                            Cara Penggunaan 🤔
                        </p>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Pilih sistem informasi yang ingin kamu kunjungi di beranda web ini. Contact support: <a href="wa.me/6281393789949" className='underline'>@seterangmerawang</a>
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