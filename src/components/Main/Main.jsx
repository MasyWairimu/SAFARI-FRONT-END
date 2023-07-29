import React, {useEffect} from 'react';
import './main.css';
import amboseli from '../../assets/pictures/amboseliPark.jpeg';
import karen from '../../assets/pictures/karen.jpeg';
import lamu from '../../assets/pictures/lamu.jpeg';
import maasaiMara from '../../assets/pictures/maasaiMara.jpeg';
import mombasa from '../../assets/pictures/mombasa.jpg';
import mtKenya from '../../assets/pictures/mtKenya.jpg';
import nakuru from '../../assets/pictures/Lake Nakuru.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi';
import{BsClipboard2Check} from 'react-icons/bs';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    imgSrc: maasaiMara,
    destTitle: 'Maasai Mara',
    location: 'New zealandKenya-Tanania Border',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Sightings of the Big Five (lion, leopard, elephant, buffalo, and rhino) are almost guaranteed, while cheetah and smaller felines also abound. Keep an eye out for elusive predators including bat-eared foxes and spotted hyenas; and a slew of antelope ranging from topi and eland to oribi, waterbuck, and gazelle. The parks rivers are home to hippos and crocodiles, while birders can look for more than 450 recorded avian species.'
  },
  {
    id:2,
    imgSrc: amboseli,
    destTitle: 'Amboseli National Park',
    location: 'Loitokitok District, Rift Valley, Kenya',
    grade: 'CULTURAL RELAX',
    fees: '1350 INR',
    description: 'Adorned by the gigantic Mt. Kilimanjaro, Amboseli National Park is one of the top places to visit in Kenya for wildlife enthusiasts. Visit this place to spectate majestic views of the highest peak of Africa, and witness large herds of African elephants, and an extensive variety of wildlife such as Zebras, Giraffes, Cheetahs, and innumerable bird species.'
  },
  {
    id:3,
    imgSrc: mtKenya,
    destTitle: 'Mt. Kenya National Park',
    location: 'Mount Kenya National Park, Central Kenya',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Situated at an altitude of 5,199 meters, Mt. Kenya is the second highest peak in Kenya, and also a UNESCO World Heritage Site. This national park was established to conserve the endangered wildlife of the surrounding areas of Mt. Kenya. It has now developed into a full-fledged tourist attraction and is one of the top Kenya sightseeing places that is known for its exhilarating wildlife safari tours.'
  },
  {
    id:4,
    imgSrc: mombasa,
    destTitle: 'Mombasa',
    location: 'Mombasa, Kenya',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'TLocated on the Southeast coast of the country, Mombasa is the largest port city of Kenya. Being a cosmopolitan city, Mombasa is considered as a tourist magnet that attracts all sorts of travelers because of its amalgamated culture. It is one of the most famous places in Kenya that boasts of a blend of various cultures, traditions, art, architecture, and cuisines, such as, British, Portuguese, Arab, Indian, and Asian. This city is also famous for its beaches, corals, old monuments, and bustling street markets.he epitome'
  },
  {
    id:5,
    imgSrc: nakuru,
    destTitle: 'Lake Nakuru National Park',
    location: 'Nakuru, Kenya',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: ' “A beautiful wildlife haven” On the floor of the Great Rift Valley, surrounded by wooded and bushy grassland, lies the beautiful Lake Nakuru National Park. Visitors can enjoy the wide ecological diversity and varied habitats that range from Lake Nakuru itself to the surrounding escarpment and picturesque ridges. Lake Nakuru National Park is ideal for bird watching, hiking,picnic and game drives.'
  },
  {
    id:6,
    imgSrc: lamu,
    destTitle: 'Lamu Island',
    location: 'Lamu, Kenya',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The small island of Lamu, northeast of Mombasa, oozes old-world charm. A UNESCO World Heritage Site, Lamu Old Town is Kenya oldest continually inhabited settlement, with origins dating back to the 12th century.Strolling the labyrinthine streets is one of the top things to do here. You can see the islands rich trading history reflected in the buildings. Architectural features from the Arab world, Europe, and India are evident, yet with a discernible Swahili technique. Intricately carved wooden doors, coral stone buildings, hidden courtyards, verandas, and rooftop patios are common features.'
  },
  {
    id:7,
    imgSrc: karen,
    destTitle: 'Karen Blixen Museum',
    location: 'Nairobi',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'From 1917 to 1931, the renowned Danish writer lived in a bungalow-style farmhouse at the foot of the Ngong Hills. Her famous memoir recounts what living on the coffee plantation was like. It also explores Kenya’s rich culture and colonial rule in British East Africa. Now a historic house museum, its rooms are full of period pieces and original artifacts owned by the author. Surrounded by lush, green grounds, it makes for a nice break from the hustle and bustle of the centre of Nairobi.'
  }

]

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="main container section">
      
      <div data-aos = "fade-right" className="secTitle">
        <h3 className="title">
          Your Safari Options:
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location,grade, fees, description}) => {
            return(
              <div data-aos = "fade-up" key = {id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt="destTitle" />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle"> {destTitle} </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>  {grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>
                        {fees}
                      </h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboard2Check className='icon'/>
                  </button>
                </div>
              </div>
            )} )
            }
        </div>
      </section>
)}

export default Main;
