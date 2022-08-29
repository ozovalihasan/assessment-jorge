import Img1 from './images/Image1.png'
import Img2 from './images/Image2.png'
import Img3 from './images/Image3.png'
import Img4 from './images/Image4.png'
import Img5 from './images/Image5.png'
import Img6 from './images/Image6.png'
import Img7 from './images/Image7.png'


function App() {

  return (
    
    <div className="h-screen bg-slate-50 font-custom p-16 text-[15px] ">
      <div className='w-full flex items-center'>
        <h1 className="text-7xl font-black text-center w-2/3 m-auto mt-16 mb-16">
          We make creative media that <span className='text-blue-500'>adds value</span> 
        </h1>
      </div>
      <div className="grid grid-cols-3 [&>div]:h-64 [&_h2]:font-black [&_h2]:text-[24px] [&_li]:list-disc [&_li]:font-bold [&_li]:list-inside [&_li]:marker:text-orange-500 ">
        <div className='flex m-4 rounded-xl bg-white'>
          <div className='w-1/3 bg-red-200 rounded-l-xl'>
            <img src={Img1} alt="" className='h-1/2'/>
            <img src={Img2} alt="" className='h-1/2'/>
          </div>
          <div className='w-2/3 p-8'>
            <h2 className=''>
              Photography
            </h2>
            <ul>
              <li>Drone Photography</li>
              <li>Interiors</li>
              <li>Exteriors / Architectural</li>
            </ul>
            <div>
              Every photograph we produce finds the beauty in your property while serving as a profitable asset.
            </div>
          </div>
        </div>
        
        <div className='flex m-4 rounded-xl bg-white'>
          <div className='w-1/3 bg-red-200 rounded-l-xl'>
            <img src={Img3} alt="" className='object-cover h-full '/>
          </div>
          <div className='w-2/3 p-8'>
            
            <div>
              <h2>
                Virtual Staging
              </h2>
              <div>
                Our staging will help you sell the potential of your space. We can work off of our own photography or photos you provide.
              </div>
            </div>
          </div>
        
        </div>
        <div className='flex m-4 rounded-xl bg-white'>
          <div className='w-1/3 bg-red-200 rounded-l-xl'>
            <img src={Img4} alt="" className='object-cover h-full '/>
          </div>
          <div className='w-2/3 p-8'>
            <h2>Renderings</h2>
            <ul>
              <li>Interiors </li>
              <li>Exteriors</li>
            </ul>
            <div>
              Renderings are the gold standard in pre-construction marketing.
            </div>
          </div>
        
        </div>
        <div className='flex m-4 rounded-xl bg-white'>
          <div className='w-1/3 bg-red-200 rounded-l-xl'>
            <img src={Img5} alt="" className='object-cover h-full '/>
          </div>
          <div className='w-2/3 p-8'>
            <h2>
              Interactive Tours
            </h2>
            <ul>
              <li>Matterport</li>
              <li>Video Walkthroughs</li>
            </ul>
            <div>
              Give your audience the ability to explore your property without requiring in-person travel.
            </div>
          </div>
        
        </div>
        
        <div className='flex m-4 rounded-xl bg-white'>
          <div className='w-1/3 bg-red-200 rounded-l-xl'>
            <img src={Img6} alt="" className='object-cover h-full '/>
          </div>
          <div className='w-2/3 p-8'>
            <h2>
              Floor Plans
            </h2>
            <ul>
              <li>On-site Measure</li>
              <li>2D Floor Plans</li>
              <li>3D Floor Plans</li>
            </ul>
            <div>
              Give your audience the ability to explore your property without requiring in-person travel.
            </div>
          </div>
        
        </div>

        <div className='flex m-4 rounded-xl bg-white'>
          <div className='w-1/3 bg-red-200 rounded-l-xl'>
            <img src={Img7} alt="" className='object-cover h-full '/>
          </div>
          <div className='w-2/3 p-8'>
            <h2>
              Video
            </h2>
            <ul>
              <li>Drone Cinematography</li>
              <li>Interiors</li>
              <li>Exteriors / Architectural</li>
            </ul>
            <div>
              Video content has higher engagement and will help your property stand out online.
            </div>
          </div>
        
        </div>
        

        
      
      </div>
      <div className='w-full flex items-center'>
        <button className='w-64 m-auto p-2 my-16 bg-slate-700 text-white rounded-md font-bold'>
          Get STARTED
        </button>
      </div>
      
    </div>
  )
}

export default App
