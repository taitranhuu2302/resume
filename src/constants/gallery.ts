export type GalleryType = {
  name: string;
  bgCover: string;
  gallery: string[];
  client: string,
  projectLink: string,
  github: string,
  description: string
}

export const GALLERY_IMAGES: GalleryType[] = [
  {
    name: 'Ecommerce Aorus Clone',
    bgCover: '/assets/images/gallery/aorus.jfif',
    client: 'Aorus Clone',
    projectLink: 'https://react-app-c62a7.web.app/',
    github: 'https://github.com/taitranhuu1908/ReactNew',
    description: '',
    gallery: [
      '/assets/images/aorus/home.png',
      '/assets/images/aorus/detail.png',
      '/assets/images/aorus/store.png',
      '/assets/images/aorus/login.png',
      '/assets/images/aorus/register.png',
    ]
  },
  {
    name: 'Ecommerce Smartphone',
    bgCover: '/assets/images/gallery/smartphone.png',
    client: 'TonyCong Store',
    projectLink: 'https://taitranhuu1908.github.io/huutai-tokyo/',
    github: 'https://github.com/taitranhuu1908/huutai-tokyo',
    description: '',
    gallery: [
      '/assets/images/bootstrap/home.png',
      '/assets/images/bootstrap/detail.png',
      '/assets/images/bootstrap/store.png',
      '/assets/images/bootstrap/cart.png',
      '/assets/images/bootstrap/payment.png',
    ]
  },
  {
    name: 'Chat App',
    bgCover: '/assets/images/gallery/chat-app.png',
    client: 'Soho',
    projectLink: '',
    github: 'https://github.com/taitranhuu1908/chat-laravel',
    description: '',
    gallery: [
      '/assets/images/laravel-chat/1.png',
      '/assets/images/laravel-chat/2.png',
      '/assets/images/laravel-chat/3.png',
      '/assets/images/laravel-chat/4.png',
      '/assets/images/laravel-chat/5.png',
    ]
  },
  {
    name: 'Pidol',
    bgCover: '/assets/images/gallery/pidol.png',
    client: 'Pidol',
    projectLink: 'https://testnet.pidol.io/',
    github: '',
    description: 'Pidol is a live-streaming platform with video on demand (VOD) clipping and posting functions where ALL OF THE SUPPORT AND DONATION from communities and fans go to their favorite content creators and idols without any fee!\n' +
      '\n' +
      'Viewers can support their favorite broadcasters with in-app gifts, and some popular broadcasters use the app as a full-time employment. We at Pidol only profit from advertising and make sure that creators from our platform have all of the rights and benefits they deserve!\n' +
      '\n' +
      'Pidol primarily focuses on live streaming and includes official broadcasts of online events. In addition, Pidol also has live broadcasts for a variety of other genres, including education, esports and real live streams.',
    gallery: [
      '/assets/images/gallery/pidol.png',
    ]
  },
  {
    name: 'Tinhte Clone',
    bgCover: '/assets/images/gallery/tinhte.jpg',
    client: 'Tinhte',
    projectLink: '',
    github: 'https://gitlab.com/taitranhuu1908/agile-blog',
    description: '',
    gallery: [
      '/assets/images/tinhte/1.png',
      '/assets/images/tinhte/2.png',
      '/assets/images/tinhte/3.png',
      '/assets/images/tinhte/4.png',
    ]
  },
];