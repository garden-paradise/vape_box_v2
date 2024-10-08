import './MenuArticleBlog.scss';
import AspectRatio from 'react-aspect-ratio';
import { NavLink } from 'react-router-dom';

const MenuArticleBlog = ({ article }) => {
  return (
    <section className='menuArticleBlogs'>
      {article.map((item) => (
        <section className='menuArticleBlog'>
          <AspectRatio className='menuArticleBlog-aspectRatio'>
            {/* <img src={} alt='productIMG' /> */}
          </AspectRatio>
          <NavLink to='/blog/1' className='NavLink '>
            <div className='menuArticleBlog-title'>{item.title} </div>
          </NavLink>
          <div className='menuArticleBlog-subtitle'>{item.subtitle}</div>
        </section>
      ))}
    </section>
  );
};

export default MenuArticleBlog;
