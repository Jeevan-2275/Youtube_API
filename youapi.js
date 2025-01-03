

const express = require('express');

const app = express();
app.use(express.json());
const cors = require ("cors");
app.use(cors());
const videos = [
    {
      id: 1,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-8.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true',
      description: 'Bulbuli Coke Studio Bangla|Season one | Ritu Raj X Nandita',
      channel: 'Coke Studio Bangla',
      views: '1.5M views · 2 days ago',
    },
    {
      id: 2,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-9.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true',
      description: 'Infinix Note 12: AMOLED & Helio G88 SoC!',
      channel: 'ATC Android ToTo Company',
      views: '42 views · 2 days ago',
    },
    {
      id: 3,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-10.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true',
      description: 'My First UX Design Case Study This Got Me My First Job',
      channel: 'Saptarshi Prakash',
      views: '48k views · 1 year ago',
    },
    {
      id: 4,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-11.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true',
      description: 'My Mix',
      channel: 'Lopamudra Mitra, Anupam',
      views: '1.5M views · 2 days ago',
    },
    {
      id: 5,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-8.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true',
      description: 'Bulbuli Coke Studio Bangla | Season one | Ritu Raj X Nandita',
      channel: 'Coke Studio Bangla',
      views: '1.5M views · 2 days ago',
    },
    {
      id: 6,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-9.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true',
      description: 'Infinix Note 12: AMOLED & Helio G88 SoC!',
      channel: 'ATC Android ToTo Company',
      views: '42 views · 2 days ago',
    },
    {
      id: 7,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-10.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true',
      description: 'My First UX Design Case Study This Got Me My First Job',
      channel: 'Saptarshi Prakash',
      views: '48k views · 1 year ago',
    },
    {
      id: 8,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-11.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true',
      description: 'My Mix',
      channel: 'Lopamudra Mitra, Anupam',
      views: '1.5M views · 2 days ago',
    },
    {
      id: 9,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-8.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true',
      description: 'Bulbuli Coke Studio Bangla | Season one | Ritu Raj X Nandita',
      channel: 'Coke Studio Bangla',
      views: '1.5M views · 2 days ago',
    },
    {
      id: 10,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-9.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true',
      description: 'Infinix Note 12: AMOLED & Helio G88 SoC!',
      channel: 'ATC Android ToTo Company',
      views: '42 views · 2 days ago',
    },
    {
      id: 11,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-10.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true',
      description: 'My First UX Design Case Study This Got Me My First Job',
      channel: 'Saptarshi Prakash',
      views: '48k views · 1 year ago',
    },
    {
      id: 12,
      thumbnail: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Thumbnail-11.png?raw=true',
      profilePic: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true',
      description: 'My Mix',
      channel: 'Lopamudra Mitra, Anupam',
      views: '1.5M views · 2 days ago',
    }];





app.get("/videos", (req, res) => {
  res.json(videos);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
