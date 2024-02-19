import React, { useEffect, useState } from 'react'
import SideBar from '../Sections/SideBar'
import Header from '../Sections/Header';
import { useStateValues } from '../utils/Provider';

export default function Category() {

    let [categories, setCategories] = useState([]);
    const [{ spotify ,searchClick }, dispatch] = useStateValues();


   
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

    useEffect((
        () => {

            spotify?.getCategories()
                .then((category) => {
                    setCategories(category.categories.items)
                }).catch(() => { console.log("error") })

            dispatch({
                type: "SET_HAMBURGER",
                hamburger: false,
            });
        }
    ), [dispatch,spotify])

    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <div>
                <div className='sm:ml-[35vw] xl:ml-[20rem]'>
                    <Header /></div>
                <SideBar />
            </div>
            <div onClick={handleClicks}
                className=' bg-black absolute  h-[90vh] sm:w-[64vw] overflow-x-hidden  sm:top-0 sm:left-[35vw] xl:left-[26rem]'>

                <div className='flex  gap-5 w-full justify-center h-[70vh] overflow-y-auto mt-[7rem] mx-auto xl:p-4  flex-wrap'>
                    {
                        categories.map((category) => {
                            return (<div key={category.id}
                                className='flex flex-col  gap-2 justify-center items-center'>
                                <div>
                                    <img src={category.icons[0].url}
                                        alt='' className='h-[5rem] rounded-lg w-[8rem]' />
                                </div>
                                <div className='text-sm font-semibold'>{category.name}</div>
                            </div>)
                        })
                    }

                </div>
            </div>
        </div>

    )
}
