import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import Spinner from "../components/Spinner";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { passwordStrength } from 'check-password-strength'
//import { useGeolocated } from "react-geolocated";
import { TbEyeClosed } from "react-icons/tb";
import { FaEye } from "react-icons/fa";



export default function Register() {

    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false)
    const [show, setShow] = useState(false)
    const [cshow, setCShow] = useState(false)

    const [formData, setformData] = useState({
        name: "",
        email: "",
        cnfrm: "",
        phoneNumber: "",
        password: "",
    })

    /*  const { coords } =
          useGeolocated({
              positionOptions: {
                  enableHighAccuracy: false,
              },
              userDecisionTimeout: 5000,
          });
          */
    const changeHandler = (e) => {

        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = async (e) => {
        setSpinner(true);
        e.preventDefault();

        const response = passwordStrength(formData.password).value
        if (response !== "Strong") {
            toast.error("Weak Password");
            setSpinner(false)
            return;
        }
        if (formData.password !== formData.cnfrm) {
            toast.error("Password doesn't match");
            setSpinner(false)
            return;
        }
        if (formData?.phoneNumber?.length < 10 || formData?.phoneNumber?.length > 10) {
            toast.error("Invalid Phone");
            setSpinner(false)
            return;
        }
        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/register`, {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phoneNumber: formData.phoneNumber,
            location: formData.location,

        });

        if (res && res.data.success) {
            toast.success("Sign Up Successfully");
            navigate("/signin");
        }
        else {
            toast.error(res.data.message);
        }
        setSpinner(false)
    }


    return (<div className="overflow-x-hidden h-[100vh] ">

        <div className="relative flex flex-col justify-center items-center xs:w-[60vw] w-[90vw] md:w-4/12 md:py-[5%]  mx-auto ">
            <div className="w-full p-6 bg-transparent rounded-md shadow-xl shadow-gray-600/40  lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase ">
                    SignUP
                </h1>
                <form onSubmit={handleSubmit}
                    className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="name"
                            onChange={changeHandler}
                            value={formData.name}
                            name="name"

                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            onChange={changeHandler}
                            value={formData.email}
                            name="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700  border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone
                        </label>
                        <input
                            type="number"
                            placeholder="Phone"
                            value={formData.phoneNumber}
                            onChange={changeHandler}
                            name="phoneNumber"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            placeholder="password"
                            value={formData.password}
                            onChange={changeHandler}
                            name="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <div className='mt-[-1.7rem] xs:ml-[45vw] lg:ml-[22vw]  ml-[64vw]' onClick={() => { setShow(!show) }}>
                            {show ? <TbEyeClosed size={20} /> : <FaEye size={20} />}
                        </div>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="cnfrm"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            type={cshow ? "text" : "password"}
                            placeholder="Confirm"
                            value={formData.cnfrm}
                            onChange={changeHandler}
                            name="cnfrm"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <div className='mt-[-1.7rem] xs:ml-[45vw] lg:ml-[22vw]  ml-[64vw]' onClick={() => { setCShow(!cshow) }}>
                            {cshow ? <TbEyeClosed size={20} /> : <FaEye size={20} />}
                        </div>

                    </div>
                    <div className="mt-6">

                        <button className="w-full h-[3rem] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            {!spinner ? ("Create User") : (<Spinner className='h-[0.2rem] w-[0.2rem]' />)}
                        </button>
                    </div>
                </form>
                <div className="flex gap-2 items-center text-gray-400 text-[1rem] my-5">
                    <hr className="w-[10rem] h-[2px] bg-gray-300" />
                    or
                    <hr className="w-[10rem] h-[2px] bg-gray-300" />
                </div>

                <p className="mt-8 text-[13px] font-semibold text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link to='/login'
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>

        </div>

    </div>)

}
