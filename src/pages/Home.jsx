import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

import CustomTooltip from '@/components/CustomTooltip';
import Card from '@/components/Card';

const Home = () => {

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
            icon: <YoutubeIcon className='text-white' />,
            link: 'https://www.youtube.com/@PEMDES_KIMAK'
        },
        {
            id: 'Email',
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

    return (<>
        <div className="wrapper flex flex-col items-center">
            <section id="head" className='mb-5'>
                <h1 className="text-black font-semibold text-base text-center leading-none tracking-tight md:leading-normal">Portal Informasi <br /> <span className='font-bold text-4xl gradient-green text-transparent bg-clip-text'>Desa Kimak</span></h1>
                <p className='my-5 text-gray-400' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, obcaecati.</p>
            </section>
            <section id="website" className='mb-12'>
                <CustomTooltip title={'kimak.bangka.go.id'} >
                    <Link target='_blank' rel='noreferrer noopener' to={'http://kimak.bangka.go.id/'}>
                        <div className="rounded-full flex flec-row justify-center items-center space-x-1 py-1 px-3 h- bg-cyan-300 w-fit text-cyan-800 hover:gradient-green hover:text-white hover:shadow-xl transition-all">
                            <p className="text-sm">Website Resmi</p>
                            <LanguageIcon/>
                        </div>
                    </Link>
                </CustomTooltip>
            </section>
            <main id="cards" className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                {links && links.map((item, i) => {
                    return (
                        <Card key={i} data={item} />
                    )
                })}
            </main>
            <section id="social-medias w-full">
                <h2 className='font-bold text-xl mb-5 text-center mx-auto'>Media Sosial:</h2>

                <div className="social-media-items flex flex-row justify-center items-center space-x-2">
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
                            Pilih sistem informasi yang ingin kamu kunjungi di beranda web ini.
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