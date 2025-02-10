import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { AiOutlineFileProtect } from "react-icons/ai";
import QC1 from '../../assets/qc1.png';
import QC2 from '../../assets/qc3.png';
import QC3 from '../../assets/qc2.png';
import { Link } from "react-router-dom";


function SectionOne() {
    return (
        <div className="bg-[#F4F5F8]">
            <div className="px-14 pt-12 pb-12">
                <div className="flex justify-between mx-8 my-3">
                    <div className="flex gap-3">
                        <CiDeliveryTruck className="h-8 w-8"></CiDeliveryTruck>
                        <div className="gap-3">
                            <div className="font-bold text-start uppercase">Miễn phí vẫn chuyển</div>
                            <div>Cho tất cả đơn trên 15 triệu VNĐ</div>
                        </div>
                    </div>
                    <div className="h-[50px] border"></div>
                    <div className="flex gap-3">
                        <MdOutlinePayments className="h-8 w-8"></MdOutlinePayments>
                        <div className="gap-3">
                            <div className="font-bold text-start uppercase ">Thanh toán linh hoạt</div>
                            <div>Thanh toán thuận tiện & an toàn 100%</div>
                        </div>
                    </div>
                    <div className="h-[50px] border"></div>
                    <div className="flex gap-3">
                        <SlEarphonesAlt className="h-8 w-8"></SlEarphonesAlt>
                        <div>
                            <div className="font-bold text-start uppercase">24/7 hỗ trợ ngay</div>
                            <div>Chuyên viên trực tổng đài 24/7</div>
                        </div>
                    </div>
                    <div className="h-[50px] border"></div>
                    <div className="flex gap-3">
                        <AiOutlineFileProtect className="h-8 w-8"></AiOutlineFileProtect>
                        <div>
                            <div className="font-bold text-start uppercase">Bảo hành & đổi trả dễ dàng</div>
                            <div className="text-start">Bảo hành lên đến 1 năm</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-5">
                    <img src={QC1} className="h-[200px] w-[450px]"></img>
                    <img src={QC2} className="h-[200px] w-[450px]"></img>
                    <img src={QC3} className="h-[200px] w-[450px]"></img>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;