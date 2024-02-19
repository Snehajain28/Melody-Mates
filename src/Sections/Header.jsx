import React, { useEffect, useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { useStateValues } from '../utils/Provider';
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Search from '../components/Search';

export default function Header() {

  const [{ hamburger, spotify }, dispatch] = useStateValues();
  const navigate = useNavigate();
  const [query, setQuery] = useState("")

  const handleHamburger = () => {
    dispatch({
      type: "SET_HAMBURGER",
      hamburger: (!hamburger),
    });
  }

  useEffect((
    () => {
      if (query !== "") {
        spotify.searchTracks(query)
          .then((response) => {
            dispatch({
              type: "SET_Search_Tracks",
              searchTrack: response,
            });
          }).catch(() => { })
      }
    }
  ), [query, dispatch, spotify])



  return (
    <div className='fixed items-center bg-[#0f0f0f]  rounded-sm z-30 px-3 gap-3 flex justify-between h-[60px]  md:h-[65px] md:ml-[1rem] w-[100vw] px-1 mx-auto sm:w-[64vw] md:w-[57vw] lg:w-[68vw] xl:w-[68vw]'>
      <div className='flex  gap-2'>
        <div className='flex  sm:hidden'>
          {
            hamburger ?
              (<div onClick={handleHamburger}>
                <RxCross1 className='mx-[11px]'
                  size={20} />
              </div>) : (
                <div onClick={handleHamburger}>
                  <Hamburger size={20} />
                </div>
              )
          }
        </div>
        <div className='flex gap-1  items-center'>
          <IoIosArrowBack size={15} onClick={() => { navigate(-1) }} />
          <IoIosArrowForward size={15} onClick={() => { navigate(+1) }} />
        </div>
      </div>
      <div onClick={() => {
        dispatch({
          type: "SET_Search_click",
          searchClick: true,
        });

      }}
        className='bg-[#3b3b3b] w-[40vw] sm:w-[50vw]  xl:h-[25px] h-[35px] rounded-md mx-auto text-gray-200'>
        <input type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
          className='bg-[#3b3b3b] rounded-sm p-3 h-full w-full '
          placeholder="Search For a Song" />

      </div>
      <div className=''>
        <Avatar name="Sneha" round="50px" size='40px'
          color={Avatar.getRandomColor('sitebase', ['red', 'blue', 'green', 'yellow', 'pink', 'orange'])} />
      </div>
      <Search query={query} />
    </div >
  )
}
