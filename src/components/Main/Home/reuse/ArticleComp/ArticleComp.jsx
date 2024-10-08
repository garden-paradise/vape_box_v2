import { NavLink } from 'react-router-dom';
import './ArticleComp.scss';

const ArticleComp = ({ data }) => {
  return data.map((item) => (
    <section className='articleComp'>
      {/* <img className='newsMiniComp'src={item.image} alt='newsImg' /> */}
      <div className='articleComp_img'></div>
      <div className='articleComp_info'>
        <NavLink to={item.btnLink} className='articleComp_link'>
          {item.title}
        </NavLink>
      </div>
    </section>
  ));
};

export default ArticleComp;
