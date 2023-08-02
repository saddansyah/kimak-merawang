import { Helmet } from "react-helmet";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    AOS.init();
    AOS.refresh();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tentang Kimak - Portal Informasi</title>
                <link rel="canonical" href="https://kimak.seterangmerawang.web.id/" />
            </Helmet>

            <div id="about" className="flex flex-col items-center space-y-8" data-aos='fade-up'>
                <h1 className="text-2xl font-semibold leading-none">Tentang <span className="gradient-green text-transparent bg-clip-text font-extrabold">Kimak</span></h1>
                <div>
                    <p className="text-center text-sm md:text-base">Selamat Datang di Desa Kimak, desa dengan berjuta keindahan dan potensi sumber daya alamnya. Terletak di Kecamatan Merawang, Desa Kimak menjadi salah satu penyumbang PADes terbesar di Kecamatan Merawang.</p>
                </div>
                <div className="info w-full text-sm md:text-base overflow-x-auto flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold leading-none mb-4">Alamat Kantor Desa Kimak:</h2>
                    <p className="text-center mb-8" >Jln. Depati Bahrin Dusun 001 RT 01 Desa Kimak, Kec. Merawang,
                        Kab. Bangka Provinsi Kep.Bangka Belitung </p>
                    <h2 className="text-lg font-semibold leading-none mb-4">Lokasi Desa Kimak:</h2>
                    <div className="map w-full h-fit flex justify-center items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.54721149577!2d106.00281752211643!3d-1.965186208093766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22ee95ae3ef625%3A0x2e7c01c7d068d1d6!2sKimak%2C%20Kec.%20Merawang%2C%20Kabupaten%20Bangka%2C%20Kepulauan%20Bangka%20Belitung!5e0!3m2!1sid!2sid!4v1690945710063!5m2!1sid!2sid" width='650' height='450' allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;