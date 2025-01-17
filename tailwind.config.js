/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Đường dẫn tới các file cần sử dụng Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      spacing: {
        '100px': '100px', // Thêm giá trị 150px
      },
      colors: {
        primary: '#E11447', // Đặt tên màu là "primary"
      },
    },
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Các file cần áp dụng Tailwind
  ],
};


