import { useState } from 'react'

function App() {

  return (
    
    <div className="h-screen bg-slate-50 font-custom">
      <div className="text-4xl text-center">
        We make creative media that adds value
      </div>
      <div className="grid grid-cols-3">
        <div>
          <div>
            Photography
          </div>
          <ul>
            
            <li>Drone Photography</li>
            <li>Interiors</li>
            <li>Exteriors / Architectural</li>
          </ul>
        </div>
        <div>
          Every photograph we produce finds the beauty in your property while serving as a profitable asset.
        </div>
        <div>
          <div>
            Virtual Staging
          </div>
          <div>
            Our staging will help you sell the potential of your space. We can work off of our own photography or photos you provide.
          </div>
        </div>
        <div>
          <ul>
            <li>Renderings</li>
            <li>Interiors </li>
            <li>Exteriors</li>
          </ul>
        </div>
        <div>
          Renderings are the gold standard in pre-construction marketing.
        </div>

        <div>
          <div>
            Interactive Tours
          </div>
          <ul>
            <li>Matterport</li>
            <li>Video Walkthroughs</li>
          </ul>
          <div>
            Give your audience the ability to explore your property without requiring in-person travel.
          </div>
        </div>
        
        <div>
          <div>
            Floor Plans
          </div>
          <ul>
            <li>On-site Measure</li>
            <li>2D Floor Plans</li>
            <li>3D Floor Plans</li>
          </ul>
          <div>
            Give your audience the ability to explore your property without requiring in-person travel.
          </div>
        </div>

        <div>
          <div>
            Video
          </div>
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
      <div className='w-full flex items-center  '>
        <button className='w-64 m-auto p-2 bg-slate-700 text-white rounded-md'>
          Get STARTED
        </button>
      </div>
      
    </div>
  )
}

export default App
