
import ImgSlider from './HomeComponent/Slider/ImgSlider';
import Notice from './HomeComponent/Notice/Notice';
import MentorsCard from './HomeComponent/MentorsCard/MentorsCard';
import Gallery from './HomeComponent/Gallery/Gallery';
import line from "../../assets/Img/line.png"
import { Link } from 'react-router-dom';
import StudentComment from './HomeComponent/StudentComment/StudentComment';
import Card from './HomeComponent/Card/Card';

const Home = () => {
    
    return (
        <div>
            <ImgSlider/>
         
            <Notice/>
            <StudentComment/>
           
  {/* title  */}
  <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Calculate CGPA </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        <p className="text-[18px] font-lato  dark:text-gray-200">Many students have a question that how to use the CGPA Calculator? What is the Full Meaning of CGPA? <Link to='/cgpa' className=' text-blue-600 hover:underline'>Learn More</Link></p>
        </div>
<Card/>
            <Gallery/>

            <MentorsCard/>
            <div className='mt-40 text-center'>
            <h2 className=' text-4xl font-semibold text-white'>Student Special: Discounted rates on tropical getaways!</h2>
            <p className='p-8 text-gray-100'>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
        </div>
        </div>

    );
};

export default Home;