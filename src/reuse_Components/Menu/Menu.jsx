import './Menu.scss';
import { NavLink } from 'react-router-dom';
import Caret from '../../images/header/CaretDown.svg';

const Menu = ({ data }) => {
  return (
    <nav >
      <ul className='topmenu'>
        {data.map((item) => (
          <li className='NavLink_lis'>
            <img src={item.img} alt='img' />
            <div className='NavLink_link_div'>
              {item.name}
              <img className='NavLink_link_img' src={Caret} alt='images' />
            </div>
            <ul className='submenu'>
              {item.subname.map((item) => (
                <li className='submenu_li'>
                  <NavLink to={item.linkSubName} className='NavLink_li'>
                    <a className='submenu_a' href=''>
                      {item.subName}
                    </a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
