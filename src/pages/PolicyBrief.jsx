import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';

import SearchBox from "@/components/SearchBox";

const PolicyBrief = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Policy Brief - Kimak+</title>
                <link rel="canonical" href="https://kimak.seterangmerawang.web.id/" />
            </Helmet>

            <div id="persyaratan-berkas" className="flex flex-col items-center">
                <h1 className="text-2xl font-semibold leading-none mb-12">Policy <span className="gradient-green text-transparent bg-clip-text font-extrabold">Brief</span></h1>
            </div>
        </>
    );
}

export default PolicyBrief;