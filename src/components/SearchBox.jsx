import SearchIcon from '@mui/icons-material/Search';

import { InputBase, IconButton, ButtonBase } from '@mui/material';

const SearchBox = ({ searchText, setSearchText, filter }) => {

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);
        filter(value)
    }
    return (
        <>
            <div className="wrapper flex items-center">
                <ButtonBase component="div" className='w-full'>
                    <InputBase
                        id='search'
                        className='bg-white py-2 rounded-xl shadow-md outline outline-gray-100 outline-2 transition-all'
                        sx={{ px: 1.5 }}
                        placeholder='Cari persyaratan di sini..'
                        size='large'
                        fullWidth
                        type='search'
                        autoFocus
                        value={searchText}
                        onChange={handleInputChange}
                    />
                </ButtonBase>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
        </>
    );
}

export default SearchBox;