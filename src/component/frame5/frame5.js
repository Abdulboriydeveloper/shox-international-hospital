import React, {useEffect} from 'react';
import './frame5.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'

const Frame5 = () => {
  useEffect(()=>{
    AOS.init({})
  })
  return (
      <div>
        <div className='frame5Page'>
            
            <div className="d-flex justify-content-center"><div className='logomedionFrame5' data-aos="zoom-in" data-aos-delay="50"></div></div>
            <div className="d-flex justify-content-center"><div className="textLogoFrame5" data-aos="zoom-in" data-aos-delay="100"></div></div>

            <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav praysFrame5" aria-current="page" to="#"><h1 className='praysTextFrame5' >ДИАГНОСТИКА</h1></Link>
            </div>

            <div className="diagnostikaFrame5Container">
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame5" aria-current="page" to="#"><h1 className='praysTextLittleFrame5'>МРТ</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame5" aria-current="page" to="#"><h1 className='praysTextLittleFrame5'>МСКТ</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame5" aria-current="page" to="#"><h1 className='praysTextLittleFrame5'>УЗИ</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame5" aria-current="page" to="#"><h1 className='praysTextLittleFrame5'>Ендоскопия</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame5" aria-current="page" to="#"><h1 className='praysTextLittleFrame5'>ЭЭГ</h1></Link>
              </div>
              <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
                <Link className="nav-title-link nav-link nav-link-navbar active active-nav diagnostikaFrame5" aria-current="page" to="#"><h1 className='praysTextLittleFrame5'>ЭКГ</h1></Link>
              </div>
            </div>

            <div className="d-flex justify-content-center iconsFrame5" data-aos="zoom-in" data-aos-delay="200">
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav homeIcon" aria-current="page" to="/"><AiFillHome className='iconHome'/> <p className='domoyText'>ДОМОЙ</p></Link>
              <Link className="nav-title-link nav-link nav-link-navbar active active-nav nazadIcon" aria-current="page" to="/frame4"><FaRegArrowAltCircleRight className='iconNazad'/>  <p className='nazadText'>НАЗАД</p></Link>
            </div>

        </div>
    </div>
  );
};

export default Frame5;