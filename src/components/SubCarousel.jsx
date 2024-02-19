import { useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import { useStateValues } from '../utils/Provider';

function SubCarousel() {

    const [{  playlists }, dispatch] = useStateValues();

    useEffect((

        () => {
            async function getData() {
                await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/song/all-song`)
                    .then((response) => {
                        dispatch({
                            type: "SET_PLAYLISTS",
                            playlists:response.data.data,
                        });
                    })
                    .catch((e) => { console.log(e) })
            }
            getData();
        }
    ), [dispatch])
   
    return (
        <div className='lg:h-[18rem] md:mt-[-1rem] w-[100vw]'>
            <div className='  w-[90vw] mx-auto md:mx-10 lg:w-[50vw] md:w-[60vw] '>
                <div className='flex w-full justify-center gap-4 flex-wrap'>
                     {
                    playlists?.map((item) => (
                        <Card item={item} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default SubCarousel






