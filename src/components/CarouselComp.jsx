import React, {useContext, useEffect, useRef, useState} from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import "../Styles/Carousel.css"
import { useNavigate } from 'react-router-dom';
import { SUPPLE_ROUTE } from '../utils/consts';

const CarouselComp = observer(() => {


    const {supplements, user} = useContext(Context);
    const navigate = useNavigate();

    let 
    isDragStart = false, 
    prevPageX, 
    prevScrollLeft, 
    positionDiff, 
    mouseDownChecker = false;
    
    let carousel, firstImg, test = useRef();
    useEffect (() =>{
        carousel = document.querySelector('.carousel');
        firstImg = carousel.querySelectorAll('img')[0];
    })


    const autoSlide = () => {
        if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

        positionDiff = Math.abs(positionDiff);
        let firstImgWidth; 
        
        if(window.innerWidth > 1400) {
            firstImgWidth = 1000/3
        } else if (window.innerWidth > 1000 && window.innerWidth < 1400) {
            firstImgWidth = 650/2
        } else {
            firstImgWidth = 400
        }
        let valDiff = firstImgWidth - positionDiff;
        if(carousel.scrollLeft > prevScrollLeft) {
            return carousel.scrollLeft += positionDiff > firstImgWidth/3 ? valDiff : -positionDiff;
        }
        return carousel.scrollLeft -= positionDiff > firstImgWidth/3 ? valDiff : -positionDiff;
    }


    const dragStart = (e) => {
        mouseDownChecker = true;
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }
    const dragStop = () => {
        if(!mouseDownChecker) return;
        mouseDownChecker = false;
        isDragStart = false
        carousel.classList.remove('dragging');
        autoSlide();
    }
    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault()
        carousel.classList.add('dragging');
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }
    const draggingTouch = (e) => {
        if(!isDragStart) return;
        carousel.classList.add('dragging');
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff; 
    }


    const leftClick = () => {
        if(window.innerWidth > 1400) {
            carousel.scrollLeft -= 1000/3

        } else if (window.innerWidth > 1000 && window.innerWidth < 1400) {
            carousel.scrollLeft -= 650/2
        } else {
            carousel.scrollLeft -= 400
        }
    }
    const rightClick = () => {
        if(window.innerWidth > 1400) {
            carousel.scrollLeft += 1000/3
        } else if (window.innerWidth > 1000 && window.innerWidth <= 1400) {
            carousel.scrollLeft += 650/2
        } else {
            carousel.scrollLeft += 400
        }
    }

    return ( 
        <div className={user.theme == 'light' ? 'wrapper' : 'wrapper dark'}>
            <img className='pointer' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAA6Ojr7+/vs7OwWFhYrKyuZmZnu7u6UlJTj4+MhISGenp6ioqKzs7OwsLBgYGCEhIQaGhomJiaoqKje3t4ODg7n5+fU1NRaWlp6enqrq6tCQkLMzMzDw8MgICBra2syMjJQUFCNjY29vb1eXl58fHygdZ1RAAACyElEQVR4nO3c6XLbMAyFUSGpHS914iX1FidWs/T9HzFbZxrHAn+RxPTqO0+AOyBEUZbcNAAAAAAAAAAAAAAAAAAAAAAAAIixHbfz+eIhuoxitgf7tHqOLqWMK/unjS6mhLF9NY8uJ7/TgGa30QXl9j2g2Si6pLyezgKKNfG8g2a76KJy6gpovy+jy8qnM6AtdQaxO6ANZXp41R3QHqMLy8ULaE/RlWXiLNE3k+jS8nA7aPvo0vLwA06jS8sjEVBjq/ADDn9E15bFT7+D6gEHGgH9JbpiBv8L/hIVueFOBFTv4FCjgzP/IqPRQT/gQKOD/hIV6WBiBjUC+ktU5FYtMYMaAXu8TcjPoMg24Qc8anRQfpu4dQOKbPR+QJFtosc32/IzKHIV7fEMityq3anP4LO/RDU6OHEDijz4bQ5ewOGmuSyoWsBrfwgPFwUddottnYRrN2F5j78qBPQvM1Vcl0+4i01oxd82HgUHLP+C4310QFsUTuj/SFjLunAT99EBze7LJpxH5zObySccl03YRucr3kP9OfQfkdZS+lqqvx+OIm+8PxQ/g0ZfTMt/BfcQG7DC2aKZBuarcj5MHBALn/Ffap3x/ROiynOaxOVU5IF+ak8UeaSfGsXVJrq2TPwniiK/Haa6uNbv4kA/Yg9m8agfsQezuNSPONWP2IOFavoRjyLfxDY3fkT9Lqp82Zy63KhETCxU/Yg96GIPZnFQ5QFgBX4Xlypd7MFC7XXEpcos+i/WDvS7aCpdTGz9KhETC1U/oswVNRFR5b/M/IhtdGm5+N/TqIyi38XSr8LU40WU+c89d6GqfHHyrjuiyF/xfOpcqBcq+8WHri6K/Rt0xzeKd9E1ZXbWxbXUIn33PWKNt+4qO40o8ueep76eF3VuaE5sXv7mOxR+/zzQ5OZPu5/Vem8SAAAAAAAAAAAAAAAAAAAAAAAAnlecfSix4O5IXgAAAABJRU5ErkJggg==' onClick={leftClick}></img>
            <div className='carousel' 
                onMouseMove={dragging} 
                onMouseDown={dragStart} 
                onMouseUp={dragStop} 
                onMouseLeave={dragStop}
                onTouchMove={draggingTouch}
                onTouchStart={dragStart}
                onTouchEnd={dragStop}>     
                {supplements.bestSupples.map(supple =>
                    <img ref={test} key={supple.id} src='https://www.jaipuriaschoolbahraich.in/wp-content/uploads/2016/11/blank-img.jpg' className='carousel-img' draggable='false' onClick={() => console.log('1')}/>
                )}
            </div>
            <img className='pointer' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACWlpY+Pj74+PjExMRERET8/Pzb29uampru7u5ycnJMTEzp6elISEjg4OD09PSOjo5aWlp8fHzKysqrq6uFhYU4ODgnJycODg6xsbG3t7fBwcHQ0NAxMTFVVVVmZmaioqIeHh5sbGyAgIAVFRWKJYkGAAADq0lEQVR4nO3di1LiQBAFUAeQyFMUFJ8IiP//i7LrUvJIMrd2Ounc1D1f0LdSMpmennh1JSIiIiIiIiIiIiIiIiIiIiIiIiIiIiJyZPL6OBqNOu8z70IqshiHf7a7oXcxFZhMw7GOdz3mrsOZac+7JFtv5wFDWLYq4u1lwBD6mXdZhpZ5CdsU8SE3YAhj78LMFAQMYe1dmZGL39Ffn9612RgVJwxz7+JMPJUkDDvv6gzMygKGcOddX7rcxfAI/wtcLGHYeFeYahJLGB68S0yUPUcjvnjXmKgbTRhevWtMcxdPGN68i0xyAyQM795VJum3PuI7kjDceJeZYg5FvPUuM0FvBUWceNeZYBhfE/e+mCNOoIhPzH3U6NvpT0TmBhy0KoYlc3cKi9hnfooLKOIH81PM6XznuPcuMwUWce1dZooXKOLIu8wURe3vU9Q9xg0U8dG7zBQDKCJ1jxHZ8pP3GB+hiNQ9Rmy7SN2AKzur+UXdgFtDEakbcPdQxIV3mQmycTxfIG/AQS1G6oi9/AGNc8w9xgw4zwgVNuCy25dBp1IDbOWvKOKwg3U467CqogG38U51Ymk/j/rhnenMyrh108N+x+tkPAGHvVHVy7Q7tfFOk8twuzj0zlLAbs0AF6na2fXfvJMUsur2Y513D1abRaxN5MGqwYjtTD18GCVs3mp/0DdKiO1oPHSNErb/GTb379Dqxa3jHaSQ1UlGc9dDs86id5BCVgEbu+TbHbdF7g64MexkYOfQdTM9pWniHt/21Bs8UqiT+XBG05b9tXXA/d8iNCtZlwoC7n9RG9TzrmrQrTHnFl3eSb4M2sdYbZocYIdrXeJvaEBrEvPgN7YiEQeEXpyeiW8nfEJPkPgMHxv7Ig64gwISD5pgKz3xPBTWRSCeacNmhInnEjdQQOL761iPhHg++BUKSDzjjd2ZIb6KUPIpniPE10mwK93EV4Kw+4dr7zL/HxaQ+Goedg/Y6rDeAXaXm/hjijMo4Iq3KZNBU+tb3ieIbQi3xE0ZaCFkbspgjUPmL5tACwVzQGjPS9yU2ZvGAxI3Zf74iga89i4xTXxynLgp81f0q4LETZkfsYTETZmD8nfSgXd5BkpfSqk/nnBQ1sVvw0d2S19LibtOJwo/ldySj10X94GJmzLn8jcXY95JmQu5S+LUuypTOePjXeKeRZ6L31Pqz7LlGp4O0LThTebC0f8KmjP3ZMq0/f89iYiIiIiIiIiIiIiIiIiIiIiIiIiIiMiZb0oLMh2Rx65KAAAAAElFTkSuQmCC' onClick={rightClick}></img>
        </div>
     );
})

export default CarouselComp;

// В карусели можно выставить наиболее продаваемые элементы. Данные берем из всего списка и фильтруем.
// Например выставить топ-5 по продажам
