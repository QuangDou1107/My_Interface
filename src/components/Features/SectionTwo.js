import { AiTwotoneFire } from "react-icons/ai";
import iphone15Img from "../../assets/iphone15.png"
import iphone16Img from "../../assets/iphone16.png"
function SectionTwo() {
    return (
        <div className="px-14 pt-12 pb-12 bg-[#F4F5F8]">
            <div className=" bg-white rounded-[12px]">
                <div className="flex justify-between items-center w-full px-8 mx-2 pt-8">
                    {/* Phần tiêu đề */}
                    <div className="flex items-center ">
                        <div className="text-[30px] font-bold">Deal sốc mua ngay</div>
                        <AiTwotoneFire className="w-8 h-8 ml-2"
                            style={{
                                fill: "url(#fireGradient)", // Áp dụng gradient
                            }} />
                    </div>
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FF190A" /> {/* Màu đỏ cam ở trên */}
                                <stop offset="100%" stopColor="#FFF500" /> {/* Màu vàng ở dưới */}
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Phần thời gian */}
                    <div className="flex items-center">
                        <div className="text-[20px]">Chương trình kết thúc trong</div>
                        <div className="flex items-center space-x-2 ml-4 mr-4">
                            <div className="text-base uppercase w-[72px] h-[72px] bg-primary rounded-[12px] flex flex-col items-center justify-center text-white">
                                15<br />ngày
                            </div>
                            <div className="text-2xl">:</div>
                            <div className="text-base uppercase w-[72px] h-[72px] bg-primary rounded-[12px] flex flex-col items-center justify-center text-white">
                                15<br />giờ
                            </div>
                            <div className="text-2xl">:</div>
                            <div className="text-base uppercase w-[72px] h-[72px] bg-primary rounded-[12px] flex flex-col items-center justify-center text-white">
                                15<br />phút
                            </div>
                            <div className="text-2xl">:</div>
                            <div className="text-base uppercase w-[72px] h-[72px] bg-primary rounded-[12px] flex flex-col items-center justify-center text-white">
                                15<br />giây
                            </div>
                        </div>
                    </div>
                </div>


                {/*Danh sach san pham*/}

                <div className="flex mt-8 pb-8">


                    <div className="bg-white shadow-lg rounded-lg p-0 w-[304px] h-auto flex flex-col items-center relative  ml-10">
                        {/* Bán chạy */}
                        <button className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#3C3C432E] w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-10 hover:bg-gray-300 transition">
                            &#10094; 
                        </button>
                        <p className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-yellow-500 text-sm font-bold absolute top-8 left-8">
                            Bán chạy
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
                            iPhone 15 Pro Max 256GB
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
                            Bán chạy
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
                            iPhone 15 Pro Max 256GB
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
                            Bán chạy
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
                            iPhone 15 Pro Max 256GB
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
                            Bán chạy
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
                            iPhone 15 Pro Max 256GB
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
                            Bán chạy
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
                            iPhone 15 Pro Max 256GB
                        </p>

                        {/* Giá sản phẩm */}
                        <div className="flex items-center justify-center space-x-2 my-4">
                            <div className="text-gray-500 line-through text-sm">19.429.000đ</div>
                            <div className="text-blue-500 font-bold text-xl ">15.429.000đ</div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}
export default SectionTwo;