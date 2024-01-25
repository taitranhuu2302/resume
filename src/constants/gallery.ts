export type ProjectType = "OUTSTANDING" | "NORMAL";

export type GalleryType = {
  name: string;
  bgCover: string;
  gallery: string[];
  client: string;
  projectLink: string;
  github: string;
  description: string;
  position: string;
  technology: string;
  type: ProjectType;
};

export const GALLERY_IMAGES: GalleryType[] = [
  {
    name: "Pidol",
    type: "OUTSTANDING",
    bgCover: `${process.env.PUBLIC_URL}/assets/images/gallery/pidol.png`,
    technology: "NextJS, Redux, ReactQuery, NestJS, Metamask",
    client: "Individual",
    projectLink: "https://testnet.pidol.io/",
    github: "",
    position: "Front-End",
    description:
      "Nền tảng short clip và live stream cho phép người dùng có thể đăng tải ( video, image, audio ) và thực hiện live stream trên hệ thống",
    gallery: [`${process.env.PUBLIC_URL}/assets/images/gallery/pidol.png`],
  },
  {
    name: "Music App",
    type: "OUTSTANDING",
    bgCover: `${process.env.PUBLIC_URL}/assets/images/music/2.png`,
    technology: "ReactJS",
    client: "Zing MP3",
    projectLink: "https://music.huutai.tokyo/",
    github: "https://github.com/taitranhuu2302/music-app",
    position: "Front-End",
    description: "Ứng dụng âm nhạc",
    gallery: [`${process.env.PUBLIC_URL}/assets/images/music/1.png`, `${process.env.PUBLIC_URL}/assets/images/music/2.png`],
  },
  {
    name: "Ecommerce Aorus Clone",
    type: "NORMAL",
    bgCover: `${process.env.PUBLIC_URL}/assets/images/gallery/aorus.jfif`,
    technology: "React, Redux",
    client: "Aorus",
    projectLink: "https://react-app-c62a7.web.app/",
    github: "https://github.com/taitranhuu1908/ReactNew",
    description: "Website bán hàng sử dụng ReactJS, Redux và API xử dụng json-server",
    position: "Front End",
    gallery: [
      `${process.env.PUBLIC_URL}/assets/images/aorus/home.png`,
      `${process.env.PUBLIC_URL}/assets/images/aorus/detail.png`,
      `${process.env.PUBLIC_URL}/assets/images/aorus/store.png`,
      `${process.env.PUBLIC_URL}/assets/images/aorus/login.png`,
      `${process.env.PUBLIC_URL}/assets/images/aorus/register.png`,
    ],
  },
  {
    name: "Ecommerce Smartphone",
    type: "NORMAL",
    bgCover: `${process.env.PUBLIC_URL}/assets/images/gallery/smartphone.png`,
    technology: "HTML, CSS, Javascript, Bootstrap",
    client: "TonyCong Store",
    projectLink: "https://taitranhuu1908.github.io/huutai-tokyo/",
    github: "https://github.com/taitranhuu1908/huutai-tokyo",
    description: "Website bán hàng sử dụng HTML, CSS, Javascript, Bootstrap",
    position: "Front End",
    gallery: [
      `${process.env.PUBLIC_URL}/assets/images/bootstrap/home.png`,
      `${process.env.PUBLIC_URL}/assets/images/bootstrap/detail.png`,
      `${process.env.PUBLIC_URL}/assets/images/bootstrap/store.png`,
      `${process.env.PUBLIC_URL}/assets/images/bootstrap/cart.png`,
      `${process.env.PUBLIC_URL}/assets/images/bootstrap/payment.png`,
    ],
  },
  {
    name: "Chat App",
    type: "OUTSTANDING",
    bgCover: `${process.env.PUBLIC_URL}/assets/images/gallery/chat-app.png`,
    technology: "Laravel, Pusher, Jquery",
    client: "Soho",
    projectLink: "",
    github: "https://github.com/taitranhuu1908/chat-laravel",
    description:
      "Webiste chat app có các chức năng như thêm bạn bè, tạo group, tạo công việc, nhắn tin,...",
    position: "Front End & Backend",
    gallery: [
      `${process.env.PUBLIC_URL}/assets/images/laravel-chat/1.png`,
      `${process.env.PUBLIC_URL}/assets/images/laravel-chat/2.png`,
      `${process.env.PUBLIC_URL}/assets/images/laravel-chat/3.png`,
      `${process.env.PUBLIC_URL}/assets/images/laravel-chat/4.png`,
      `${process.env.PUBLIC_URL}/assets/images/laravel-chat/5.png`,
    ],
  },
  {
    name: "Tinhte Clone",
    type: "NORMAL",
    bgCover: `${process.env.PUBLIC_URL}/assets/images/gallery/tinhte.jpg`,
    technology: "NextJS, Laravel",
    client: "Tinhte",
    projectLink: "",
    github: "https://gitlab.com/taitranhuu1908/agile-blog",
    description:
      "Tinh Tế là một diễn đàn trực tuyến, được coi là một trong những diễn đàn về công nghệ thông tin lớn nhất Việt Nam",
    position: "Front-End",
    gallery: [
      `${process.env.PUBLIC_URL}/assets/images/tinhte/1.png`,
      `${process.env.PUBLIC_URL}/assets/images/tinhte/2.png`,
      `${process.env.PUBLIC_URL}/assets/images/tinhte/3.png`,
      `${process.env.PUBLIC_URL}/assets/images/tinhte/4.png`,
    ],
  },
  {
    name: "Nha Khoa Hoang Kim",
    type: "OUTSTANDING",
    bgCover: `${process.env.PUBLIC_URL}/assets/images/gallery/nhakhoa.png`,
    technology: "NextJS, NodeJS ( Strapi )",
    client: "Individual",
    projectLink: "https://nhakhoahoangkim.vn/",
    github: "",
    description: "Website giới thiệu về nha khoa cho doanh nghiệp",
    position: "Front-End",
    gallery: [`${process.env.PUBLIC_URL}/assets/images/gallery/nhakhoa.png`],
  },
  {
    name: "Farmart",
    type: "NORMAL",
    bgCover: `${process.env.PUBLIC_URL}/assets/images/farmart/1.avif`,
    technology: "HTML, CSS, JS",
    client: "Farmart",
    projectLink: "https://taitranhuu2302.github.io/Farmart/",
    github: "https://github.com/taitranhuu2302/Farmart",
    description:
      "Farmart là một mẫu HTML hiện đại dành cho các cửa hàng trực tuyến trên thị trường thực phẩm và hữu cơ. Với thiết kế sạch sẽ và hợp thời trang, Farmart sẽ làm cho cửa hàng trực tuyến của bạn trông ấn tượng và hấp dẫn hơn đối với người xem. Giúp tăng tỷ lệ chuyển đổi cao để mua sản phẩm với khách hàng của bạn một cách nhanh chóng. Được thiết kế trên hệ thống lưới, trang web của bạn sẽ trông sắc nét trên tất cả các màn hình. Thiết kế tối ưu hóa di động dựa trên trải nghiệm người dùng, mang lại trải nghiệm mua sắm tốt nhất cho khách hàng của bạn.",
    position: "Front-End",
    gallery: [
      `${process.env.PUBLIC_URL}/assets/images/farmart/2.jpg`,
      `${process.env.PUBLIC_URL}/assets/images/farmart/3.jpg`,
      `${process.env.PUBLIC_URL}/assets/images/farmart/4.jpg`,
    ],
  },
];
