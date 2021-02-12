import axios from 'axios';
import style from './MainPage.module.scss';

const MainPage = () => {
  const handler = async () => {
    try {
      const response = await axios.get('http://localhost:8888');
      console.log(response, 'response');
    } catch (e) {
      console.log(e, 'ERROR');
    }
  };

  return (
    <div className={style.wrapper}>
      <p>Hello world!!!front</p>
      <button onClick={handler}>TOUCH ME</button>
    </div>
  );
};

export default MainPage;
