import { useStateValues } from "../utils/Provider";

export default function Card({ item }) {

  const [{ spotify}, dispatch] = useStateValues();

console.log(spotify)
  
  return <div onClick={
    () => {
      dispatch({
        type: "SET_Currently_Tracks",
        currently_playing_track: item,
    })
    }
  }
   className="h-[10rem] border-[2px] border-gray-600 rounded-lg p-3 w-[8rem]" >
      <div className=" cursor-pointer flex gap-2 flex-col items-center rounded-lg ">
        <div className="">
          <img className="object-cover object-top w-full rounded-md h-full "
          alt=""  src={item?.imageUrl} />
        </div>
        <div>
          <h3 className="font-semibold text-[0.7rem]">{(item?.title).substring(0,15)}</h3>
        </div>
      </div>
  </div>
}




