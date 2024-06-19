import '../App.css';
import design from '../images/design.png';
import Slider from './Slider';

//home cover component
const HomeCover = () => {
    return (
        <>
        <div className="tag-div" style={{width: '100%', height: '50vh', backgroundColor: '#010101'}}>
            <h1 className="tag-line pacifico-regular" style={{color: 'white'}}> Handcrafted Elegance for You</h1>
            <img className='designImg' src={design} alt='design'></img>
        </div>
        <div className="hr-container">
    <hr className='custom-hr' />
  </div>
  {/* rendering slider component */}
  <Slider></Slider>
        </>
    )
};

export default HomeCover;