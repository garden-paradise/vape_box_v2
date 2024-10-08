import { useState } from 'react';
import './InsideMenu.scss';

const InsideMenu = ({ data, characteristic, shops }) => {
  const [toggleMenu, setToggleMenu] = useState('О товаре');

  let toggle = (item) => {
    console.log(item);
    return setToggleMenu(item);
  };

  return (
    <section className='insideMenu'>
      <nav className='insideMenu_nav'>
        <ul className='insideMenu_ul'>
          {data.map((item) => (
            <li
              onClick={() => toggle(item.link)}
              className={`insideMenu_li ${item.show && 'active_menu'} `}
            >
              {item.link}
            </li>
          ))}
        </ul>
      </nav>
      {toggleMenu === 'О товаре' && (
        <div className='insideMenu_block1'>
          <div className='insideMenu_block info_block_1'>
            <div className='insideMenu_title'>О товаре</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              provident animi nihil illum asperiores hic veritatis fugiat vero,
              tempora ad quod, magni in ipsa nobis, ipsum laudantium rerum eius
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem provident animi nihil illum asperiores hic veritatis
              fugiat vero, tempora ad quod, magni in ipsa nobis, ipsum
              laudantium rerum eius atque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolorem provident animi nihil illum
              asperiores hic veritatis fugiat vero, tempora ad quod, magni in
              ipsa nobis, ipsum laudantium rerum eius atque! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolorem provident animi
              nihil illum asperiores hic veritatis fugiat vero, tempora ad quod,
              magni in ipsa nobis, ipsum laudantium rerum eius atque!
            </div>
          </div>
          <div className='insideMenu_block'>
            <div className='insideMenu_title'>Комплектация</div>
            <div className='insideMenu_block_complects'>
              <div className='insideMenu_block_complect'>
                <div className='insideMenu_block_complect_num'>1</div>
                <div className='insideMenu_block_complect_name'>Название</div>
              </div>
              <div className='insideMenu_block_complect'>
                <div className='insideMenu_block_complect_num'>1</div>
                <div className='insideMenu_block_complect_name'>Название</div>
              </div>
              <div className='insideMenu_block_complect'>
                <div className='insideMenu_block_complect_num'>1</div>
                <div className='insideMenu_block_complect_name'>Название</div>
              </div>
              <div className='insideMenu_block_complect'>
                <div className='insideMenu_block_complect_num'>1</div>
                <div className='insideMenu_block_complect_name'>Название</div>
              </div>
              <div className='insideMenu_block_complect'>
                <div className='insideMenu_block_complect_num'>1</div>
                <div className='insideMenu_block_complect_name'>Название</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {toggleMenu === 'Характеристика' && (
        <div className='insideMenu_block2 display_none'>
          <div className='insideMenu_title'>Характеристика</div>
          <div className='insideMenu_block2_infos'>
            {characteristic.map((item) => (
              <div className='insideMenu_block2_info'>
                <div className='insideMenu_block2_info_name'>{item.name}</div>
                <div className='insideMenu_block2_value'>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {toggleMenu === 'Коментарии' && (
        <div className='insideMenu_block3 display_none'>
          <div className='insideMenu_title'>Комментарии</div>
          <div className='insideMenu_block3_comments'>
            <div className='insideMenu_block3_comment'></div>
            <div className='insideMenu_block3_comment'></div>
          </div>
        </div>
      )}
      {toggleMenu === 'Наличие в магазинах' && (
        <div className='insideMenu_block4 display_none'>
          <div className='insideMenu_title'>Наличие в магазинах</div>
          <div className='insideMenu_block4_availabilitys'>
            {shops.map((item) => (
              <div className='insideMenu_block4_availability'>
                <div className='insideMenu_block4_availability_adress'>
                  {item.adress}
                </div>
                <div className='insideMenu_block4_availability_'>
                  <div className='cardProduct_comments_img'>
                    <span>много</span>
                    <div className='cardProduct_comments_img_block block1'></div>
                    <div className='cardProduct_comments_img_block block2'></div>
                    <div className='cardProduct_comments_img_block block3'></div>
                    <div className='cardProduct_comments_img_block block4'></div>
                    <div className='cardProduct_comments_img_block block5'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default InsideMenu;
