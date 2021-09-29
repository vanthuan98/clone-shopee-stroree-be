import styles from './index.less';
import homeHeroImg from '../assets/images/home-hero.jpg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <img src={homeHeroImg} alt="" />
      <Button>Button</Button>
    </div>
  );
}
