import Title from '../../../reuse_Components/Title/Title';
import './About.scss';
import img_1 from './../../../images/main/comand/img_1.png';
import img_2 from './../../../images/main/comand/img_2.png';
import img_3 from './../../../images/main/comand/img_3.png';
import img_4 from './../../../images/main/comand/img_4.png';
import img_5 from './../../../images/main/comand/img_5.png';
import img_6 from './../../../images/main/comand/img_6.png';
import PeopleCard from './reuse/PeopleCard/PeopleCard';

const About = () => {
  return (
    <section className='PageBottom about'>
      <Title title='О нас' />

      <section>
        <div className='about-section'>
          <div className='about-info'>
            <div className='about-title'>Меняй правила игры с Vapebox!</div>
            <div>
              Vapebox – сеть магазинов электронных сигарет нового уровня.{' '}
            </div>
            <div>
              Наши главные ценности – это высокое качество, уникальный стиль и
              лучшие товары на рынке.
            </div>
            <div>
              Мы специализируемся на торговле POD-системами, вейпами, жидкостями
              и атомайзерами, а также на продаже наших франшиз. В розничных
              магазинах Vapebox представлен широкий ассортимент товаров – от
              одноразовых электронных сигарет до высокотехнологичных девайсов.
            </div>
            <div>
              Миссия Vapebox – развивать культуру вейпинга по всей России.
            </div>
          </div>
          <div className='about-img'></div>
        </div>
        <div className='about-section'>
          <div className='about-img'></div>
          <div className='about-info'>
            <div></div>
            <div>
              Зимой 2022 года в Москве открылись первые розничные магазины
              Vapebox. И это только начало! Во втором квартале этого года мы
              планируем запустить продажу франшиз.
            </div>
            <div>
              Vapebox – это игра, в которой ты уже победил и сам выбираешь
              главный приз.
            </div>
            <div>
              Мы постоянно обновляем ассортимент и расширяем каталог продукции,
              основываясь на предпочтениях покупателей. Каждый товар можно
              проверить на оригинальность.
            </div>
          </div>
        </div>
      </section>

      <section className='about-blockquote'>
        Vapebox – это игра, в которой ты уже победил и сам выбираешь главный
        приз.
      </section>

      <section className='about-sectionWhite'>
        <div className='about-section'>
          <div className='about-infoBlack'>
            <div className='about-title'>
              <b>Vapebox – для тех, кто:</b>
            </div>
            <div className='about-marker'>• хочет обновить свой арсенал</div>
            <div>
              Наш ассортимент включает в себя товары как от лидеров, так и от
              новых игроков в мире электронных сигарет.
            </div>
            <div className='about-marker'>
              • ценит качество и выбирает лучшее
            </div>
            <div>
              Только оригинальные бренды от официальных поставщиков. Качество
              нашей продукцией подтверждено сертификатами.
            </div>
            <div className='about-marker'>
              • хочет пообщаться с единомышленниками
            </div>
            <div>
              Наши продавцы-консультанты – настоящие профессионалы своего дела,
              которые дадут вам индивидуальные рекомендации по товарам и ответят
              на все вопросы.
            </div>
          </div>
          <div className='about-imgWhiteLeft'></div>
        </div>
        <div className='about-section'>
          <div className='about-imgWhiteRight'></div>
          <div className='about-infoBlack'>
            <div className='about-marker'>
              • хочет первым узнавать о трендах в мире вейпинга
            </div>
            <div>
              Мы всегда находимся в центре всех новинок и держим руку на пульсе
              актуальных трендов. Подписывайтесь на наш Instagram, чтобы быть в
              курсе новостей рынка.
            </div>
            <div className='about-marker'>• Открыт к ярким впечатлениям</div>
            <div>
              Если вы готовы удивляться и хотите почувствовать нашу особенную
              атмосферу, то приходите в наши магазины за положительными
              эмоциями.
            </div>
            <div>
              <b>Не отказывайте себе в удовольствии – загляните в Vapebox!</b>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Title title='Наша команда' />
        <PeopleCard
          people={[
            {
              img: img_1,
              name: 'Шефлер Алексей Юрьевич',
              position: 'Председатель правления',
            },
            {
              img: img_2,
              name: 'Мельников Денис Алексеевич ',
              position: 'Управляющий партнер',
            },
            {
              img: img_3,
              name: 'Стихарев Юрий Романович',
              position: 'Управляющий партнер',
            },
            {
              img: img_4,
              name: 'Козловский Денис Станиславович',
              position: 'Генеральный директор',
            },
            {
              img: img_5,
              name: 'Вольфовский Артем Игоревич',
              position: 'Исполнительный директор',
            },
            {
              img: img_6,
              name: 'Головин Султан Александрович',
              position: 'Операционный директор',
            },
          ]}
        />
      </section>
    </section>
  );
};

export default About;
