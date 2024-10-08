import './Home.scss';
import { NavLink } from 'react-router-dom';
import CardProduct from '../../../reuse_Components/CardProduct/CardProduct';
import ArticleComp from './reuse/ArticleComp/ArticleComp';
import AdressMap from './reuse/AdressMap/AdressMap';

const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <section className='home_sec1'></section>
        <section className='home_sec2'>
          <div className='sectionBlock sectionBlock_top'>
            <div className='sectionBlock_title'>Новинки</div>
            <NavLink to='/new' className='sectionBlock_url'>
              Смотреть все
            </NavLink>
          </div>
          <div className='home_sec2_new'>
            <CardProduct
              date={[
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
              ]}
            />
            <p className='home_sec2_new_s2'>Новое</p>
          </div>
        </section>
        <section className='home_sec2'>
          <div className='sectionBlock'>
            <div className='sectionBlock_title'>Популярное</div>
            <NavLink to='/new' className='sectionBlock_url'>
              Смотреть все
            </NavLink>
          </div>
          <div className='home_sec2_new'>
            <div className='home_sec2_new_cards'>
              <CardProduct
                date={[
                  { name: 'Название товара', sum: '1990', countMessage: '3' },
                  { name: 'Название товара', sum: '1990', countMessage: '3' },
                  { name: 'Название товара', sum: '1990', countMessage: '3' },
                  { name: 'Название товара', sum: '1990', countMessage: '3' },
                ]}
              />
            </div>
            <div className='home_sec2_new_s3'>Лучшее</div>
          </div>
        </section>
        <section className='home_sec3'>
          <div className='home_sec2_new_s4'>Команда</div>
          <div className='home_sec3_about'>
            <div className='home_sec3_about_img'></div>
            <div className='home_sec3_about_info'>
              <div className='home_sec3_about_info_t'>О нас</div>
              <div className='home_sec3_about_info_s'>
                <p className='home_sec3_about_info_p'>
                  Короткое описание на главную страницу: Vapebox – магазин
                  электронных сигарет нового уровня. Наши главные ценности – это
                  высокое качество, уникальный стиль и лучшие товары на рынке.
                  Мы специализируемся на розничной и оптовой торговле
                  одноразовыми электронными сигаретами, а также на продаже наших
                  франшиз. В нашем магазине представлен широкий ассортимент
                  товаров – от хитов продаж до ярких новинок рынка.
                </p>
                <p className='home_sec3_about_info_p'>
                  Миссия Vapebox – развивать культуру вейпинга по всей России.
                </p>
                <p className='home_sec3_about_info_p'>
                  Переверните свой взгляд на мир электронных сигарет с Vapebox!
                </p>
              </div>
              <div className='home_sec3_about_info_btn'>
                <NavLink to='/new' className='home_sec3_about_info_link'>
                  Подробнее
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <section className='home_sec2 home_sec2_2'>
          <div className='sectionBlock'>
            <div className='sectionBlock_title'>Блог</div>
            <NavLink to='/new' className='sectionBlock_url sectionBlock_url_blog'>
              Смотреть все
            </NavLink>
          </div>
          <div className='home_sec5_article'>
            <ArticleComp
              data={[
                { title: 'Название статьи', btnLink: '/12324' },
                { title: 'Название статьи', btnLink: '/12324' },
              ]}
            />
          </div>
        </section>

        <section className='home_sec2 home_sec2_3'>
          <div className='sectionBlock'>
            <div className='sectionBlock_title'>Магазины</div>
          </div>
          <div className='home_sec6_shops'>
            <div>
              <AdressMap
                data={[
                  {
                    name: 'Название магазина',
                    open: '28.01.2022',
                    adress: 'г. Москва, Дазоревский проезд 1А, к2',
                    metro: 'м. Ботанический сад',
                    time: 'Ежедневно с 10:00 до 22:00',
                  },
                  {
                    name: 'Название магазина',
                    open: '28.01.2022',
                    adress: 'г. Москва, Дазоревский проезд 1А, к2',
                    metro: 'м. Ботанический сад',
                    time: 'Ежедневно с 10:00 до 22:00',
                  },
                ]}
              />
            </div>
            <iframe
              className='home_sec6_shops_map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.9332891980457!2d37.58591921591531!3d55.794396280564435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549f9955cec45%3A0xd70fa20ab957ac75!2z0KHQsNCy0LXQu9C-0LLRgdC60LjQuSDQstC-0LrQt9Cw0Ls!5e0!3m2!1sru!2sru!4v1643743057128!5m2!1sru!2sru'
              width='712'
              height='432'
              loading='lazy'
            ></iframe>
          </div>
          <div className='home_sec2_new_s6'>Точки</div>
        </section>
      </div>
    </section>
  );
};

export default Home;
