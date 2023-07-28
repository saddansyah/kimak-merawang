import { Helmet } from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tentang Kimak - Portal Informasi</title>
                <link rel="canonical" href="https://kimak.seterangmerawang.web.id/" />
            </Helmet>

            <div id="about" className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold leading-none mb-12">Tentang <span className="gradient-green text-transparent bg-clip-text font-extrabold">Kimak</span></h1>
            </div>
        </>
    );
}

export default About;