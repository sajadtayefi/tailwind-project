import { useState } from "react"
import "./index.css"
import { FaGoogle } from "react-icons/fa"
import { CgMenuGridO } from "react-icons/cg"
import { Link } from "react-router-dom"
import { RiVideoLine } from "react-icons/ri"
import { BsGem } from "react-icons/bs"
import { AiOutlineTeam } from "react-icons/ai"




export default function SingUp(props) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    const [showpass, setShowpass] = useState(false)



    const emailhandler = (e) => {
        setEmail(e.target.value)
    };
    const passhandler = (e) => {
        setPass(e.target.value)
    }
    const namehandler = (e) => {
        setName(e.target.value)
    }

    return (
        <body className=" bg-yello-100 h-full w-full  " >
            <div className="cotainer m-20  back ">

                <ul className=" text-sky-900  font-serif font-bold flex flex-row-reverse mx-10 p-6">

                    <li className="flex flex-row  m-10 items-center">
                        <span className=""> امکانات</span>
                        <CgMenuGridO className="h-5 w-5" />
                    </li >
                    <li className="m-5 flex flex-row items-center ">
                        <span> ویدئو آموزشی</span>
                        <RiVideoLine className="h-5 w-5" />
                    </li>
                    <li className="m-5 flex flex-row items-center">
                        <span>قیمت گذاری</span>
                        <BsGem className="m-1 h-5 w-5" />
                    </li>
                    <li className="m-5 flex flex-row items-center">
                        <span>همکاری با آژانس ها</span>
                        <AiOutlineTeam className="m-1 h-5 w-5" />
                    </li>
                    <li className="m-5 h-10 w-20 p-2 rounded-md  font-normal text-center justify-center
                     text-white bg-blue-500 flex flex-row self-center mr-auto
                     hover:bg-rose-500 transition-all delay-100 ease-in cursor-pointer
                     "><Link to="../">
                            <span>ورود  </span>
                        </Link>
                    </li>
                </ul>
                <div className="p-10 m-10 flex flex-col page ">
                    <input type="email"
                        className="p-2 m-2 rounded w-2/5 "
                        onChange={namehandler}
                        placeholder="نام و نام خانوادگی"
                        value={name}
                    />
                    <input type="email"
                        className="p-2 m-2 rounded w-2/5 "
                        onChange={emailhandler}
                        placeholder="ایمیل"
                        value={email}
                    />
                    <div className=" flex flex-row">
                        <input
                            className="p-2 m-2   rounded  w-1/6 "
                            placeholder="گذرواژه"
                            type="password"
                            onChange={passhandler}
                            value={pass}
                        />
                        <input
                            className="p-2 m-2 mx-24  rounded  w-1/6 "
                            placeholder="تکرار گذرواژه"
                            type="password"
                            onChange={passhandler}
                            value={pass}
                        />
                    </div>
                    <div className="flex flex-row font-serif">
                        <button
                            className=" bg-black m-2 p-2 rounded-md  w-20 justify-self-center text-white
                         hover:bg-rose-500 transition-all delay-100 ease-in
                         "
                        >
                            عضویت
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
                        <Link className="m-2 self-center mr-auto " to={"../"}>
                            <span className=" font-serif   ">
                                حساب کاربری دارم!
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </body>
    )
}