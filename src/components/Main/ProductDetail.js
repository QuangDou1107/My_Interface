import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import macbookData from "../../data/macbook";
import home from "../../assets/home.png"
import baggg from "../../assets/home.png"


function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = macbookData.find((item) => item.id === parseInt(id));
    const [memory, setMemory] = useState("16GB unified memory");
    const [storage, setStorage] = useState("512GB SSD storage");
    const [powerAdapter, setPowerAdapter] = useState("35W Dual USB-C Port Compact Power Adapter");

    const [processor, setProcessor] = useState("Apple M2 chip with 8-core CPU, 8-core GPU, 16-core Neural Engine");
    const [software, setSoftware] = useState([]);

    const [finalCutPro, setFinalCutPro] = useState(false);
    const [logicPro, setLogicPro] = useState(true);


    if (!product) {
        return <h2 className="text-center text-red-500">Sản phẩm không tồn tại!</h2>;
    }

    return (
        <div>
            <div className="pr-[100px] pl-[120px] py-12">
                <div className="text-sm flex gap-2 mb-6">
                    <img src={home}></img>
                    &gt;
                    <a className="hover:text-gray-700">MacBook</a>
                    &gt;
                    <span className="text-black">{product.name}</span>
                </div>

                <div className="flex gap-10">
                    <div className=" w-[500px]">
                        <img src={product.image} alt={product.name} className="w-[500px] rounded-xl shadow-md" />
                        <p className="text-[#00B685] cursor-pointer text-sm text-center mt-5">View gallery</p>
                        <div className="mt-5 text-[#1D1D1F] text-sm leading-relaxed">
                            <li>Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine</li>
                            <li>{memory}</li>
                            <li>{storage}</li>
                            <li>13.6-inch Liquid Retina display with True Tone</li>
                            <li>1080p FaceTime HD camera</li>
                            <li>MagSafe 3 charging port</li>
                            <li>Two Thunderbolt / USB 4 ports</li>
                            <li>{powerAdapter}</li>
                            <li>Backlit Magic Keyboard with Touch ID - US English</li>
                        </div>
                    </div>

                    <div className="flex-1 pt-8">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <hr className="mt-10 my-10" />

                        <div className="grid  gap-10">


                            <div>
                                <h2 className="text-xl font-semibold">System on a Chip (Processor)</h2>
                                <div className="flex gap-4 mt-2">
                                    {["Apple M2 chip with 8-core CPU, 8-core GPU, 16-core ", "Apple M2 chip with 8-core CPU, 10-core GPU, 16-core +2,400,000đ"].map((option) => (
                                        <button
                                            key={option}
                                            className={`p-2 text-sm text-start border rounded w-full h-[80px] ${processor === option ? "border-green-500" : "border-gray-300"}`}
                                            onClick={() => setProcessor(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>

                                <h2 className="text-xl font-semibold mt-6">Memory</h2>
                                <div className="flex gap-4 mt-2 text-start">
                                    {["8GB unified memory ", "16GB unified memory ", "24GB unified memory "].map((option) => (
                                        <button
                                            key={option}
                                            className={`p-2 border rounded w-full text-sm h-[80px] ${memory === option ? "border-green-500" : "border-gray-300"}`}
                                            onClick={() => setMemory(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}

                                </div>

                                <h2 className="text-xl font-semibold mt-6">Storage</h2>
                                <div className="flex gap-4 mt-2">
                                    {["256GB SSD storage -2,400,000đ", "512GB SSD storage ", "1TB SSD storage +2,400,000đ", "2TB SSD storage +2,400,000đ"].map((option) => (
                                        <button
                                            key={option}
                                            className={`p-2 border rounded w-full text-sm h-[80px] ${storage === option ? "border-green-500" : "border-gray-300"}`}
                                            onClick={() => setStorage(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>

                                <h2 className="text-xl font-semibold mt-6">Power Adapter</h2>
                                <div className="flex gap-4 mt-2">
                                    {["30W USB-C Power Adapter -2,400,000đ", "35W Dual USB-C Port Compact Power Adapter", "70W USB-C Power Adapter +2,400,000đ"].map((option) => (
                                        <button
                                            key={option}
                                            className={`p-2 border rounded w-full text-sm h-[80px] ${powerAdapter === option ? "border-green-500" : "border-gray-300"}`}
                                            onClick={() => setPowerAdapter(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>

                                

                                <div className="mt-6">
                                    <h2 className="text-xl font-semibold mb-4">Pre-Installed Software</h2>
                                    <div className="flex gap-4">
                                        {/* Final Cut Pro */}
                                        <div
                                            className={`flex justify-between items-center border rounded-lg p-4 w-1/2 cursor-pointer transition duration-300 ${finalCutPro ? " border-green-500" : "bg-gray-100 border-gray-300"}`}
                                            onClick={() => setFinalCutPro(prev => !prev)}
                                        >
                                            <div>
                                                <p className="font-semibold text-gray-900">Final Cut Pro</p>
                                                <p className="text-gray-500 text-sm">--</p>
                                            </div>
                                            <button
                                                className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${finalCutPro ? "bg-green-500" : "bg-gray-300"}`}
                                            >
                                                <div
                                                    className={`bg-white w-5 h-5 rounded-full shadow-md transform ${finalCutPro ? "translate-x-6" : ""} transition duration-300`}
                                                ></div>
                                            </button>
                                        </div>

                                        {/* Logic Pro */}
                                        <div
                                            className={`flex justify-between items-center border rounded-lg p-4 w-1/2 cursor-pointer transition duration-300 ${logicPro ? "border-green-500" : "bg-gray-100 border-gray-300"}`}
                                            onClick={() => setLogicPro(prev => !prev)}
                                        >
                                            <div>
                                                <p className="font-semibold text-gray-900">Logic Pro</p>
                                                <p className="text-gray-500 text-sm">+ 2,400,000đ</p>
                                            </div>
                                            <button
                                                className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${logicPro ? "bg-green-500" : "bg-gray-300"}`}
                                            >
                                                <div
                                                    className={`bg-white w-5 h-5 rounded-full shadow-md transform ${logicPro ? "translate-x-6" : ""} transition duration-300`}
                                                ></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-[#F4F5F8]">
                <div className="h-[90px] px-[120px]">
                    <div className="py-6 flex justify-between">
                        <div className="flex gap-2">

                            <div>
                                <div className="flex items-center gap-2">
                                    <img src={baggg} className="w-4 h-4" alt="Home" />
                                    <div className="font-bold text-lg">Đến mua</div>
                                </div>


                                <div className="text-[#00B685]">Kiểm tra hàng còn</div>
                            </div>

                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="text-[30px] font-bold">{product.newPrice.toLocaleString("vi-VN")}₫</div>
                            <button className="w-[186px] h-[40px] border rounded-[100px] bg-[#00B685] text-white">
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
