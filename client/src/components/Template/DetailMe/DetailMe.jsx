import React from "react"
import style from './DetailMe.module.css';

export default function DetailMe (){
    return(
        <div className={style.containerDetail}>

            <div className={style.containerInfo}>
                <p className={style.text}><strong>David A. Moreno C.</strong></p>
                <p className={style.text}>Traductor - Data Entry (future Full Stack Developer)</p>
                <p className={style.text}>Intermediate level proficiency in French and Italian</p>
                <p className={style.text}>I am interested in working in the IT sector as a Full Stack Developer</p>
                <p className={style.text}>My goals are to achieve a certain financial stability to live with my partner and continue growing in the IT sector.</p>
            </div>

            <div className={style.containerInfo}>
                <p className={style.text}><strong>Contact me:</strong></p>
                <p className={style.text}><a href="https://www.linkedin.com/in/davidmc2410/">GitHub</a></p>
                <p className={style.text}><a href="https://www.linkedin.com/in/davidmc2410/">LinkedIn</a></p>
                <p className={style.text}>Gmail: david.moreno.cardenas@gmail.com</p>
            </div>
            
        </div>
    )
}