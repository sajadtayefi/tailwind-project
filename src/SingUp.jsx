import { useState } from "react"
import "./index.css"
import { FaGoogle } from "react-icons/fa"
import { Link, useNavigate, } from "react-router-dom"
import picture from "./picture/background.png"
import otaghak from "./picture/icon/image (9) 1.png"
import nartab from "./picture/icon/image (7) 1.png"
import topforosh from "./picture/icon/image (2) 1.png"
import ninighel from "./picture/icon/image (1) 1.png"
import twonabsh from "./picture/icon/image 1.png"
import menu from "./picture/icon/fi-rr-grid 2.png"
import video from "./picture/icon/Vector.png"
import coocki from "./picture/icon/fi-rr-cookie 2.png"
import gem from "./picture/icon/Vector (1).png"



export default function SingUp(props) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [pass2 ,setPass2]=useState("")
    const [user, setUser]=useState("")
    const [showpass, setShowpass] = useState(false)
    const navigate = useNavigate();


    const emailhandler = (e) => {
        setEmail(e.target.value)
    };
    const userhandler = (e) => {
        setUser(e.target.value)
    };
    const passhandler = (e) => {
        setPass(e.target.value)
    }
    const pass2handler = (e) => {
        setPass2(e.target.value)
    }
    const backbtn = () => {
        navigate("../")
    }

    return (

        <div className="container mx-auto m-10 back ">

            <ul className=" text-sky-900  font-serif font-bold flex flex-row-reverse mx-10 p-6">

                <li className="m-2  flex flex-row  items-center">
                    <span className="m-2"> امکانات</span>
                    <img src={menu} alt="menu" />
                </li >
                <li className="m-2 flex flex-row items-center ">
                    <span className="m-2"> ویدئو آموزشی</span>
                    <img src={video} alt="video" />
                </li>
                <li className="m-2 flex flex-row items-center">
                    <span className="m-2">قیمت گذاری</span>
                    <img src={gem} alt="coocki" />
                </li>
                <li className="m-2 flex flex-row items-center">
                    <span>همکاری با آژانس ها</span>
                    <img src={coocki} alt="coocki" />
                </li>
                <li className="rounded-md  font-normal text-center justify-center
                     text-white   self-center mr-auto
                     "> <button className="bg-blue-500 p-2 m-2 rounded-md  w-20 justify-self-center text-white
                     hover:bg-rose-500 transition-all delay-100 ease-in" onClick={backbtn}>
                        ورود
                    </button>
                </li>
            </ul>
            <form className="flex flex-row ">
                <div className="flex flex-col  w-2/5 ">
                    <div className=" self-center m-10" >
                        <img src={picture} alt="picture" />
                    </div>
                    <h5 className="self-center text-blue-900 font-bold font-serif mt-16"> بیزنس‌های بزرگی از سراسر ایران سرافراز</h5>
                    <div className="flex flex-row m-10 w-full">
                        <div className="w-full">
                            <img src={otaghak} alt="otaghak" />
                        </div>
                        <div className="w-full" >
                            <img src={nartab} alt="nartab" />
                        </div>
                        <div className="w-full">
                            <img src={topforosh} alt="topforosh" />
                        </div>
                        <div className="w-full">
                            <img src={ninighel} alt="topforosh" />
                        </div>
                        <div className="w-full">
                            <img src={twonabsh} alt="topforosh" />
                        </div>
                    </div>
                </div>
                <div className="m-10 flex flex-col page w-3/5  self-center">
                    <div className="flex flex-col " >
                        <input type="email"
                            className="p-2 m-2  rounded w-4/5 "
                            onChange={userhandler}
                            placeholder="نام و نام خانوادگی"
                            value={user}
                        />
                        <input type="email"
                            className="p-2 m-2 rounded w-4/5 "
                            onChange={emailhandler}
                            placeholder="ایمیل"
                            value={email}
                        />
                        <div className="flex flex-row w-10/12">
                            <input
                                className="p-2 m-2    rounded  w-3/4 "
                                placeholder="گذرواژه"
                                type="password"
                                onChange={passhandler}
                                value={pass}
                            />
                            <input
                                className="p-2 m-2 mx-5  rounded  w-3/4 "
                                placeholder="تکرار گذرواژه"
                                type="password"
                                onChange={pass2handler}
                                value={pass2}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row font-serif">
                        <button
                            className=" bg-blue-500 m-2 p-2 rounded-md  w-20 justify-self-center text-white
                         hover:bg-rose-500 transition-all delay-100 ease-in
                         "
                        >
                            ورود
                        </button>
                        <button className="bg-black m-2
                         flex flex-row  items-center
                         w-40 rounded-md h-10 
                        text-white 
                        hover:bg-rose-500 transition-all delay-100  ease-in
                         "
                        >
                            <span className=" m-2  "> حساب گوگل </span>
                            <FaGoogle className="m-2 h-6  flex-1" />
                        </button>
                        <Link className=" font-serif self-center   w-full " to={"../"}>
                            <span className=" mr-96">
                                حساب کاربری دارم!
                            </span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}