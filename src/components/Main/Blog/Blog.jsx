import Title from '../../../reuse_Components/Title/Title';
import './Blog.scss';
import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import MenuArticleBlog from './reuse/MenuArticleBlog/MenuArticleBlog';

const Blog = () => {
  return (
    <section className='PageBottom shops'>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'reviews', name: 'Блог', active: true },
        ]}
      />
      <Title title='Блог' />
      <MenuArticleBlog
        article={[
          {
            title: 'Обзор бренда H5 Lux',
            subtitle:
              'Сегодня в меню – обзор на одноразовые электронные сигареты H5 Lux. Обещаем, будет вкусно!',
          },
          {
            title: 'Название статьи ',
            subtitle:
              'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое...',
          },
          {
            title: 'Название статьи ',
            subtitle:
              'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое...',
          },
          {
            title: 'Название статьи ',
            subtitle:
              'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое...',
          },
        ]}
      />
    </section>
  );
};

export default Blog;
