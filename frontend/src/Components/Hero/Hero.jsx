import './Hero.css'
import hand_icon from "../assets/hand-icon.png"
import hero_img from "../assets/latest-collection.png"
import arrow_icon from "../assets/arrow-icon.png"

export const Hero = () => {
  return (
    <div className='hero'>
<div className="hero-left">
<h2>New arrival only</h2>
<div>
    <div className='hand-hand-icon'>
        <p>new</p>
        <img src={hand_icon} alt=''/>

    </div>
    <p>collections</p>
    <p>for everyone </p>
</div>
<div className="hero-latest-button">
<div>latest collecton <img src={arrow_icon} alt=''/></div>


</div>

</div>


<div className="hero-right">
  <img src={hero_img} alt=''/>
</div>
    </div>
  )
}
