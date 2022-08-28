import React from "react";

import styles from "./home.module.css";

function Navbar(){
return (<div className={styles.navbar}>
    <div style={{marginBottom:'12px',display:'flex', justifyContent:'space-around'}}>
        <div style={{display:'flex'}}>
            <div>
            <img style={{width:'95px'}} src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
            </div>
            <div>
            <input placeholder="job title,skills" type="text" />
            </div>
            <div>
            <button>
                <img  src="https://i.ibb.co/TvwGVK6/sssscd.png" alt="" />
            </button>
            </div>
        </div>
        <div>
            <button>Login</button>
            <button>Register</button>
            <img src="https://i.ibb.co/m61pzwW/sssscd.png" alt="" />
        </div>
    </div>
    <div style={{ borderTop:'1px solid #e4dff1'}}>
        <div style={{marginLeft:'30px',display:'flex',width:'60%',fontWeight:'bolder', color:'##38404C', justifyContent: 'space-around'}}>
            <p>HOME</p>
            <p>JOBS</p>
            <p>JOBS SEEKING ASSISTANCE</p>
            <p>COURSES</p>
            <p>CAREER GUIDANCE</p>
            <p>BLOG</p>
        </div>
    </div>
</div>)
}

export default Navbar;