import React from 'react';
import { MovieListEntry } from '../model/list-data';
import Footer from '../components/Footer';

const new_movie_list = [
    {"id":"gai-ngan-do-phan-2","name":"Gái Ngàn Đô Phần 2","thumbUrl":"https://phim.nguonc.com/public/images/PostCat/1652236165.jpg","posterUrl":"https://phim.nguonc.com/public/images/PostCat/maxresdefault%20(1).jpg","modified":1709778977000},{"id":"gai-ngan-do-phan-1","name":"Gái Ngàn Đô Phần 1","thumbUrl":"https://phim.nguonc.com/public/images/PostCat/117185648_2763241303949265_3997612971491675570_n.jpg","posterUrl":"https://phim.nguonc.com/public/images/PostCat/maxresdefault(3).jpg","modified":1709778831000},{"id":"sengoku-youko","name":"Sengoku Youko","thumbUrl":"https://phim.nguonc.com/public/images/Film/140627.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/140627.jpg","modified":1709778686000},{"id":"metallic-rouge","name":"Metallic Rouge","thumbUrl":"https://phim.nguonc.com/public/images/Film/140210.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/140210.jpg","modified":1709778684000},{"id":"jaku-chara-tomozaki-kun-2nd-stage","name":"Jaku-Chara Tomozaki-kun 2nd Stage","thumbUrl":"https://phim.nguonc.com/public/images/Film/139378.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/139378.jpg","modified":1709778682000},{"id":"ishura","name":"Ishura","thumbUrl":"https://phim.nguonc.com/public/images/Film/140122.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/140122.jpg","modified":1709778680000},{"id":"the-than-ngu-khi-su-cuoi-cung","name":"Thế Thần: Ngự khí sư cuối cùng","thumbUrl":"https://phim.nguonc.com/public/images/Film/the-than-ngu-khi-su-cuoi-cung-thumb.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/the-than-ngu-khi-su-cuoi-cung-poster.jpg","modified":1709777807000},{"id":"nguoi-sat-3","name":"Người Sắt 3","thumbUrl":"https://phim.nguonc.com/public/images/Film/o0dmWIrF63lBPQVFdvqaWUxQ7xz.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/aFTYFqrWp4RS46Twm87l5e0ItYb.jpg","modified":1709777496000},{"id":"the-than-ngu-khi-su-cuoi-cung-phan-2","name":"Thế Thần: Ngự khí sư cuối cùng (Phần 2)","thumbUrl":"https://phim.nguonc.com/public/images/Film/the-than-ngu-khi-su-cuoi-cung-phan-2-thumb.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/the-than-ngu-khi-su-cuoi-cung-phan-2-poster.jpg","modified":1709777423000},{"id":"nguoi-sat-2","name":"Người Sắt 2","thumbUrl":"https://phim.nguonc.com/public/images/Film/q9L8fMYW4dBQOdDAfbbxte7gciJ.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/jesRqfL9v6HNnowe795xjmuKUXl.jpg","modified":1709747281000},{"id":"the-than-ngu-khi-su-cuoi-cung-phan-3","name":"Thế Thần: Ngự khí sư cuối cùng (Phần 3)","thumbUrl":"https://phim.nguonc.com/public/images/Film/the-than-ngu-khi-su-cuoi-cung-phan-3-thumb.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/the-than-ngu-khi-su-cuoi-cung-phan-3-poster.jpg","modified":1709747200000},{"id":"chao-mung-den-voi-lop-hoc-de-cao-thuc-luc-3","name":"Chào Mừng Đến Với Lớp Học Đề Cao Thực Lực 3","thumbUrl":"https://phim.nguonc.com/public/images/Film/139318.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/139318.jpg","modified":1709746621000},{"id":"nanatsu-no-taizai-mokushiroku-no-yonkishi","name":"Nanatsu no Taizai: Mokushiroku no Yonkishi","thumbUrl":"https://phim.nguonc.com/public/images/Film/138530.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/138530.jpg","modified":1709746557000},{"id":"nguoi-sat","name":"Người Sắt","thumbUrl":"https://phim.nguonc.com/public/images/Film/nguoi-sat-thumb.jpg","posterUrl":"https://phim.nguonc.com/public/images/Post/frcekaro_1920x1080-nguoisat_1920_1080.jpg","modified":1709745775000},{"id":"nguoi-sat-su-noi-gian-cua-technovore","name":"Người Sắt: Sự Nổi Giận Của Technovore","thumbUrl":"https://phim.nguonc.com/public/images/Film/qI9c70BQTIsU9fPJvvv1hsui48P.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/kqMYb35r3NCsFeaV1EfBg3rzZWE.jpg","modified":1709745664000},{"id":"nguoi-sat-vo-dich","name":"Người Sắt Vô Địch","thumbUrl":"https://phim.nguonc.com/public/images/Film/nguoi-sat-vo-dich-thumb.jpg","posterUrl":"https://phim.nguonc.com/public/images/Film/nguoi-sat-vo-dich-poster.jpg","modified":1709745240000},{"id":"truong-tuong-vat","name":"Trường Tương Vật","thumbUrl":"https://phim.nguonc.com/public/images/PostCat/Truong-Tuong-Vat.jpg","posterUrl":"https://phim.nguonc.com/public/images/PostCat/a_100566239_m_601_en_720_405.jpg","modified":1709745116000},{"id":"vinh-an-mong","name":"Vĩnh An Mộng","thumbUrl":"https://phim.nguonc.com/public/images/PostCat/Z8vkN8_4f.jpg","posterUrl":"https://phim.nguonc.com/public/images/PostCat/hq720(1).jpg","modified":1709744676000},{"id":"tu-xuyen-quang-minh-tam-kiet","name":"Tử Xuyên: Quang Minh Tam Kiệt","thumbUrl":"https://phim.nguonc.com/public/images/PostCat/Yg6Q9ol9zJj0.jpg","posterUrl":"https://phim.nguonc.com/public/images/PostCat/a_100548258_m_601_zh-CN_m2_720_405.jpg","modified":1709744657000},{"id":"dai-tuong-quan-phan-1","name":"Đại Tướng Quân Phần 1","thumbUrl":"https://phim.nguonc.com/public/images/PostCat/449498127_shogun-s01.jpg","posterUrl":"https://phim.nguonc.com/public/images/PostCat/shogun-fx-season-1-key-art.jpg","modified":1709744621000}
  ];

const Genre: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
    <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Trang chủ /</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {new_movie_list.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-800 p-4 rounded-lg relative"
            >
              <a href="#">
              <img src={item.thumbUrl} alt={item.name} className="w-full h-auto rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              </a>
            </div>
          ))}
        </div>
        </div>
        <Footer />
      </div>
      
)}

export default Genre;