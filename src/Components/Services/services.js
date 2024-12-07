import React from 'react';
import './services.css';
import SEWeb from'../../Assets/SEWeb.jpg';
import SEWeb2 from'../../Assets/SEWeb2.jpg';
import SEWeb1 from'../../Assets/SEWeb1.jpg';
import rjsweb from'../../Assets/rjsweb.jpg';
import SEWeb5 from'../../Assets/SEWeb5.jpg';
import SEWeb6 from'../../Assets/SEWeb6.jpg';
import SEWeb7 from'../../Assets/SEWeb7.jpg';
import SEWeb8 from'../../Assets/SEWeb8.jpg';


const Services =() => {
    return (
        <section className='services'>
            <div id='servicesTitle'>
            <h2 className="servicesTitle">Services Offered</h2>
            <span className="servicesDesc">We offer a wide range of services to get you back up and running</span>   
            </div>
            <div id='servicesPics'>
            <div className='Container1'>
                <img src={SEWeb} alt="tune" className="servicesImg" />
                <div class="desc1">Diagnostics <div/>
                <div class="fulldesc1">We perform thorough diagnostics on your small engines to quickly identify issues, ensuring efficient repairs that save you time and stress.</div>
                </div>
                </div>
                <div className='Container2'>
                <img src={SEWeb1} alt="" className="servicesImg" />
                <div class="desc2">Repairs<div/>
                <div class="fulldesc2">Our experienced team specializes in solving complex engine problems, getting your equipment back in working order swiftly and effectively.</div>
                </div>
                </div>
                <div className='Container3'>
                <img src={SEWeb2} alt="" className="servicesImg" />
                <div class="desc3">Maintenance<div/>
                <div class="fulldesc3">We offer proactive maintenance services to keep your small engines running smoothly, extending their lifespan and enhancing performance.</div>
                </div>
                </div>
                <div className='Container4'>
                <img src={rjsweb} alt="" className="servicesImg" />
                <div class="desc4">Tune-Ups<div/>
                <div class="fulldesc4">Trust us for comprehensive tune-ups that ensure optimal performance, delivering immediate improvements you can feel.</div>
                </div>
                </div>
                <div className='Container5'>
                <img src={SEWeb5} alt="" className="servicesImg" />
                <div class="desc5">Parts Replacement<div/>
                <div class="fulldesc5">Need a part replaced? We source high-quality components that enhance the reliability and durability of your equipment.</div>
                </div>
                </div>
                <div className='Container6'>
                <img src={SEWeb6} alt="" className="servicesImg" />
                <div class="desc6">Assembly<div/>
                <div class="fulldesc6">We offer expert assembly services, ensuring all components fit correctly for optimal functionality and safety.</div>
                </div>
                </div>
                <div className='Container7'>
                <img src={SEWeb7} alt="" className="servicesImg" />
                <div class="desc7">Home Service Calls<div/>
                <div class="fulldesc7">We offer the option to either fix your issue onsite or pick up the item to be fixed and delivered back to the home. </div>
                </div>
                </div>
                </div>
                
                
                
                
                
            
            
        </section>

    );
}

export default Services