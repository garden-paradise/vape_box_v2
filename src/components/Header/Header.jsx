import NavigLink from '../../reuse_Components/NavigLink/NavigLink';
import './Header.scss';
import map from '../../images/header/MapPinLine.svg';
import User from '../../images/header/User.svg';
import Shopping from '../../images/header/Shopping.svg';
import HeartW from '../../images/header/HeartW.svg';
import ArrowsClockwiseW from '../../images/header/ArrowsClockwiseW.svg';
import Search from '../../images/header/MagnifyingGlass.svg';
import logo from '../../images/header/logo.svg';
import newMenu from '../../images/header/newMenu.png';
import POD from '../../images/header/POD.png';
import Vaip from '../../images/header/Vaip.png';
import Water from '../../images/header/Water.png';
import Automaz from '../../images/header/Automaz.png';
import Menu from '../../reuse_Components/Menu/Menu';
import { NavLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form';

const onSubmit = (values) => {
  console.log(values);
};

const Header = () => {
  return (
    <header className='header'>
      <div className='header_sec1'>
        <NavigLink
          data={[
            {
              link: '/',
              name: 'Доставка',
            },
            { link: '/blog', name: 'Блог' },
            { link: '/contacts', name: 'Контакты' },
            { link: '/about', name: 'О нас' },
          ]}
        />
        <div className='header_sec1_right'>
          <NavLink className='NavLink' to='/shops'>
            <figure className='header_sec1_right_shop'>
              <img src={map} alt='imageMap' />
              <figcaption className='header_sec1_right_title'>
                Магазины
              </figcaption>
            </figure>
          </NavLink>
          <a className='header_sec1_right_tel' href='tel: 84995145626'>
            8 499 514 56 26
          </a>
        </div>
      </div>
      <div className='container'>
        <div className='header_sec2'>
          <NavLink className='header_sec2_logo' to='/new'>
            <img src={logo} alt='logoImage' />
          </NavLink>

          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form className='header_sec2_formDiv' onSubmit={handleSubmit}>
                <Field name='searchText'>
                  {({ input }) => (
                    <input
                      className='header_sec2_form'
                      {...input}
                      type='text'
                      placeholder='Введите для поиска'
                    />
                  )}
                </Field>
                <div className='header_sec2_formImg'>
                  <img src={Search} alt='searchImg' />
                </div>
              </form>
            )}
          />
          <div className='header_sec2_right'>
            <NavLink to='/comparison'>
              <img src={ArrowsClockwiseW} alt='logoImage' />
            </NavLink>
            <NavLink to='/new'>
              <img src={HeartW} alt='logoImage' />
            </NavLink>
            <NavLink to='/basket'>
              <img src={Shopping} alt='logoImage' />
            </NavLink>
            <NavLink to='/account'>
              <img src={User} alt='logoImage' />
            </NavLink>
          </div>
        </div>

        <div className='header_sec3'>
          <Menu
            data={[
              {
                linkName: '/',
                img: newMenu,
                name: 'Новинки',
                subname: [
                  { subName: 'Дом', linkSubName: '/1' },
                  { subName: 'Квартира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
              {
                linkName: '/',
                img: POD,
                name: 'POD-системы',
                subname: [
                  { subName: 'йцуцйу', linkSubName: '/1' },
                  { subName: 'Кварцуцавцтира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
              {
                linkName: '/',
                img: Vaip,
                name: 'Вейпы',
                subname: [
                  { subName: 'йцуцйу', linkSubName: '/1' },
                  { subName: 'Кварцуцавцтира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
              {
                linkName: '/',
                img: Water,
                name: 'Жидкости',
                subname: [
                  { subName: 'йцуцйу', linkSubName: '/1' },
                  { subName: 'Кварцуцавцтира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
              {
                linkName: '/',
                img: Automaz,
                name: 'Атомайзеры',
                subname: [
                  { subName: 'йцуцйу', linkSubName: '/1' },
                  { subName: 'Кварцуцавцтира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
            ]}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
