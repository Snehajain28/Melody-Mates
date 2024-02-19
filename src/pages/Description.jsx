import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../Sections/SideBar';
import Header from "../Sections/Header";
import Button from '../components/Button';
import { useStateValues } from '../utils/Provider';
import axios from 'axios';

function Description() {

  const { id } = useParams();
  const [{ spotify, searchClick }, dispatch] = useStateValues();
  let [details, setDetails] = useState([]);
  let [albums, setAlbums] = useState([]);
  let [Songs, setSongs] = useState([]);


  const handleClicks = () => {
    dispatch({
      type: "SET_HAMBURGER",
      hamburger: false,
    });
    if (searchClick) {
      dispatch({
        type: "SET_Search_click",
        searchClick: false,
      });
    }
  }

  useEffect((() => {
    setDetails([])
  }), [id])

  useEffect((
    () => {


      if (details.length === 0) {

        spotify.getPlaylist(id)
          .then((playlist) => {
            setDetails(playlist)
          }).catch(() => { })


        spotify.getPlaylistTracks(id)
          .then((playlist) => {
            setSongs(playlist?.items)
          }).catch(() => { })
      }
      //artist data

      if (details.length === 0) {
        spotify.getArtist(id)
          .then((playlist) => {
            setDetails(playlist)
          }).catch(() => { })

        spotify.getArtistAlbums(id)
          .then((playlist) => {
            setAlbums(playlist.items)
          }).catch(() => { })

        spotify.getArtistTopTracks(id)
          .then((playlist) => {
            console.log(playlist)
          }).catch(() => { })

        spotify.getAlbum(id)
          .then((playlist) => {
            setDetails(playlist)
          }).catch(() => { })

        spotify.getAlbumTracks(id)
          .then((playlist) => {
            setSongs(playlist)
          }).catch(() => { })
      }
    }
  ), [id, dispatch, spotify, details.length])

  async function setSong(song) {
    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/add-song`, {title:(song.track.name),imageUrl:(song.track.album.images[0].url),audioUrl:(song.track.preview_url)})
  }

  if (Songs) {
    for (let i = 0; i < Songs.length; i++) {
      setSong(Songs[i])
    }
  }

  return (
    <div className='h-full w-full absolute overflow-hidden top-0'>

      <div className="sm:ml-[35vw]  md:ml-[20rem]">
        <Header />
      </div>
      <SideBar />
      <div onClick={handleClicks}
        className='h-[90vh]  overflow-y-hidden sm:mt-[-31rem] sm:ml-[34vw] md:ml-[37vw] md:mt-[-49rem] xl:mt-[-32rem] xl:ml-[10rem]'>
        <div className=''>
          <img className='h-[40vh] mt-[10] w-[18rem] sm:w-[45vw] md:w-[40vw] md:h-[30vh] lg:w-[30vw] xl:w-[20vw] mx-auto rounded-sm '
            alt='' src={details.images?.[0].url} />
          <h1 className='text-3xl font-bold ml-[5vw] md:ml-[7vw] md:py-2 m-5 xl:ml-[17vw]'
          >{details.name}</h1>
        </div>

        {(albums.length) > 0 ? (
          <div className='flex overflow-y-auto h-[40vh]  ml-[5vw] md:ml-[6vw] xl:ml-[17vw] flex-col gap-1'>
            {
              albums?.map((album) => {
                return (
                  <div className='flex gap-5 md:p-2 items-center'>
                    <div className=''>

                      <img className='h-[60px] xl:w-[4rem] xl:h-[4rem]   rounded-md w-[70px]'
                        alt='' src={album?.images[0].url} />
                    </div>
                    <div>
                      <h1 className='font-semibold'>{(album?.name).split("(")[0]}</h1>
                    </div>
                  </div>
                )
              })
            }
          </div>) : (
          <div className='flex overflow-y-auto h-[40vh]  ml-[5vw] md:ml-[6vw] xl:ml-[17vw] flex-col gap-1'>
            {
              Songs.map((track) => {
                return (
                  <div onClick={() => {
                    dispatch({
                      type: "SET_Currently_Tracks",
                      currently_playing_track: track.track,
                    })
                  }}
                    className='flex gap-5 md:p-2 items-center'>
                    <div className=''>
                      <img className='h-[60px] xl:w-[4rem] xl:h-[4rem]   rounded-md w-[70px]'
                        alt='' src={track?.track?.album?.images[0]?.url} />
                    </div>
                    <div>
                      <h1 className='font-semibold md:text-md'>{(track.track.name).split("(")[0]}</h1>
                    </div>
                  </div>
                )
              })
            }
          </div>)
        }
        <div className='ml-[80vw] mt-[-4rem] sm:mt-[-9rem] sm:ml-[53vw] md:mt-[-3rem] xl:mt-[-5.6rem] '

          onClick={
            () => {
              if (Songs.length !== 0) {

                spotify.getPlaylistTracks(id)
                  .then((playlist) => {
                    const items = playlist?.items
                    dispatch({
                      type: "SET_TRACKS",
                      tracks: items,
                    });
                  }).catch(() => { })
              }
              if (albums.length !== 0) {
                spotify.getAlbumTracks(id)
                  .then((playlist) => {
                    setSongs(playlist)
                    const items = playlist?.items
                    dispatch({
                      type: "SET_TRACKS",
                      tracks: items,
                    });
                  }).catch(() => { })
              }

            }
          }

        >
          <Button />
        </div>
      </div >
    </div >
  )
}

export default Description
