import groupImage from '../../assets/group.png';
import faceBook from '../../assets/facebook.png'
import tikTok from '../../assets/tiktok.png'
import youTube from '../../assets/youtube.png'


function Footer(){
    return(
        <div className="bg-[#000000] px-[160px] py-[80px]">
        <div className="flex justify-between">
          {/* Cột thông tin công ty */}
          <div className="w-[632px] mr-4">
            <img src={groupImage} className="pb-5" alt="Logo iStore"></img>
            <p className="text-white text-start">
            CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ ISTONE
            </p>
            <p className="text-white mt-3 text-start">
              Qua một thập kỷ tạo dựng uy tín, Istone được 30 công ty công nghệ nổi
              tiếng thế giới lựa chọn làm đối tác, cung cấp các dịch vụ phát triển
              thị trường (MES) tại Việt Nam.
            </p>
            <div className="flex gap-4 mt-5">
              <img src={faceBook} alt="Facebook" className="w-6 h-6"></img>
              <img src={tikTok} alt="Tiktok" className="w-6 h-6"></img>
              <img src={youTube} alt="Youtube" className="w-6 h-6"></img>
            </div>
          </div>
  
          {/* Các cột chia nội dung */}
          <div className="grid grid-cols-3 gap-12 ">
            {/* Cột Thông tin */}
            <div className="text-white">
              <p className="font-bold pb-5 text-start">Thông tin</p>
              <ul className="space-y-2 text-start ">
                <li>Tin tức</li>
                <li>Giới thiệu</li>
                <li>Phương thức thanh toán</li>
              </ul>
            </div>
  
            {/* Cột Chính sách */}
            <div className="text-white">
              <p className="font-bold pb-5 text-start">Chính sách</p>
              <ul className="space-y-2 text-start">
                <li>Giao hàng</li>
                <li>Bảo mật</li>
                <li>Đổi trả</li>
                <li>Bảo hành</li>
              </ul>
            </div>
  
            {/* Cột Địa chỉ & Liên hệ */}
            <div className="text-white mr-6">
              <p className="font-bold pb-5 text-start">Địa chỉ & Liên hệ</p>
              <ul className=" text-start">
                <li>Tài khoản của tôi</li>
                <li>Đơn đặt hàng</li>
                <li className="flex gap-2">
                  Mua hàng: <span className="text-[#0085FF]">123.456.7890</span>
                </li>
              </ul>
              <div className="mt-3">
                <ul className=" text-start">
                  <li className='whitespace-nowrap'>Nhánh 1: Khu vực Hà Nội và các tỉnh phía Bắc</li>
                  <li className='whitespace-nowrap'>Nhánh 2: Khu vực Hồ Chí Minh và các tỉnh phía Nam</li>
                </ul>
              </div>
              <p className="flex gap-2 mt-3 text-start">
                Doanh nghiệp: <span className="text-[#0085FF]">036.636.xxx</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Footer;