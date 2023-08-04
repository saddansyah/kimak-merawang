import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';

import SearchBox from "@/components/SearchBox";

const PersyaratanBerkas = () => {

    const data = [
        {
            title: 'Penerbitan Kartu Identitas Anak (KIA)',
            details: [
                'Kartu keluarga (Asli)',
                'Akta kelahiran anak (Asli)',
                'E-KTP orang tua (Asli)',
                'Foto anak (Asli)'
            ]
        },
        {
            title: 'Pengajuan Kartu Keluarga (KK) (Kedatangan dari Luar Bangka)',
            details: [
                'SKPWNI daerah asal (Asli)',
                'E-KTP pemohon (Asli)',
                'Buku nikah (Asli)',
                'Kartu keluarga (Asli)'
            ]
        },
        {
            title: 'Permohonan Pelayanan Kartu Keluarga (KK) Baru',
            details: [
                'E-KTP pemohon (Asli)',
                'Buku nikah (Asli)',
                'Kartu keluarga (Asli)'
            ]
        },
        {
            title: 'Permohonan Pelayanan Perubahan Nama dan Alamat dari Kartu Keluarga (KK)',
            details: [
                'Kartu keluarga (Asli)',
                'Surat keterangan atau bukti perubahan peristiwa kependudukan (Contoh: SKPWNI atau akta lahir) (Asli)',
                'E-KTP pemohon (Asli)',
            ]
        },
        {
            title: 'Pengajuan Surat Pindah Jiwa (SKPWNI)',
            details: [
                'E-KTP pemohon (Asli)',
                'Kartu keluarga (Asli)'
            ]
        },
        {
            title: 'Permohonan Pelayanan Akta Kelahiran',
            details: [
                'Surat keterangan kelahiran dari rumah sakit, puskesmas, bidan, dan dokter (Asli)',
                'Buku nikah (Asli)',
                'Kartu keluarga (Asli)',
                'E-KTP orang tua (Asli)'
            ]
        },
        {
            title: 'Permohonan Akta Kematian',
            details: [
                'Surat kematian dari dokter atau Kepala Desa (Asli)',
                'KK atau KTP yang meninggal dunia',
                'KTP pelapor',
            ]
        },
    ];

    // Client-side Search
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => setFilteredData(data), []);

    const filter = (value) => {
        const filtered = data?.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );

        filtered[0] ? setFilteredData(filtered) : setFilteredData([]);
    }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Persyaratan Berkas - Kimak+</title>
                <link rel="canonical" href="https://kimak.seterangmerawang.web.id/" />
            </Helmet>

            <div id="persyaratan-berkas" className="flex flex-col items-center">
                <h1 className="text-2xl font-semibold leading-none mb-12">Persyaratan <span className="gradient-green text-transparent bg-clip-text font-extrabold">Berkas</span></h1>
                <div className="search-wrapper w-full mb-12">
                    <SearchBox
                        searchText={searchText}
                        setSearchText={setSearchText}
                        filter={filter}
                    />
                </div>
                <div className="accordions w-full">
                    {filteredData[0] && filteredData?.map((item, i) => {
                        return (
                            <Accordion variant="outlined" key={i} className="mb-5">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <div className="wrapper space-x-2 flex flex-row items-center justify-center">
                                        <CircleIcon className="text-emerald-600" sx={{ fontSize: 14 }} /><p className=" text-sm md:text-base font-semibold text-cyan-800">{item.title}</p>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <section className="wrapper px-4">
                                        <ul className="list-decimal">
                                            {item.details && item.details?.map((item, i) => {
                                                return (
                                                    <li key={i} className="text-sm md:text-base">
                                                        {item}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </section>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default PersyaratanBerkas;