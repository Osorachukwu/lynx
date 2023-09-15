import React from 'react'
import Button1 from '../../components/Buttons/Button1'

const AboutSection1 = () => {
  return (
    <div className='aboutSection1'>
        <h2 className='text-center'>About Us</h2>

       <div className='main flex gap-20'>
        
           <div className='main1 flex flex-wrap justify-between items-center gap-1'>
                <div>
                    <h2>5,000</h2>
                    <p>Happy Clients</p>
                </div>

                <div>
                    <h2>5,000</h2>
                    <p>Happy Clients</p>
                </div>

                <div>
                    <h2>5,000</h2>
                    <p>Happy Clients</p>
                </div>

                <div>
                    <h2>5,000</h2>
                    <p>Happy Clients</p>
                </div>
           
            </div>

            <div className='main2 flex flex-col justify-between'>
                <p>ABOUT ME</p>
                <h2>A UI/UX DEVELOPER BASED IN NIGERIA</h2>
                <p>
                 Far far away, behind the word mountains, far  from the countries Vokalia and Consonantia,  there live the blind texts.
                </p>

                <div className='flex gap-8'>
                    <div>
                     <p>Name: Ezewi Osorachukwu</p>
                     <p>Name: Ezewi Osorachukwu</p>
                     <p>Name: Ezewi Osorachukwu</p>
                     <Button1 text="DOWNLOAD CV" />
                    </div>

                    <div>
                     <p>Name: Ezewi Osorachukwu</p>
                     <p>Name: Ezewi Osorachukwu</p>
                     <p>Name: Ezewi Osorachukwu</p>
                    </div>

                    

                </div>


            </div>
       </div>

        

    </div>
  )
}

export default AboutSection1