import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import newImg from "../../assets/new.png"
import newImg2 from "../../assets/new1.png"
import newImg3 from "../../assets/new2.png"
import { SlCalender } from "react-icons/sl";
import { FaClockRotateLeft } from "react-icons/fa6";

function New() {
    return (
        <div className="px-14 pt-4 pb-12 bg-[#F4F5F8]">
            <div className="bg-white rounded-[12px]">
                <div>
                    <p className="text-xl text-start font-bold text-black mt-2 ml-10 py-4">Tin tức công nghệ</p>
                </div>
                <div className="flex space-x-5 mx-10">
                    <div className="w-[480px] border rounded-lg overflow-hidden shadow-md p-5">
                        <img
                            src={newImg}
                            alt="New"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-xl font-bold text-black uppercase text-start">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className="flex items-center text-gray-500 mt-4">
                                <div className="flex items-center mr-4">
                                    <SlCalender className="w-5 h-5 text-gray-400 mr-1" />
                                    <p>Thứ Tư, 06/12/2023</p>
                                </div>
                                <div className="flex items-center">
                                    <FaClockRotateLeft className="w-5 h-5 text-gray-400 mr-1" />
                                    <p>16:36 (GMT+7)</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mt-4 text-start">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book.
                            </p>
                            <div className="flex items-center gap-2 mt-4">
                                <a
                                    href="#"
                                    className="text-[#00B685] text-sm font-medium hover:underline flex items-center"
                                >
                                    Chi tiết
                                </a>
                                <MdKeyboardDoubleArrowRight className="text-[#00B685] w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[480px] border rounded-lg overflow-hidden shadow-md p-5">
                        <img
                            src={newImg2}
                            alt="New"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-xl font-bold text-black uppercase text-start">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className="flex items-center text-gray-500 mt-4">
                                <div className="flex items-center mr-4">
                                    <SlCalender className="w-5 h-5 text-gray-400 mr-1" />
                                    <p>Thứ Tư, 06/12/2023</p>
                                </div>
                                <div className="flex items-center">
                                    <FaClockRotateLeft className="w-5 h-5 text-gray-400 mr-1" />
                                    <p>16:36 (GMT+7)</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mt-4 text-start">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book.
                            </p>
                            <div className="flex items-center gap-2 mt-4">
                                <a
                                    href="#"
                                    className="text-[#00B685] text-sm font-medium hover:underline flex items-center"
                                >
                                    Chi tiết
                                </a>
                                <MdKeyboardDoubleArrowRight className="text-[#00B685] w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[480px] border rounded-lg overflow-hidden shadow-md p-5">
                        <img
                            src={newImg3}
                            alt="New"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-2">
                            <p className="text-xl text-start font-bold text-black uppercase">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className="flex items-center text-gray-500 mt-4">
                                <div className="flex items-center mr-4">
                                    <SlCalender className="w-5 h-5 text-gray-400 mr-1" />
                                    <p>Thứ Tư, 06/12/2023</p>
                                </div>
                                <div className="flex items-center">
                                    <FaClockRotateLeft className="w-5 h-5 text-gray-400 mr-1" />
                                    <p>16:36 (GMT+7)</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mt-4 text-start">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book.
                            </p>
                            <div className="flex items-center gap-2 mt-4">
                                <a
                                    href="#"
                                    className="text-[#00B685] text-sm font-medium hover:underline flex items-center"
                                >
                                    Chi tiết
                                </a>
                                <MdKeyboardDoubleArrowRight className="text-[#00B685] w-4 h-4" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center items-center h-full py-5">
                    <div className="flex items-center gap-2">
                        <a
                            href="#"
                            className="text-[#00B685] text-sm font-medium hover:underline flex items-center"
                        >
                            Xem toàn bộ
                        </a>
                        <MdKeyboardDoubleArrowRight className="text-[#00B685] w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default New;