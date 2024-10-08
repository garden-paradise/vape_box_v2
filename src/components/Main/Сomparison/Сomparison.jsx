import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import Title from '../../../reuse_Components/Title/Title';
import './Сomparison.scss';
import Dropdown from 'react-dropdown';
import Card from './reuse/Card/Card';

// let onSelect = (option) => showBusinessCards(option.value);

const options = [
  { label: 'Бренды', value: 'brand', className: 'myOptionClassName' },
  {
    label: 'Франчайзинг',
    value: 'franchising',
    className: 'myOptionClassName',
  },
  {
    label: 'Розничные продажи',
    value: 'retailSale',
    className: 'myOptionClassName',
  },
  {
    label: 'Оптовые продажи',
    value: 'wholeSale',
    className: 'myOptionClassName',
  },
];

let characteristicInfo = [
  {
    fortress: '0мг/мл',
    nicotine: 'Нет',
    volume: '120мл',
    taste: 'Клубника',
    cold: 'Нет',
    country: 'Россия',
    availability: 'много',
  },
  {
    fortress: '0мг/мл',
    nicotine: 'Нет',
    volume: '120мл',
    taste: 'Клубника',
    cold: 'Нет',
    country: 'Россия',
    availability: 'много',
  },
  {
    fortress: '0мг/мл',
    nicotine: 'Нет',
    volume: '120мл',
    taste: 'Клубника',
    cold: 'Нет',
    country: 'Россия',
    availability: 'много',
  },
];

const Сomparison = () => {
  return (
    <section className='PageBottom сomparison'>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'reviews', name: 'Сравнение', active: true },
        ]}
      />

      <Title title='Сравнение товаров' />

      <section className='сomparison-prod'>
        <div className='сomparison-prodLeft'>
          <div className='сomparison-prodLeftCount'>3 товара</div>
          <Dropdown
            options={options}
            value={options[0]}
            // onChange={onSelect}
            controlClassName='сomparison-dropdownControl'
            menuClassName='сomparison-dropdownMenu'
            arrowClosed={<span className='сomparison-dropdownClosed' />}
            arrowOpen={<span className='сomparison-dropdownOpen' />}
          />
          <div className='сomparison-prodLeftCheckbox'>
            <input
              name='notifications'
              component='input'
              type='checkbox'
              id='notifications'
            ></input>
            <label htmlFor='notifications'>Только отличие</label>
          </div>

          <div className='сomparison-prodLeftCircles'>
            <div className='сomparison-prodLeftCircle'></div>
            <div className='сomparison-prodLeftCircle'></div>
          </div>
        </div>

        <div className='сomparison-prodRight'>
          <div className='сomparison-prodRightTitle'>
            Удалить все{' '}
            <span className='сomparison-prodRightDelete'>&#10006;</span>
          </div>
          <div className='сomparison-prodRightCarousel'>
            <Card
              info={[
                { title: 'Название товара', count: 1990 },
                { title: 'Название товара', count: 1990 },
                { title: 'Название товара', count: 1990 },
              ]}
            />
          </div>
        </div>
      </section>

      <section className='сomparison-characteristic'>
        <div className='сomparison-characteristicTitle'>Характеристики</div>
        <div className='сomparison-characteristicBlock'>
          <div className='сomparison-characteristicInfo'>
            <div className='сomparison-characteristicSub'>Крепость</div>
            <div className='сomparison-characteristicSub'>Солевой никотин</div>
            <div className='сomparison-characteristicSub'>Объем</div>
            <div className='сomparison-characteristicSub'>Вкус</div>
            <div className='сomparison-characteristicSub'>С холодком</div>
            <div className='сomparison-characteristicSub'>Страна</div>
            <div className='сomparison-characteristicSub'>
              Наличие в магазинах
            </div>
          </div>
          {characteristicInfo.map((item) => (
            <div className='сomparison-characteristicInfo'>
              <div className='сomparison-characteristicSub'>
                {item.fortress}
              </div>
              <div className='сomparison-characteristicSub'>
                {item.nicotine}
              </div>
              <div className='сomparison-characteristicSub'>{item.volume}</div>
              <div className='сomparison-characteristicSub'>{item.taste}</div>
              <div className='сomparison-characteristicSub'>{item.cold}</div>
              <div className='сomparison-characteristicSub'>{item.country}</div>
              <div className='сomparison-characteristicSub'>
                {item.availability}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Сomparison;
