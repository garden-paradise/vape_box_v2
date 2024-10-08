import { NavLink } from 'react-router-dom';
import './Recipient.scss';
import BuyProduct from './reuse/BuyProduct/BuyProduct';

const Recipient = () => {
  return (
    <section className='recipient'>
      <div className='recipient_title'>
        <div className='recipient_title_left'>
          <div className='recipient_title_left-name'>Здравствуйте, Анна!</div>
          <div className='recipient_title_left-site'>
            Вы оформили заказ на сайте Vape-box.ru
          </div>
          <div className='recipient_title_left-num'>Заказ №42233</div>
        </div>
        {/* <div className='recipient_title-right'></div> */}
        <NavLink to='/' className='recipient_title-right'>
          Вернуться на главную
        </NavLink>
      </div>

      <div className='recipient_sec'>
        <div className='recipient_sec_left'>
          <BuyProduct
            data={[
              {
                name: 'Smoant Battlestar Baby Pod Kit',
                color: 'черно-зеленый',
                taste: 'кислое яблоко',
                count: 1,
              },
              {
                name: 'Smoant Battlestar Baby Pod Kit',
                color: 'черно-зеленый',
                taste: 'кислое яблоко',
                count: 1,
              },
            ]}
          />
          <div className='recipient_sec_leftInfo'>
            <div className='recipient_sec_leftInfo-up'>
              <div>
                <div className='recipient_sec_leftInfo-leftTitle'>
                  Дата заказа
                </div>
                <div className='recipient_sec_leftInfo-leftSubtitle'>
                  01.02.2022
                </div>
              </div>
              <div>
                <div className='recipient_sec_leftInfo-leftTitle '>
                  Адрес магазина{' '}
                </div>
                <div className='recipient_sec_leftInfo-leftSubtitle leftSubtitleAdress'>
                  м. Ботанический сад Лазоревый проезд 1А, к2
                </div>
              </div>
            </div>

            <div className='recipient_sec_leftInfo-down'>
              <div className='recipient_sec_leftInfo-downLeft'>
                <div>
                  <div className='recipient_sec_leftInfo-leftTitle'>
                    Статус заказа
                  </div>
                  <div className='recipient_sec_leftInfo-leftSubtitle'>
                    В обработке
                  </div>
                </div>
                <div className='recipient_sec_leftInfo-leftTitle'>
                  Оплата наличными при получении
                </div>
              </div>
              <div>
                <div className='recipient_sec_leftInfo-leftTitle '>
                  Получатель
                </div>
                <div className='recipient_sec_leftInfo-leftSubtitle'>
                  Малинина Анна
                </div>
                <div className='recipient_sec_leftInfo-leftSubtitle'>
                  +7 925 567 54 12
                </div>
                <div className='recipient_sec_leftInfo-leftSubtitle'>
                  hdhjdhbf@gmail.com
                </div>
              </div>
            </div>
          </div>
          <NavLink className='' to='/account'>
            <button className='btnGeneral recipient_sec-btn'>
              Личный кабинет
            </button>
          </NavLink>
        </div>

        <div className='recipient_sec_right'>
          <div className='recipient_sec_right-sum'>
            <div className='recipient_sec_right-sumTitle'>Сумма заказа</div>
            <div className='recipient_sec_right-sumNum'>
              <span>3980 </span>
              <span>₽</span>
            </div>
          </div>

          <div className='recipient_sec_right-itog'>
            <div className='recipient_sec_right-itogTitle'>Итого:</div>
            <div className='recipient_sec_right-itogNum'>
              <span>3980 </span>
              <span>₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipient;
