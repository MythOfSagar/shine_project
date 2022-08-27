import React from "react";

import styles from "./home.module.css";

function Footer() {
  return (<div>
    <div className={styles.topFooter}>
      <div>
        <div>
          <img style={{width:'95px'}} src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
          <p>Great career starts here!</p>
        </div>
        <div>
          <p>Download Shine App</p>
          <img src="https://i.ibb.co/71xwxHg/sss.png" alt="" />
        </div>
      </div>
      <div className={styles.everyBookmark}><p>JOB SEEKERS
</p>
      <p>Register / Login</p>
      <p>Browse Jobs</p>
      <p>Create Free Job Alert</p>
      <p>Job Assistance Services</p>
      <p>Courses</p></div>
      <div className={styles.everyBookmark}><p>EMPLOYERS</p>
      <p>Recruiter India</p>
      <p>Post Job</p></div>
      <div className={styles.everyBookmark}><p>PARTNER SITES</p>
      <p>English Mate</p>
      <p>Study Mate</p>
      <p>Hindustantimes.com</p>
      <p>Livemint.com</p>
      <p>Livehindustan.com</p>
      <p>OTTplay.com</p></div>
      <div className={styles.everyBookmark}>
        <p>Contact Us</p>
        <p>080-1006 2222</p>
        <p>contactus@shine.com</p>
        <img style={{width:'120px'}} src="https://s3.amazonaws.com/ic-blog/socialblog-header-e1441216107254.jpg" alt="" />
      </div>
    </div>
    <div
       style={{display:'flex', justifyContent: 'space-around'}}
      >
        <div style={{width:'80%'}}><p>
          Feedback | FAQs | About Us | Contact Us | Privacy Policy | Cookie
          Policy | Fraud Alert | Business News | English News | Terms &
          Conditions | Disclaimer | Report a Job Posting
          </p>
        </div>
        <div>
        <p>
          © 2022 HT Media Limited
          </p>
        </div>
      </div>
  </div>)
}

export default Footer;