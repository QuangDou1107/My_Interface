import iphone15Img from "../../assets/watch.png"
import iphone16Img from "../../assets/watch1.png"
import { LuChevronsUpDown } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function SectionSeven() {
    return (
        <div className="px-14 pt-6 pb-12 bg-[#F4F5F8]">
            <div className="bg-white  rounded-[12px]">
                <div className="p-4">
                    {/* Phần tiêu đề */}
                    <div className="flex">
                        <p className="text-xl font-bold text-black mt-2 ml-9">Watch. </p>
                        <p className="text-xl font-bold text-gray-400 pl-2 mt-2 ">Đa tiện ích, kiểu dáng hợp thời trang</p>
                    </div>

                    {/* Phần danh sách các phiên bản */}
                    <div className="flex items-center justify-between mt-3 ml-9">
                        {/* Các tùy chọn phiên bản */}
                        <div className="flex gap-4">
                            <div className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100">
                            Watch Air
                            </div>
                            <div className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100">
                            Watch Pro
                            </div>
                            <div className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100">
                            Watch Gen
                            </div>
                        </div>

                        {/* Tùy chọn "Bán chạy nhất" */}
                        <div className="mr-9 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-[20px] text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100">
                            <div>Bán chạy nhất</div>
                            <LuChevronsUpDown className="text-gray-500 w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/*Danh sach san pham*/}

                <div className="flex mt-4 pb-8 mx-3">
                    <div className="bg-white shadow-lg rounded-lg p-0 w-[304px] h-auto flex flex-col items-center relative  ml-10">
                        {/* Bán chạy */}
                        <button className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#3C3C432E] w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-10 hover:bg-gray-300 transition">
                            &#10094;
                        </button>
                        <p className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-yellow-500 text-sm font-bold absolute top-8 left-8">
                            New
                        </p>

                        {/* Hình ảnh */}
                        <img
                            src={iphone16Img}
                            alt="Iphone"
                            className="w-full h-[180px] object-contain mt-10"
                        />

                        {/* Chọn màu */}
                        <div className="flex justify-center space-x-2 mb-4 my-6">
                            <div className="rounded-full w-4 h-4 bg-[#D5DDE0] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EDD4D7] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EEE9CC] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#D2DDCD] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#515558] transition hover:bg-[#92b2ed]"></div>
                        </div>

                        {/* Tên sản phẩm */}
                        <p className="text-lg font-semibold text-center ">
                        Apple Watch 9
                        </p>

                        {/* Giá sản phẩm */}
                        <div className="flex items-center justify-center space-x-2 my-4">
                            <div className="text-gray-500 line-through text-sm">19.429.000đ</div>
                            <div className="text-blue-500 font-bold text-xl ">15.429.000đ</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-0 w-[304px] h-auto flex flex-col items-center relative  ">
                        {/* Bán chạy */}
                        <p className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-yellow-500 text-sm font-bold absolute top-8 left-8">
                            New
                        </p>

                        {/* Hình ảnh */}
                        <img
                            src={iphone15Img}
                            alt="Iphone"
                            className="w-full h-[180px] object-contain mt-10"
                        />

                        {/* Chọn màu */}
                        <div className="flex justify-center space-x-2 mb-4 my-6">
                            <div className="rounded-full w-4 h-4 bg-[#D5DDE0] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EDD4D7] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EEE9CC] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#D2DDCD] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#515558] transition hover:bg-[#92b2ed]"></div>
                        </div>

                        {/* Tên sản phẩm */}
                        <p className="text-lg font-semibold text-center ">
                        Apple Watch 9
                        </p>

                        {/* Giá sản phẩm */}
                        <div className="flex items-center justify-center space-x-2 my-4">
                            <div className="text-gray-500 line-through text-sm">19.429.000đ</div>
                            <div className="text-blue-500 font-bold text-xl ">15.429.000đ</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-0 w-[304px] h-auto flex flex-col items-center relative ">
                        {/* Bán chạy */}
                        <p className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-yellow-500 text-sm font-bold absolute top-8 left-8">
                            New
                        </p>

                        {/* Hình ảnh */}
                        <img
                            src={iphone16Img}
                            alt="Iphone"
                            className="w-full h-[180px] object-contain mt-10"
                        />

                        {/* Chọn màu */}
                        <div className="flex justify-center space-x-2 mb-4 my-6">
                            <div className="rounded-full w-4 h-4 bg-[#D5DDE0] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EDD4D7] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EEE9CC] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#D2DDCD] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#515558] transition hover:bg-[#92b2ed]"></div>
                        </div>

                        {/* Tên sản phẩm */}
                        <p className="text-lg font-semibold text-center ">
                        Apple Watch 9
                        </p>

                        {/* Giá sản phẩm */}
                        <div className="flex items-center justify-center space-x-2 my-4">
                            <div className="text-gray-500 line-through text-sm">19.429.000đ</div>
                            <div className="text-blue-500 font-bold text-xl ">15.429.000đ</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-0 w-[304px] h-auto flex flex-col items-center relative">
                        {/* Bán chạy */}
                        <p className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-yellow-500 text-sm font-bold absolute top-8 left-8">
                            New
                        </p>

                        {/* Hình ảnh */}
                        <img
                            src={iphone15Img}
                            alt="Iphone"
                            className="w-full h-[180px] object-contain mt-10"
                        />

                        {/* Chọn màu */}
                        <div className="flex justify-center space-x-2 mb-4 my-6">
                            <div className="rounded-full w-4 h-4 bg-[#D5DDE0] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EDD4D7] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EEE9CC] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#D2DDCD] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#515558] transition hover:bg-[#92b2ed]"></div>
                        </div>

                        {/* Tên sản phẩm */}
                        <p className="text-lg font-semibold text-center ">
                        Apple Watch 9
                        </p>

                        {/* Giá sản phẩm */}
                        <div className="flex items-center justify-center space-x-2 my-4">
                            <div className="text-gray-500 line-through text-sm">19.429.000đ</div>
                            <div className="text-blue-500 font-bold text-xl ">15.429.000đ</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-0 w-[304px] h-auto flex flex-col items-center relative mr-10">
                        {/* Nút mũi tên phải */}
                        <button className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#3C3C432E] w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-10 hover:bg-gray-300 transition">
                            &#10095;
                        </button>
                        {/* Bán chạy */}
                        <p className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-yellow-500 text-sm font-bold absolute top-8 left-8">
                            New
                        </p>

                        {/* Hình ảnh */}
                        <img
                            src={iphone16Img}
                            alt="Iphone"
                            className="w-full h-[180px] object-contain mt-10"
                        />

                        {/* Chọn màu */}
                        <div className="flex justify-center space-x-2 mb-4 my-6">
                            <div className="rounded-full w-4 h-4 bg-[#D5DDE0] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EDD4D7] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#EEE9CC] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#D2DDCD] transition hover:bg-[#92b2ed]"></div>
                            <div className="rounded-full w-4 h-4 bg-[#515558] transition hover:bg-[#92b2ed]"></div>
                        </div>

                        {/* Tên sản phẩm */}
                        <p className="text-lg font-semibold text-center ">
                        Apple Watch 9
                        </p>

                        {/* Giá sản phẩm */}
                        <div className="flex items-center justify-center space-x-2 my-4">
                            <div className="text-gray-500 line-through text-sm">19.429.000đ</div>
                            <div className="text-blue-500 font-bold text-xl ">15.429.000đ</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-full pb-5">
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
export default SectionSeven;