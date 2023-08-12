import { Helmet } from "react-helmet";

const PolicyBrief = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Policy Brief - Kimak+</title>
                <link rel="canonical" href="https://kimak.seterangmerawang.web.id/" />
            </Helmet>

            <div id="policy-brief" className="flex flex-col items-center">
                <h1 className="text-2xl font-semibold leading-none mb-12">Policy <span className="gradient-green text-transparent bg-clip-text font-extrabold">Brief</span></h1>
            </div>
        </>
    );
}

export default PolicyBrief;