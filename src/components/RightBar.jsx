import React from 'react'
import Playlist from './SidebarPlaylist'
import { useStateValues } from '../utils/Provider';

function RightBar() {

    const [{ playlists }, dispatch] = useStateValues();

    console.log(dispatch)

    return (
        <div className=' hidden lg:flex flex-col bg-[#0f0f0f] overflow-y-hidden rounded-lg mt-[4.4rem] h-[27rem] w-[23rem] '>
            <div className=''>
                {playlists?.items?.map((playlist) => {
                    return (<Playlist key={playlist.id} playlist={playlist} />)
                }
                )}
            </div>
        </div>)
}

export default RightBar
