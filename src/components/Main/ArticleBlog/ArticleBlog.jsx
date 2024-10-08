import './ArticleBlog.scss';
import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import { Field, Form } from 'react-final-form';
import { emailValidator } from '../../../utils/validators';
import vk from './../../../images/footer/vk.svg';
import inst from './../../../images/footer/inst.svg';
import tlg from './../../../images/footer/TelegramLogo.svg';
import facebook from './../../../images/footer/face.svg';
import { NavLink } from 'react-router-dom';
import PopularProduct from './reuse/PopularProduct/PopularProduct';

const onSubmit = (values) => {
  console.log(values);
};

const ArticleBlog = () => {
  return (
    <section className='PageBottom articleBlog'>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'reviews', name: 'Блог', active: false },
          { url: 'reviews', name: 'Обзор бренда H5 Lux', active: true },
        ]}
      />
      <div className='articleBlog-title'>Обзор бренда H5 Lux</div>
      <div className='articleBlog-authors'>
        <div className='articleBlog-authorsName'>Анна Юркова</div>
        <div>10.03.2022</div>
      </div>
      <div className='articleBlog-section'>
        <div>
          <div className='articleBlog-img'></div>
          <div className='articleBlog-text'>
            <p className='articleBlog-textP'>
              Сегодня в меню – обзор на одноразовые электронные сигареты H5 Lux.
              Обещаем, будет вкусно!
            </p>
            <p className='articleBlog-textP'>
              H5 Lux – флагман компании H5 аж на 3000 затяжек. Первое, на что
              хочется обратить внимание – приятная на ощупь матовая текстура и
              градиентный дизайн – актуальное решение.
            </p>
            <p className='articleBlog-textP'>
              Еще важный момент – наличие разъема USB Type-C для подзарядки. С
              учетом того, что количество затяжек довольно внушительное, а
              ёмкость аккумулятора – 650 mAh, дополнительная зарядка просто
              необходима.
            </p>
            <p className='articleBlog-textP'>
              Линейка включает в себя 16 вкусов – достаточно широкая палитра,
              состоящая как из классических вкусов (кислое яблоко, освежающая
              мята, пина колада), так и из более необычных (мороженое таро,
              киви-маракуйя-гуава, ледяная кола). Объем жидкости – 10 мл.
            </p>
            <p className='articleBlog-textP'>
              Содержание никотина – 2%, по ощущениям – это уровень HARD. H5 Lux
              быстро утоляет никотиновый голод.
            </p>
            <p className='articleBlog-textP'>
              Наконец, нельзя не отметить кольцевую RGB-подсветку - приятный
              бонус от h5russia в комплекте с топовыми техническими
              характеристиками и стильным дизайном.
            </p>
            <p className='articleBlog-textP'>
              Стоимость H5 Lux на 3000 затяжек в Vapebox shop – 795₽.
            </p>
            <p className='articleBlog-textP'>
              Очень заманчивая цена для такого достойного устройства. Вывод:
              попробовать действительно стоит.
            </p>
          </div>
        </div>
        <div>
          <div className='articleBlog-emailForm'>
            <div className='articleBlog-emailFormTitle'>Присоединяйся!</div>
            <div className='articleBlog-emailFormSubtitle'>
              Акции, новости и обновления.
            </div>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form className='articleBlog-form' onSubmit={handleSubmit}>
                  <Field name='email' validate={emailValidator}>
                    {({ input, meta }) => (
                      <input
                        className={`articleBlog-formEmail ${
                          meta.error && meta.touched && 'articleBlog-formError'
                        }`}
                        {...input}
                        type='email'
                        placeholder='E-mail'
                      />
                    )}
                  </Field>
                  <button className='articleBlog-btn' type='submit'>
                    Подписаться
                  </button>
                </form>
              )}
            />
            <div className='articleBlog-emailFormSubtitle'>
              100% бесплатно, отпишитесь в любое время
            </div>
          </div>
          <div className='articleBlog-popularProduct'>
            <div className='articleBlog-leftTitle'>Популярное</div>
            <PopularProduct
              data={[
                {
                  name: 'Название',
                  price: 1990,
                },
                {
                  name: 'Название',
                  price: 1990,
                },
              ]}
            />
          </div>
          <div className='articleBlog-social'>
            <div className='articleBlog-leftTitle'>Будь с нами</div>
            <div className='articleBlog-socialBlock'>
              <NavLink to='/recipient' className='NavLink'>
                <img src={vk} alt='vkIMG' />
              </NavLink>
              <NavLink to='/recipient' className='NavLink'>
                <img src={inst} alt='instIMG' />
              </NavLink>
              <NavLink to='/recipient' className='NavLink'>
                <img src={tlg} alt='tlgIMG' />
              </NavLink>
              <NavLink to='/recipient' className='NavLink'>
                <img src={facebook} alt='facebookIMG' />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBlog;
