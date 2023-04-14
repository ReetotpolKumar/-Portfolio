import React, { useState } from 'react'
import style from "./Home.module.css"
//import p1 from "../component/images/1.png"
import p2 from "../component/images/2.png"
import p3 from "../component/images/3.png"
import p4 from "../component/images/4.png"


function Home() {

    const [image,setImage]=useState(p2)
    const [count,setCount]=useState(0)
function changImage()
{
    const arr=[p2,p3,p4]

    setCount(count+1)
    if(count<arr.length)
   setImage(arr[count])
   else
   {
    setImage(arr[0])
    setCount(0)
   }
    console.log()
    
}


  return (
    <>
     <section className={style.background1}>
     <div className={ style.nav_logo }>

<h1> Reetotpol Kumar</h1>
</div>

<div>
            <ul className={style.nav }>

                <li> <a href="#">Home</a></li>

                <li ><a href="https://github.com/ReetotpolKumar">Github</a> </li>
                <li><a href="https://www.linkedin.com/in/reetotpol-kumar-52bbb913a/">LinkedIn</a> </li>
                <li><a href="https://drive.google.com/file/d/1DhNNY9uWm0oiSfEjKrQPWY4mKhtCh72K/view?usp=share_link">Resume</a> </li>
               
            </ul>


            <div className={style.banner_text }>






            <h1>Hi There! </h1>
            <h1>I am Reetotpol Kumar</h1>
            <h1>Web Design  </h1>
            <h1>Frontent Devoloper </h1>
           

            <h5>Familiar with React js,Html,css3</h5>
            



        </div>





        </div>



    </section>
    < section className={style.background2}>
        <div className={style.section2_text}>
            <h2>

                <span>M</span>y

                <span>P</span>rojects

            </h2>




            <h3 className={style.section2_h3_1}>Twitter Clone </h3>
            <p className={style.section2_p1} >Functionality: Validations, Post Tweets,
Profile, Tweet Replies, Likes, Comments, Custom Dialog Box</p>
            <h3 className={style.section2_h3_2 }> Amazon Clone
            </h3>
            <p className={style.section2_p2} >Functionality:Full Stack Project,Add item in cart, Buy product,Dynamic home page</p>

            <h3 className={style.section2_h3_3}> Google Doc </h3>
            <p className={style.section2_p3 }>Functionality:Text Formating,Text Editing,Text Colouring,Insert Image,Save file</p>
            <h3 className={style.section2_h3_4}>Hospital Management </h3>
            <p className={style.section2_p4 }> Functionality:Book Appoitment, Patiant Details,Write prescription by doctor</p>
           {/* <h3 className={style.section2_h3_5 }> CORPORATE BRANDING </h3>
            <p className={style.section2_p5 }>Not just normal PPT. We create High level Corporate Power Point Presentation. </p>*/}

        </div>
     </section>





    <section className={style.background3 }>

        <div className={style.section3_text }>
            <h5><span>P</span>ortfolio</h5>
            <div className={style.photos }>
                <div className={style.container }>

                
                    <img src="https://technofav.in/images/project/projectnayo.jpg " className={style.img1}></img>
                    <img src="https://technofav.in/images/project/project26.jpg " className={style.img2 }></img>
                    <img src="https://technofav.in/images/project/project21.jpg " className={style.img3 }></img>

                    <img src="https://technofav.in/images/project/project2.jpg " className={style.img4 }></img>
                    <img src="https://technofav.in/images/project/project5.jpg " className={style.img5 }></img>
                    <img src="https://technofav.in/images/project/project3.jpg " className={style.img6 }></img>
                    <img src="https://technofav.in/images/project/project1.jpg " className={style.img7 }></img>
                    <img src={image} className={style.img8 }></img>
                </div>
                <div className={style.arrowDiv}>

                <button className={ style.arrow} onClick={changImage}>↓</button>
                </div>
            </div>
        </div>
    
  </section>


      
    </>
  )
}

export default Home
