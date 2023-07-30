import React, {useEffect, useState} from "react";
import {NavLink, useNavigate,} from "react-router-dom";
import {
    UserCircleIcon,
    CreditCardIcon,
    ArrowLeftOnRectangleIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/solid';
import {useDispatch, useSelector} from "react-redux";
import {logoutUserAction} from "../store/usersReducer";
import axios from "../api/axios";
import {getUser} from "../asyncActions/getUser";


const Header = () => {

    const [dropdown, setDropdown] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getUser())
    },[])

    const user = useSelector(state => state.users.currentUser);

    function clickDropDown(){
        setDropdown(!dropdown)
    }

    const handleLogout = async () => {
        setDropdown(!dropdown)
        await axios.post('/api/logout')
          .then(res => {
              dispatch(logoutUserAction())
          })
        navigate('/');
    }

    return (
        <div className="py-8">
            <nav className="relative z-50 flex justify-between">
                <div className="items-center md:gap-x-12">
                    <a aria-label="Home" href="/#">
                        <img className="h-12 w-auto" src="../images/logo.svg"/>
                    </a>
                </div>
                <div className="flex items-center md:gap-x-12">
                    <div className="hidden md:flex md:gap-x-6 ">
                        <NavLink to="/" className="menuItem inline-block px-2 py-1 text-sm text-slate-700 hover:text-slate-900 hover:font-bold">Jobholders</NavLink>
                        <NavLink to="/offers" className="menuItem inline-block px-2 py-1 text-sm text-slate-700 hover:text-slate-900 hover:font-bold">Customers</NavLink>
                    </div>
                </div>
                <div className="flex items-center gap-x-2 md:gap-x-2">
                    <div className="md:block">
                        <NavLink to="/jobholder/about" className="menuItem inline-block px-2 py-1 text-sm text-slate-700 hover:text-slate-900 hover:font-bold">Invest your time</NavLink>
                        <NavLink to="/jobholder/create" className="menuItem inline-block px-2 py-1 text-sm text-slate-700 hover:text-slate-900 hover:font-bold">create</NavLink>
                    </div>
                    <div className="relative inline-block text-left">
                        <div className="flex items-center gap-x-2 md:gap-x-2">
                            <button className="
                                group
                                inline-flex
                                items-center
                                justify-center
                                rounded-full
                                rounded-2xl
                                border
                                border-solid
                                py-1
                                px-2
                                text-sm
                                font-semibold
                                focus:outline-none
                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                hover:text-slate-100
                                hover:border-gray-500
                                active:text-blue-100
                                focus-visible:outline-blue-600"
                                    id="menu-button" aria-expanded="true" aria-haspopup="true"
                                    onClick={clickDropDown}>
                                <img className="ml-1 max-h-3" src="../images/menu.svg"/>
                                <img className="ml-3 h-8 w-8 rounded-full ring-2 ring-white"
                                     src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </button>

                        </div>

                        <div className="transition ease-out duration-100">
                            <div className={(dropdown === false)?'hidden' : 'transform z-10'}>
                                {user ? (
                                  <div
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                      <div className="py-1" role="none">
                                          <a href="#" className="flex text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                             tabIndex="-1" id="menu-item-0"><Cog6ToothIcon className="h-5 w-5 mr-1" />Settings.</a>
                                          <a href="#" className="flex text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                             tabIndex="-1" id="menu-item-1"><UserCircleIcon className="h-5 w-5 mr-1" />Profile</a>
                                          <a href="#" className="flex text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                             tabIndex="-1" id="menu-item-1"><CreditCardIcon className="h-5 w-5 mr-1" />Payment.</a>
                                      </div>
                                      <div className="py-1" role="none">
                                          <button onClick={handleLogout} className="flex text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                                  tabIndex="-1" id="menu-item-2"><ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />Exit</button>
                                      </div>
                                  </div>
                                ) : (
                                  <div
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                      <div className="py-1" role="none">
                                          <a href="/login" className="flex text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                             tabIndex="-1" id="menu-item-0"><ArrowLeftOnRectangleIcon className="h-5 w-5 mr-1" />Log in</a>
                                          <a href="/registration" className="flex text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                             tabIndex="-1" id="menu-item-1"><UserCircleIcon className="h-5 w-5 mr-1" />Registration</a>
                                      </div>
                                  </div>)}
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header
