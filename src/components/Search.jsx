import React, { useEffect } from 'react'
import { useStateValues } from '../utils/Provider';

export default function Search({ query ,id="" }) {

    const [{ searchTrack, searchClick }, dispatch] = useStateValues();

    let style;

    useEffect(() => {
        dispatch({
            type: "SET_Search_click",
            searchClick: true,
        })
    }, [dispatch])

    if (searchClick) {
        style = "flex absolute"
    }
    else {
        style = "hidden"
    }
    return (
        <div key={id}>
            {query ?
                (<div>
                    {searchTrack ?
                        (
                            <div className={`h-[70vh] gap-5 overflow-y-auto ${style} flex-col rounded-md w-[75vw] bg-[#252525]  z-5 top-[65px] p-4 right-1`}>
                                {
                                    searchTrack?.tracks.items.map((item) => {
                                        return (
                                            <div key={item.id} >
                                                <div onClick={() => {

                                                    dispatch({
                                                        type: "SET_Currently_Tracks",
                                                        currently_playing_track: item,
                                                    });
                                                    dispatch({
                                                        type: "SET_Search_click",
                                                        searchClick: false,
                                                    });
                                                }}
                                                    className='flex gap-5 items-center'>
                                                    <div className=''>

                                                        <img className='h-[60px] rounded-md w-[70px]'
                                                            alt='' src={item.album.images[0].url} />
                                                    </div>
                                                    <div>
                                                        <h1 className='font-semibold'>{item.name}</h1>
                                                    </div>
                                                </div>
                                            </div>)
                                    })

                                }
                            </div>)

                        : (<div></div>)
                    }
                </div>)

                : (<div></div>)
            }
        </div>
    )
}
