import { NavLink } from 'react-router-dom';
import './Title.scss';

const Title = ({ title, linkUrl, linkName }) => {
  return (
    <section className='title'>
      <div className='titleName'>{title}</div>
      {linkName && (
        <NavLink className='titleUrl' to={`/${linkUrl}`}>
          {linkName}
        </NavLink>
      )}
    </section>
  );
};

export default Title;
