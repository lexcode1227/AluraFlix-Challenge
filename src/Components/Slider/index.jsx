import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ChallengeCard from '../ChallengeCard'
import {v4 as uuid} from "uuid"

const Slider = ({addFav, deleteChallenge, data}) => {
    SwiperCore.use([Navigation, Pagination])

    return (
        <Swiper 
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: {
                  slidesPerView: "2",
                  spaceBetween: "20",
                },
                1024: {
                  slidesPerView: "3",
                  spaceBetween: "20",
                },
              }}
            navigation // Habilita los botones de navegación
            pagination={{ clickable: true }}
            style={{maxWidth: "1400px", padding: "10px", width: "100%"}}
        >
           {data.map((item) => (
              <SwiperSlide key={uuid()} style={{ display: "flex", justifyContent: "center" }}>
                <ChallengeCard key={item.id} data={item} deleteChallenge={deleteChallenge} addFav={addFav} />
              </SwiperSlide>
          ))}
          
          
        </Swiper>
      )
    }

export default Slider