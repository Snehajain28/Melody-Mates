import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { FaList, FaPlus } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc"
import { useStateValues } from '../utils/Provider';
import Playlist from '../components/SidebarPlaylist';
import { Link } from 'react-router-dom';
import { CategoryOutlined } from '@mui/icons-material';

export default function SideBar() {

    const [{ playlists, navigation, hamburger, searchClick }, dispatch] = useStateValues();

    let style;

    if (hamburger) {
        style = "block absolute z-10 top-[58px]"
    }
    else {
        style = "hidden"
    }
    const handleClicks = () => {

        if (searchClick) {
            dispatch({
                type: "SET_Search_click",
                searchClick: false,
            });
        }
    }

    return (<div onClick={handleClicks}
        className={`p-2 md:w-[30rem] lg:w-[35rem] w-[12rem] md:p-4 z-20 lg:w-[20rem]  sm:w-[35vw] sm:block py-2 ${style}`}>
        <div className='rounded-lg font-bold  text-gray-300  flex flex-col p-2 px-3 md:p-4 md:gap-4 md:px-6 gap-3 bg-[#0f0f0f]  '>
            <Link to="/">
                <div className='flex cursor-pointer text-sm lg:text-md gap-4 items-center hover:text-white'>
                    <HomeOutlinedIcon  /><span> Home</span>
                </div>
            </Link>
            <Link to={"/search"} onClick={
                () => {
                    dispatch({
                        type: "SET_Navigation",
                        navigation: (!navigation),
                    });
                }
            }>
                <div className='flex cursor-pointer text-sm lg:text-md  gap-4  items-center hover:text-white '>
                    <CategoryOutlined  />
                    <span>Category</span>
                </div>
            </Link>
        </div>

        < div className='rounded-lg h-[60vh]  xs:h-[64vh] overflow-y-hidden  sm:h-[68vh]  xl:h-[27.1rem] mt-1 bg-[#0f0f0f] '>
            <div className='fixed w-[11rem] rounded-lg bg-[#0f0f0f] shadow-lg flex flex-col '>
                <div className='flex text-gray-300  items-center justify-between font-bold p-3'>
                    <div className='hover:text-white text-sm md:text-md flex cursor-pointer gap-4 items-center'>
                        <VscLibrary  />
                        <span>Your Library</span>
                    </div>
                    <button className='cursor-pointer hover:bg-[#252525] p-2 hover:rounded-full'>
                        <FaPlus className='hover:text-white '
                            size={15} />
                    </button>
                </div>

                <div className='flex  mb:pb-4 md:ml-4 mb:ml-2 pb-1 gap-2 px-2  '>
                    <button className='bg-[#252525] text-xs hover:bg-[#3b3b3b]  px-3 p-1 rounded-full '
                    >Playlists</button>
                    <button className='bg-[#252525] text-xs hover:bg-[#3b3b3b]  px-3 p-1 rounded-full '
                    >Artists</button>
                </div>
            </div>

            <div className=" mt-[5rem] overflow-y-auto xs:h-[19rem] h-[15.9rem] sm:h-[45vh] lg:h-[19rem]">
                <div className='mt-3  sm:w-[33vw] md:w-[17rem] md:my-3 md:mx-auto  px-3 text-gray-300 flex  justify-between'>
                    <SearchIcon />
                    <div className='flex font-semibold text-sm items-center gap-2'>
                        <p>Recents</p>
                        <FaList />
                    </div>

                </div>
                {playlists?.map((playlist) => {
                   
                    return (<Playlist playlist={playlist} key={playlist._id} />)

                }
                )}

            </div>
        </div>
    </div>
    )
}

