import { IoIosSearch } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import groupImage from '../../assets/gggg.png';
import { FaApple } from "react-icons/fa";

function NavigationMenu() {
    return (
        <>
            <div className="w = [100%] h = [40px] bg-blue-900 flex text-center justify-between ">
                <div className="flex w=[296px] h=[24px] ml-100px text-white">
                    <p className="text-sm p-1 mr-11">iStone for Education</p>
                    <p className="text-sm p-1">iStone for Enterprise</p>
                </div>
                <ul className="flex w=[207px] h=[24px] text-white items-center mr-100px space-x-4">
                    <li className="w-6 h-6 pt-1"><IoIosSearch /></li>
                    <li className="w-6 h-6 pt-1"><CgShoppingBag /></li>
                    <li className="w-6 h-6 pt-1"><FaRegUserCircle /></li>
                </ul>
            </div>
            <div className="w=[100%] h=[60px] bg-white flex justify-between ">
                <div className="w = [186px] h = [28px] flex space-x-6 p-2 ">
                    <img
                        src={groupImage}
                        alt="Group Logo"
                        className="w-114 h-6 ml-100px pt-1 "
                    />
                    <div className="border-l border-black h-6 mx-2"></div>
                    <FaApple className="w-6 h-6" />
                </div>
                {/* Menu chính */}
                <ul className="flex justify-center space-x-12 font-normal mr-100px pt-2 pb-3 text-[18px]">
                    <li><a href="/mac" className="hover:text-blue-400">Mac</a></li>
                    <li><a href="/" className="hover:text-blue-400">iPad</a></li>
                    <li><a href="/" className="hover:text-blue-400">iPhone</a></li>
                    <li><a href="/" className="hover:text-blue-400">Watch</a></li>
                    <li><a href="/" className="hover:text-blue-400">Máy In</a></li>
                    <li><a href="/" className="hover:text-blue-400">Phụ Kiện</a></li>
                    <li><a href="/" className="hover:text-blue-400">Hỗ Trợ</a></li>
                </ul>
                <ul className="flex w=[207px] h=[24px] text-black items-center mr-100px space-x-4 ">
                    <li className="w-6 h-6 pt-1"><IoIosSearch /></li>
                    <li className="w-6 h-6 pt-1"><CgShoppingBag /></li>
                    <li className="w-6 h-6 pt-1"><FaRegUserCircle /></li>
                </ul>
            </div>
        </>
    );
}
export default NavigationMenu;