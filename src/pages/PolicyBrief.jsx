import { Helmet } from "react-helmet";
import DownloadIcon from "@mui/icons-material/Download";
import ButtonBase from "@mui/material/ButtonBase";

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
                <section className="download">
                    <ButtonBase component="a" target="_blank" href="https://drive.google.com/file/d/1DCgqdrJo_8u5cLMpZ7I9n1jMhu3mEJUZ/view?usp=sharing"  >
                        <div className="py-3 px-4 rounded-xl gradient-green text-white font-semibold">
                            <DownloadIcon /> Download the file (Google Drive)
                        </div>
                    </ButtonBase>
                </section>
            </div>
        </>
    );
}

export default PolicyBrief;