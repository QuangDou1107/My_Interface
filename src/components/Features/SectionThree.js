import imgIphone15 from "../../assets/image_17.png"
import image1 from "../../assets/watch_1.png"
import image2 from "../../assets/watch_2.png"
import image3 from "../../assets/watch_3.png"
import image4 from "../../assets/watch_4.png"
import ip15 from "../../assets/image_5.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function SectionThree() {
    return (
        <div className="px-14 pt-5 pb-12 bg-[#F4F5F8]">
            <div className=" bg-[#F4F5F8] rounded-[12px] flex ">
                <div className="flex bg-white rounded-[12px] ">
                    <div>
                        <img src={imgIphone15} alt="IP15" className="w-[277px] h-[334px] p-[40px]"></img>
                        <ul className="text-start ml-10">
                            <li>6.1 inch, 2X, FHD+</li>
                            <li>50.0 MP + 12.0 MP + 10.0 MP</li>
                        </ul>
                    </div>
                    <div className="ml-[30px] mt-10">
                        <h1 class="text-xl font-bold text-start">iPhone 15 Pro Max</h1>
                        <div class="flex items-center gap-2 mt-2">

                            <p class="text-red-500 text-2xl font-bold">31.000.000đ</p>

                            <p class="text-gray-400 line-through text-base">35.000.000đ</p>
                        </div>
                        <div>
                            <p className="text-start">Color Pink</p>
                            <div className="flex  space-x-2 mb-4 my-6">
                                <div className="rounded-full w-9 h-9 bg-[#D5DDE0] transition hover:bg-[#92b2ed]"></div>
                                <div className="rounded-full w-9 h-9 bg-[#EDD4D7] transition hover:bg-[#92b2ed]"></div>
                                <div className="rounded-full w-9 h-9 bg-[#EEE9CC] transition hover:bg-[#92b2ed]"></div>
                                <div className="rounded-full w-9 h-9 bg-[#D2DDCD] transition hover:bg-[#92b2ed]"></div>
                                <div className="rounded-full w-9 h-9 bg-[#515558] transition hover:bg-[#92b2ed]"></div>
                            </div>
                        </div>
                        <div class="p-4 border rounded-md mr-[20px]">
                            <p class="text-lg font-semibold mb-2 text-start">Storage</p>
                            <div class="flex gap-4">

                                <div class="text-center border rounded-lg p-2">
                                    <p class="text-sm font-medium">128GB</p>
                                    <p class="text-green-500 font-bold">24,000,000đ</p>
                                </div>

                                <div class="text-center border rounded-lg p-2">
                                    <p class="text-sm font-medium">256GB</p>
                                    <p class="text-green-500 font-bold">28,000,000đ</p>
                                </div>

                                <div class="text-center border rounded-lg p-2">
                                    <p class="text-sm font-medium">512GB</p>
                                    <p class="text-green-500 font-bold">32,000,000đ</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-5 bg-[#00B685]  text-white text-lg font-semibold py-3 w-[350px] rounded-full hover:bg-green-600 transition-all">
                            Mua ngay
                        </button>


                    </div>
                </div>
                <div className="bg-[#F4F5F8]">
                    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md ml-[20px]">
                        {/* Phần bên trái */}
                        <div className="flex flex-col gap-4 m-4">
                            <p className="text-gray-800 text-xl font-bold text-start">
                                Thương hiệu<br />Smartwatch nổi tiếng
                            </p>
                            <div className="bg-gradient-to-b from-red-500 to-yellow-500 text-white text-lg font-semibold py-1 px-3 rounded-full hover:from-red-600 hover:to-yellow-600 cursor-pointer">
                                Apple Watch giảm giá 5%
                            </div>
                        </div>

                        {/* Phần bên phải */}
                        <div className="flex relative -space-x-10">
                            <img
                                src={image1}
                                alt="Smartwatch 1"
                                className="z-10 w-28 h-28 rounded-md object-cover"
                            />
                            <img
                                src={image2}

                                alt="Smartwatch 2"
                                className="z-20 w-28 h-28 rounded-md object-cover"
                            />
                            <img
                                src={image3}

                                alt="Smartwatch 3"
                                className="z-30 w-28 h-28 rounded-md object-cover "
                            />
                            <img
                                src={image4}

                                alt="Smartwatch 4"
                                className="z-40 w-28 h-28 rounded-md object-cover  "
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl h-[246px] shadow-md ml-[20px]">
                        {/* Header */}
                        <div className="flex justify-between px-[40px]  my-[20px]">
                            <div className="text-[20px] font-bold">
                                Mua kèm phụ kiện - Giảm thêm 5%
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="#" className="text-[#00B685] text-sm font-medium hover:underline">
                                    Xem toàn bộ phụ kiện
                                </a>
                                <MdKeyboardDoubleArrowRight className="text-[#00B685]"></MdKeyboardDoubleArrowRight>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex justify-between items-center pr-[40px]">
                            {/* Left Content */}
                            <div className="px-[40px]">
                                <p className="font-bold text-[16px] py-1">
                                    Ốp lưng Vải Tinh dệt Magsafe
                                </p>
                                <p className="text-[#E11447] font-bold text-lg text-start">1.590.000đ</p>
                                <p className="text-sm text-start text-[#7F7F7F] line-through py-2">
                                    1.990.000đ
                                </p>
                                <button className="bg-[#00B685] rounded-full mt-6 w-[211px] h-[40px] flex items-center justify-center hover:bg-[#009966] transition">
                                    <p className="text-white text-sm font-semibold ">Thêm vào giỏ</p>
                                </button>
                            </div>

                            {/* Right Content */}
                            <div className="relative">
                                <img src={ip15} alt="Product" className="w-auto h-[160px] object-contain" />
                                {/* Color Options */}
                                <div className="flex justify-between w-[192px] absolute bottom-5 left-10">
                                    <div className="w-6 h-6 rounded-full bg-[#8B5E6C] hover:border-[#00B685] border-2 border-transparent transition"></div>
                                    <div className="w-6 h-6 rounded-full bg-[#8E616F] hover:border-[#00B685] border-2 border-transparent transition"></div>
                                    <div className="w-6 h-6 rounded-full bg-[#EEE9CC] hover:border-[#00B685] border-2 border-transparent transition"></div>
                                    <div className="w-6 h-6 rounded-full bg-[#515558] hover:border-[#00B685] border-2 border-transparent transition"></div>
                                    <div className="w-6 h-6 rounded-full bg-[#515558] hover:border-[#00B685] border-2 border-transparent transition"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default SectionThree;