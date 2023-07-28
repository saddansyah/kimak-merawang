import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 Not Found - Portal Informasi</title>
                <link rel="canonical" href="https://kimak.seterangmerawang.web.id/" />
            </Helmet>

            <div id="404">
                <h1 className="text-2xl font-semibold"><span className="gradient-green text-transparent bg-clip-text font-extrabold">404</span> - Halaman tidak ditemukan 🙅‍♂️</h1>
            </div>
        </>
    );
}

export default NotFound;