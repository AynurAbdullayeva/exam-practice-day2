import React from 'react'
import  "./Home.css"
import GlobalNetwork from "../../components/GlobalNetwork/Global"
import Change from '../../components/ChangeYou/Change'

const Home = () => {
  return (
   <>
   <div className="hero">
 
 <div> 
  <h1>Improved 
Production level <br />
with Robotics</h1> <br />
<p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS
</p> <br />
<button className='btn' style={{padding:"15px 25px", border:"none"}}>VIEW DETAILS</button>
 </div>
 <div>
  <img src="https://preview.colorlib.com/theme/robotics/img/banner-img.png" alt="" />
 </div>
   </div>


   <div>
    <GlobalNetwork/>
    <Change/>
   </div>

   </>
  )
}

export default Home