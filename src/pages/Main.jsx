import React, { useEffect } from 'react'
import { Footer } from '../Sections/Footer'
import Header from '../Sections/Header'
import { useStateValues } from '../utils/Provider';
import MainCarousel from '../components/MainCarousel';
import SubCarousel from '../components/SubCarousel';
import SideBar from '../Sections/SideBar';
import RightBar from '../components/RightBar';

export default function Main() {

    const [{ searchClick, new_releases, playlists, featured_playlists, hamburger, top_artists }, dispatch] = useStateValues();

    const handleClicks = () => {
        if (hamburger) {
            dispatch({
                type: "SET_HAMBURGER",
                hamburger: false,
            });
        }
        if (searchClick) {
            dispatch({
                type: "SET_Search_click",
                searchClick: false,
            });
        }
    }


    useEffect((
        () => {
            dispatch({
                type: "SET_HAMBURGER",
                hamburger: false,
            });
        }
    ), [dispatch])

    let FeaturedPlylst = [];
    let Playlist = [];
    let New_releases = [];
    let Top_Artists = [];

    Playlist.push(playlists?.items)
    New_releases.push(new_releases?.albums.items)
    Top_Artists.push(top_artists?.items)
    FeaturedPlylst.push(featured_playlists?.playlists?.items)

    //  New_releases.push(nplaylists?.playlists?.items)
    //  console.log(featured_playlists.playlists.items)
    //console.log(recommendation)
    //console.log(FeaturedPlylst)
    //  console.log(New_releases)




    return (

        <div className='flex flex-col overflow-y-hidden'>
            <div className='flex'>
                <div >
                    <SideBar />
                </div>
                <div>
                    <Header />
                    <div className=' overflow-y-hidden xl:flex xl:w-[75vw] justify-between'>
                        <div onClick={handleClicks}
                            className='h-[87vh] flex justify-between overflow-y-hidden  bg-black  overflow-x-hidden'>
                            <div className='overflow-y-hidden '>
                                <MainCarousel />
                                <SubCarousel />
                            </div>
                            <RightBar />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    )
}
