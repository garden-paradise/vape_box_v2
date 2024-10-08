import './Footer.scss';
import MenuDown from './reuse/MenuDown/MenuDown';
import vk from './../../images/footer/vk.svg';
import inst from './../../images/footer/inst.svg';
import telegram from './../../images/footer/TelegramLogo.svg';
import facebook from './../../images/footer/face.svg';
// import Visa from './../../images/footer/Visa.svg';
// import Mastercard from './../../images/footer/Mastercard.svg';
// import GooglePay from './../../images/footer/GooglePay.svg';
// import ApplePay from './../../images/footer/ApplePay.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <header className='footer'>
      <div className='container'>
        <div className='footer_sec1'>
          <MenuDown
            data={[
              {
                title: 'Компания',
                subtitle: [
                  { subtitle: 'О нас', subtitleLink: '/about' },
                  { subtitle: 'Магазины', subtitleLink: '/2' },
                  { subtitle: 'Блог', subtitleLink: '/blog' },
                ],
              },
              {
                title: 'Информация',
                subtitle: [
                  { subtitle: 'Доставка', subtitleLink: '/1' },
                  { subtitle: 'Способы оплаты', subtitleLink: '/2' },
                  { subtitle: 'FAQ', subtitleLink: '/F.A.Q.' },
                ],
              },
              {
                title: 'Будь с нами',
                images: [
                  { img: vk, imgLink: '/3123' },
                  { img: inst, imgLink: '/231' },
                  { img: telegram, imgLink: '/13' },
                  { img: facebook, imgLink: '/rfed' },
                ],
              },
              {
                title: 'Контакты',
                tel: '8 499 514 56 26',
              },
              {
                title: 'Подписывайся',
                form: true,
              },
            ]}
          />
        </div>
        <div className='footer_sec2'>
          <div className='footer_sec2_info'>
            <div className='footer_sec2_info_18'>18+</div>
            <div className='footer_sec2_info_2022'>2022 VAPEBOX Shop</div>
          </div>
          <div className='footer_sec2_policys'>
            <div>
              <NavLink to='/gg' className='footer_sec2_policy'>
                Пользовательское соглашение
              </NavLink>
            </div>
            <div>
              <NavLink to='/dsgsd' className='footer_sec2_policy'>
                Согласие на обработку персональных данных
              </NavLink>
            </div>
            <div>
              <NavLink to='/dgsdg' className='footer_sec2_policy'>
                Положение о порядке хранения и защиты персональных данных
              </NavLink>
            </div>
          </div>
          {/* <div>
            <img src={Visa} alt='imageCard' />
            <img src={Mastercard} alt='imageCard' />
            <img src={GooglePay} alt='imageCard' />
            <img src={ApplePay} alt='imageCard' />
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default Footer;
