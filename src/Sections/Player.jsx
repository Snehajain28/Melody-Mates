
import React, { useEffect, useState } from "react";
import { PiShuffleAngularThin, PiSkipBackThin, PiSkipForwardThin } from "react-icons/pi";
import { useStateValues } from "../utils/Provider";
import { RiLoopRightFill } from "react-icons/ri";


function Player() {

  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [songs, setSongs] = useState([]);

  const [{ tracks, currently_playing_track }, dispatch] = useStateValues();

  const [audio_source, setAudio] = useState('')
  const [img_source, setimgSource] = useState('https://i1.sndcdn.com/artworks-coypEBOczGukXeVZ-AnpGcQ-t500x500.jpg')



  useEffect((
    function () {
      if (currently_playing_track !== null) {

        setAudio(currently_playing_track?.audioUrl)
        setimgSource(currently_playing_track?.imageUrl)
        dispatch({
          type: "SET_Currently_Tracks",
          currently_playing_track: null,
        });

      }

      else if (tracks) {

        setLength(tracks.length)
        setSongs(tracks);
        setAudio(tracks?.[index]?.track?.preview_url)
        setimgSource(tracks?.[index]?.track?.album.images[0].url)
        dispatch({
          type: "SET_TRACKS",
          tracks: null,
        });
      }

    }
  ), [audio_source, index, currently_playing_track, dispatch, tracks, img_source])


  useEffect((
    function () {

      setAudio(songs?.[index]?.track?.preview_url)
      setimgSource(songs?.[index]?.track?.album.images[0].url)

    }
  ), [index, songs])


  const skipNext = () => {
    if ((index + 1) < length) {
      setIndex(index + 1)
    }
    else {
      setIndex(index)
    }
  };

  const skipPrevious = () => {
    if ((index - 1) !== 0) {
      setIndex(index - 1)
    }
    else {
      setIndex(0);
    }
  };

  return (

    <div className="h-[3.7rem] lg:h-[4rem] w-[99vw] xl:h-[3.2rem]  gap-5 fixed bottom-0 z-20  sm:h-[60px] bg-[#0f0f0f] rounded-md  text-gray-400 ">
      <div className="justify-between h-full w-[80vw] lg:w-[50vw] mx-auto flex items-center ">
        <div className="rounded-md bg-yellow-300 sm:h-[54px] sm:ml-6 sm:mt-1 h-[50px]">
          <img alt=""
            className="h-full "
            src={img_source}
          />
        </div>
        <div className="flex  gap-1 sm:gap-15 items-center ">

          <PiShuffleAngularThin className="hidden sm:block"
            size={30} />

          <button id="prev" className="action-btn">
            <PiSkipBackThin size={30}
              className="fas fa-bakward"
              onClick={skipPrevious} />
          </button>


          <div className="h-[2.2rem] w-[10rem] lg:w-[20rem] rounded-[15px] flex justify-center  flex-col z-10">
            <audio className="bg-opacity-0  bg-gray-500"
              src={audio_source} onEnded={() => { skipNext(); }} autoPlay
              controls controlsList="nodownload noplaybackrate" />

          </div>

          <button id="next" className="action-btn">
            <PiSkipForwardThin size={30}
              onClick={skipNext}
              className="fas fa-forward" />
          </button>
          <RiLoopRightFill className="hidden sm:block"
            size={28} />
        </div>
      </div >
    </div>
  )
}
export default Player
