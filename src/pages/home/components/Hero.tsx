import { Container } from 'react-bootstrap';
import heroHomeImg from '@/assets/images/hero-home.jpeg';
import avatarHero from '@/assets/images/avatar-hero.jpeg';

const styleAvatar: object = {
    borderRadius: '50%',
    border: '3px solid #fff',
    width: '170px',
    height: '170px'
}

const Hero = () => {
    return (
        <div className="hero">
            <img className="hero-home" src={heroHomeImg} alt="heroHome" />
            <div
                className="d-flex flex-column align-items-center text-center"
                style={{ marginTop: '-85px' }}
            >
                <img src={avatarHero} style={styleAvatar} alt="avatar" />
                <h2 className="text-dark m-3">Shopee</h2>
                <p className="mx-4">Shopee</p>
            </div>
        </div>
    );
};

export default Hero;
