import React from "react";
import styles from "./home.module.css";

function Employer(){
    return (<div>
        <div className={styles.emptop}>
            <p>Are You an Employer?</p>
            <button style={{backgroundColor:'green'}}>Search your hire</button>
            <button style={{backgroundColor:'blue'}}>Post a Job</button>
        </div>
        <div style={{backgroundColor:'white'}} className={styles.emptop}>
            <p>Aspire to Senior Roles in Career</p>
        </div>
        <div className={styles.emplButton}>
            <div>
                <img src="https://i.ibb.co/bXhWWHR/sss.png" alt="" />
                <p>Chief Technology Officer</p>
            </div>
            <div>
                 <img src="https://i.ibb.co/Bz5p0cm/sss.png" alt="" />
                <p>Data Science Head</p>
            </div>
            <div>
            <img src="https://i.ibb.co/4fTkk0z/sss.png" alt="v" />
                <p>Chief Marketing Officer</p>
            </div>
            <div>
            <img src="https://i.ibb.co/31X0sCJ/sss.png" alt="" />
                <p>Chief Product Officer</p>
            </div>
        </div>
    </div>)
}

export default Employer;