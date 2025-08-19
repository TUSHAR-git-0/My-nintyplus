import './Programs.css';

import program_1 from '../../assets/hum.jpg';
import program_2 from '../../assets/com.jpg';
import program_3 from '../../assets/sci.jpg';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <div className='programs flex flex-wrap justify-center'>
      <div className="program shadow-lg rounded-lg overflow-hidden m-4">
        <img src={program_1} alt="" className="w-full h-auto" />
        <div className="caption p-4">
          <img src={program_icon_1} alt="" className="w-8 h-8 mb-2" />
          <p className="text-center font-bold">ART'S</p>
        </div>
      </div>
      <div className="program shadow-lg rounded-lg overflow-hidden m-4">
        <img src={program_2} alt="" className="w-full h-auto" />
        <div className="caption p-4">
          <img src={program_icon_2} alt="" className="w-8 h-8 mb-2" />
          <p className="text-center font-bold">COMMERCE</p>
        </div>
      </div>
      <div className="program shadow-lg rounded-lg overflow-hidden m-4">
        <img src={program_3} alt="" className="w-full h-auto" />
        <div className="caption p-4">
          <img src={program_icon_3} alt="" className="w-8 h-8 mb-2" />
          <p className="text-center font-bold">SCIENCE</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
