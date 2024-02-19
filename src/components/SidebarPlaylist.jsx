import React from 'react'
import { useStateValues } from '../utils/Provider';

function Playlist({ playlist }) {
    const [{ searchClick }, dispatch] = useStateValues();

    return (
         <div onClick={() => {
                dispatch({
                    type: "SET_HAMBURGER",
                    hamburger: false,
                });
                dispatch({
                    type: "SET_Currently_Tracks",
                    currently_playing_track:playlist,
                })
                if (searchClick) {
                    dispatch({
                        type: "SET_Search_click",
                        searchClick: false,
                    });
                }
            }}
                className=' m-4 sm:m-3 mb:m-6  md:mx-4 md:my-4 items-center flex gap-4'>

                <img className='h-12 rounded-sm '
                    alt='' src={playlist.imageUrl} />
                <div>
                    <div>
                        <h3 className='font-semibold text-[0.7rem]  text-white'>{(playlist?.title).substring(0,15)}</h3>
                    </div>
                  
                </div>
            </div>  
   
    )
}

export default Playlist
