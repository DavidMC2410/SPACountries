import React from "react"
import style from './DetailProject.module.css'

export default function DetailProject (){
    return(
        <div className={style.containerInfo}>
            
            <p className={style.text}>The purpose of the project is to apply all the knowledge acquired during the <strong>SoyHenry</strong> bootcamp; this SPA uses all the information from the Rest Countries API as its database and its goal is to "imitate" a website that is responsible for scheduling tourist trips around the world. Finally, the approval of this project will allow the student to move on to the final evaluation of the bootcamp (the final project) and it is also part of the programmer's portfolio.</p>
            
        </div>
    )
}