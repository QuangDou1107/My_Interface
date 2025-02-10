import iphone15Img from "../../assets/mac.png"
import iphone16Img from "../../assets/mac1.png"
import { LuChevronsUpDown } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";
import { useNavigate } from "react-router-dom";
import macbookData from "../../data/macbook";


function SectionFive() {
    const navigate = useNavigate(); // Hook điều hướng
    return (
        <div className="px-14 pt-6 pb-12 bg-[#F4F5F8]">
            <div className="bg-white rounded-[12px]">
                <div className="p-4">
                    {/* Phần tiêu đề */}
                    <div className="flex">
                        <p className="text-xl font-bold text-black mt-2 ml-9">Macbook. </p>
                        <p className="text-xl font-bold text-gray-400 pl-2 mt-2 ">
                            Hiệu năng tốt, kiểu dáng thời thượng
                        </p>
                    </div>

                    {/* Phần danh sách các phiên bản */}
                    <div className="flex items-center justify-between mt-3 ml-9">
                        <div className="flex gap-4">
                            <div className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100">
                                Macbook Air
                            </div>
                            <div className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100">
                                Macbook Pro
                            </div>
                            <div className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100">
                                M1
                            </div>
                        </div>

                        <div className="mr-9 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-[20px] text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100">
                            <div>Bán chạy nhất</div>
                            <LuChevronsUpDown className="text-gray-500 w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Danh sách sản phẩm */}
                <div className="flex mt-4 pb-8 mx-3">
                    {macbookData.map((macbook) => (
                        <div
                            key={macbook.id}
                            className="bg-white shadow-lg rounded-lg p-0 w-[304px] h-auto flex flex-col items-center relative mx-2"
                            onClick={() => navigate(`/product/${macbook.id}`)} // Click vào để chuyển trang
                        >
                            {/* Nhãn "New" */}
                            <p className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-yellow-500 text-sm font-bold absolute top-8 left-8">
                                New
                            </p>

                            {/* Hình ảnh sản phẩm */}
                            <img
                                src={macbook.image}
                                alt={macbook.name}
                                className="w-full h-[180px] object-contain mt-10"
                            />

                            {/* Chọn màu */}
                            <div className="flex justify-center space-x-2 mb-4 my-6">
                                {macbook.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="rounded-full w-4 h-4 transition hover:bg-[#92b2ed]"
                                        style={{ backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>

                            {/* Tên sản phẩm */}
                            <p className="text-lg font-semibold text-center">{macbook.name}</p>

                            {/* Giá sản phẩm */}
                            <div className="flex items-center justify-center space-x-2 my-4">
                                <div className="text-gray-500 line-through text-sm">{macbook.oldPrice.toLocaleString("vi-VN")}đ</div>
                                <div className="text-blue-500 font-bold text-xl">{macbook.newPrice.toLocaleString("vi-VN")}đ</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Xem thêm */}
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

export default SectionFive;
