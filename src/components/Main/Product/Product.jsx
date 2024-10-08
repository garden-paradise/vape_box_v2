import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import ImageGallery from 'react-image-gallery';
import './Product.scss';
import b from './../../../images/main/product/Rectangle103.png';
import s from './../../../images/main/product/Rectangle103.png';
import MapPin from './../../../images/main/product/MapPin.svg';
import Package from './../../../images/main/product/Package.svg';
import comment from './../../../images/header/ChatCircle.svg';
import ColorCount from '../../../reuse_Components/ColorCount/ColorCount';
import InsideMenu from './reuse/InsideMenu/InsideMenu';
import CardProduct from '../../../reuse_Components/CardProduct/CardProduct';

const imagesSlider = [
  {
    original: b,
    thumbnail: s,
  },
  {
    original: b,
    thumbnail: s,
  },
  {
    original: b,
    thumbnail: s,
  },
  {
    original: b,
    thumbnail: s,
  },
  {
    original: b,
    thumbnail: s,
  },
];
const optionSlider = {
  showIndex: false,
  showBullets: false,
  infinite: true,
  showThumbnails: true,
  showFullscreenButton: false,
  showGalleryFullscreenButton: false,
  showPlayButton: false,
  showGalleryPlayButton: false,
  showNav: false,
  isRTL: false,
  slideDuration: 450,
  slideInterval: 2000,
  slideOnThumbnailOver: false,
  thumbnailPosition: 'left',
  useWindowKeyDown: true,
};

const Product = () => {
  return (
    <section className='product'>
      <div className='container'>
        <NavLinks
          data={[
            { url: 'home', name: 'Главная', active: false },
            { url: 'home', name: 'Главная', active: false },
            { url: 'home', name: 'Главная', active: false },
            { url: 'reviews', name: 'Обзоры', active: true },
          ]}
        />
        <div className='product_sec1'>
          <div className='product_sec1_slider'>
            <ImageGallery items={imagesSlider} {...optionSlider} />
          </div>
          <div className='product_sec1_slider_info'>
            <div className='product_info_name'>Название продукта</div>
            <div className='product_info_subtitle'>
              <div>
                <span>Арт.:</span> &#160;
                <span> 242424</span>
              </div>
              <div className='product_info_subtitle_img'>
                <img src={comment} alt='image' /> &#160;
                <div>3</div>
              </div>
              <div>
                <span>Бренд:</span> &#160;
                <span className='product_info_subtitle_brend'>H5</span>
              </div>
            </div>
            <div className='product_info_subtitle_color'>
              <div className='product_info_subtitle_color_name'>
                <span>Цвет: </span>
                <span>Черно-зеленый</span>
              </div>
              <div className='product_info_subtitle_color_block'>
                <div className='product_info_subtitle_color_circle block1'></div>
                <div className='product_info_subtitle_color_circle block2'></div>
                <div className='product_info_subtitle_color_circle block3'></div>
                <div className='product_info_subtitle_color_circle block4'></div>
                <div className='product_info_subtitle_color_circle block5'></div>
              </div>
            </div>
            <ColorCount />
            <button className='product_info_btn'>Добавить в корзину</button>
            <div className='product_info_delivery'>
              {/* <div className='product_info_delivery_title'>
                Доставка по Москве
              </div> */}
              <div className='product_info_delivery_divs_option'>
                <div className='product_info_delivery_option'>
                  <img
                    className='product_info_delivery_option_img'
                    src={MapPin}
                    alt='image'
                  />
                  <div>
                    <div>Самовывоз</div>
                    <div className='product_info_delivery_date'>
                      с 21.01 - бесплатно
                    </div>
                  </div>
                </div>
                {/* <div className='product_info_delivery_option'>
                  <img
                    className='product_info_delivery_option_img'
                    src={Package}
                    alt='image'
                  />
                  <div>
                    <div>Курьером</div>
                    <div className='product_info_delivery_date'>
                      с 21.01 - бесплатно
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='product_sec2'>
          <InsideMenu
            data={[
              { link: 'О товаре', show: true },
              { link: 'Характеристика', show: false },
              { link: 'Коментарии', show: false },
              { link: 'Наличие в магазинах', show: false },
            ]}
            characteristic={[
              { name: 'Бренд', value: 'Название' },
              { name: 'Тип', value: 'Название' },
              { name: 'Максимальная мощность', value: 'Название' },
              { name: 'Аккумулятор', value: 'Название' },
              { name: 'Размер', value: 'Название' },
              { name: 'Вес', value: 'Название' },
              { name: 'Напряжение', value: 'Название' },
              { name: 'Испаритель', value: 'Название' },
              { name: 'Зарядка', value: 'Название' },
              { name: 'Крепость', value: 'Название' },
            ]}
            shops={[
              { adress: 'Москва', availability: true },
              { adress: 'Москва', availability: true },
              { adress: 'Москва', availability: true },
              { adress: 'Москва', availability: true },
              { adress: 'Москва', availability: true },
            ]}
          />
        </div>
        <div className='product_sec3'>
          <div className='product_sec3-title'>Вас может заинтересовать</div>
          <CardProduct
            date={[
              { name: 'Название товара', sum: '1300', countMessage: '3' },
              { name: 'Название товара', sum: '1300', countMessage: '3' },
              { name: 'Название товара', sum: '1300', countMessage: '3' },
              { name: 'Название товара', sum: '1300', countMessage: '3' },
            ]}
          />
          <div className='product_sec3-bottom'>Актуальное</div>
        </div>
      </div>
    </section>
  );
};

export default Product;
