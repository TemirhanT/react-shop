import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const Footer = observer(() => {

    const {user} = useContext(Context);

    return ( 
        <>
        <div className='footer-line'></div>
        <div className={user.theme == 'light' ? "footer-container" : 'footer-container dark'}>
            <div className='footer-wrapper'>
                <div className="footer-left-side">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam asperiores aliquam beatae deleniti, mollitia amet nostrum non corrupti nesciunt qui officiis veniam facere minima ratione, facilis excepturi, delectus vero totam?</div>
                <div className="footer-right-side">Contacts:
                    <a href='https://www.instagram.com/instagram/'>Instagram <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'/></a>
                    <a href='https://ru-ru.facebook.com/'>Facebook <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png'/></a>
                    <a href='https://vk.com'>Vkontakte <img src='https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg'/></a>
                </div>
            </div>
        </div>
        </>
     );
})
 
export default Footer;