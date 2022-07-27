import Image from "next/image";
import styles from "../../styles/homepage.module.css";

import icon1 from "../../public/images/icon1.png";
import icon2 from "../../public/images/icon2.png";
import icon3 from "../../public/images/icon3.png";
import icon4 from "../../public/images/icon4.png";

const Section_image = () => {
  return (
    <>
      <div className={styles.section_image}>
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.section_image_in}>
              <Image height="100" width="100" alt="hero-image" src={icon1} />
              <div className={styles.boxtextinner}>
                <h5>PROFESSIONAL</h5>
                <p>Engineer Consultation Team</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className={styles.section_image_in}>
              <Image height="100" width="100" alt="hero-image" src={icon2} />
              <div className={styles.boxtextinner}>
                <h5>AUTHORIZED DISTRIBUTOR</h5>
                <p>Genuine Product Guarantee</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className={styles.section_image_in}>
              <Image height="100" width="100" alt="hero-image" src={icon3} />
              <div className={styles.boxtextinner}>
                <h5>SKILLFULL</h5>
                <p>Installation Team</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className={styles.section_image_in}>
              <Image height="100" width="100" alt="hero-image" src={icon4} />
              <div className={styles.boxtextinner}>
                <h5>HIGH EXPERIENCE</h5>
                <p>After-Sale Service and Maintenance Team</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Section_image;
