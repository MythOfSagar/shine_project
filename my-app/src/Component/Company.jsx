import React from "react";
import styles from "./home.module.css";

function Company(){
    return (<div>
        <div className={styles.company1}>
            <div>
                <div><img src="https://i.ibb.co/Z8KSQ52/sss.png" alt="" /></div>
                <p>Assessment</p>
            </div>
            <div>
                <div><img src="https://i.ibb.co/stPVyj7/sss.png" alt="" /></div>
                <p>Career Path</p>
            </div>
            <div>
                <div><img src="https://i.ibb.co/xsxk1Jd/sss.png" alt="" /></div>
                <p>Dream Job</p>
            </div>
        </div>
        <div className={styles.compButton}>
            <button>COOL PLACES TO WORK</button>
            <button>TOP COMPANIES HIRING</button>
        </div>
        <div className={styles.company2}>
            <div><img src="https://static2.shine.com/r/m/images/employerbranding/7a22c70f27904e2e81d7ebd1066d55e1.png" alt="" /><br />
                 <img src="https://static2.shine.com/r/m/images/employerbranding/17e4d7d8d2bf419eb023429afacb5154.png" alt="" /></div>
                 <div><img src="https://static2.shine.com/r/m/images/employerbranding/d98a014b326648178fbb08eef46ac70e.png" alt="" /><br />
                 <img src="https://static2.shine.com/r/m/images/employerbranding/6c23dfb3c9224480870c900b8dddf299.png" alt="" /></div>
                 <div><img src="https://static2.shine.com/r/m/images/employerbranding/608a7830f65e4ac4a70869e145c55c25.png" alt="" /><br />
                 <img src="https://static2.shine.com/r/m/images/employerbranding/449660b6ea5c4aada2e211f4831cc945.png" alt="" /></div>
                 <div><img src="https://static2.shine.com/r/m/images/employerbranding/c250bee50f5b490aac4b63fe281ab79e.png" alt="" /><br />
                 <img src="https://static2.shine.com/r/m/images/employerbranding/4ba34994bc414de7984c38c9cee86ebe.png" alt="" /></div>
                 <div><img src="https://static2.shine.com/r/m/images/employerbranding/26c83ce6d9df4733a9bbc06d2e3b8f0e.png" alt="" /><br />
                 <img src="https://static2.shine.com/r/m/images/employerbranding/19b43e6c9ee345faa75540f998db7441.png" alt="" /></div>
        </div>
    </div>)
}

export default Company;
