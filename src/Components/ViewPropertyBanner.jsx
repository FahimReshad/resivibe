/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ViewPropertyBanner = ({propertyData}) => {
    const {image, image2, image3} = propertyData;
    return (
        <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-[350px] lg:h-[600px] object-cover rounded-lg' src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[350px] lg:h-[600px] object-cover rounded-lg' src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[350px] lg:h-[600px] object-cover rounded-lg' src={image3} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
    );
};

export default ViewPropertyBanner;