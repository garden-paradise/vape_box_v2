import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import './Catalog.scss';
import filter from './../../../images/main/all/filter.svg';
import CardProduct from '../../../reuse_Components/CardProduct/CardProduct';
import Accordion from './reuse/Accordion/Accordion';

const Catalog = () => {
  return (
    <section className='catalog'>
      <div className='container'>
        <NavLinks
          data={[
            { url: 'home', name: 'Главная', active: false },
            { url: 'reviews', name: 'Обзоры', active: true },
          ]}
        />
        <div className='catalog_sec'>
          <div className='catalog_sec_left'>
            <div className='catalog_sec-leftTitle'>
              <img
                className='catalog_sec-leftTitleImg'
                src={filter}
                alt='filterImg'
              />
              <div>Фильтр</div>
            </div>
            <div className='catalog_sec-leftBlock'>
              <div className='catalog_sec-leftBlockSale'>
                <input
                  type='checkbox'
                  id='notifications'
                  name='subscribe'
                  className='basketBlock_recipient-formCheckbox'
                ></input>
                <label
                  className='basketBlock_recipient-formLabel'
                  htmlFor='notifications'
                >
                  Товары со скидкой
                </label>
              </div>
              <Accordion name='Цена'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <Accordion name='Бренд'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <Accordion name='Группа вкусов'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <Accordion name='Вкус'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <Accordion name='Тип затяжек'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <Accordion name='Крепость'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <Accordion name='PG/VG'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <Accordion name='Страна'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <Accordion name='Диапазон мощности'>
                <div>dfпвапвапваdg</div>
              </Accordion>
              <div className='catalog_sec-leftBlockColor'>
                Цвет
                <div className='catalog_sec-leftBlockColorBlock'>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                  <div className='catalog_sec-leftBlockColorCircle'></div>
                </div>
              </div>
              <button className='btnGeneral catalog_sec-leftBtn'>
                Применить
              </button>
              <div className='catalog_sec-leftBlockReset'>Сбросить фильтр</div>
            </div>
          </div>

          <div className='catalog_sec_right'>
            <CardProduct
              date={[
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
                { name: 'Название товара', sum: '1300', countMessage: '3' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
