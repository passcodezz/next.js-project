import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.footernewsletter}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>SERVICE IS OUR MAIN PRODUCT</h4>
              <h5>
                บริษัท ภพ ออโตเมชั่น จำกัด
                มีความยินดีและภาคภูมิใจเป็นอย่างยิ่งที่ได้มีโอกาสได้บริการลูกค้า
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footertop}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className={styles.footercontact}>
                <h3>Phopautomation</h3>
                <div className={styles.sociallinks}>
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.footerlinks}>
                <h4>CONTACT</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> ที่อยู่ : 41/14 ม.12
                    ต.ลำลูกกา อ.ลำลูกกา จ. ปทุมธานี 12150
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> Tel : 087-260-7999,
                    085-108-4246
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> Email :
                    phopautomation@gmail.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.footerlinks}>
                <h4>SERVICE</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> รับออกแบบโปรแกรม
                    Program Control
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> เครื่องจักร Machine
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> เครื่องทำน้ำเย็น
                    Chiller
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> คอนเวเยอร์
                    (Conveyor)
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> หม้อต้มไอน้ำ Boiler
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    ชั้นวางสินค้าอุตสาหกรรม Heavy Rack
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container clearfix">
        <div className={styles.footerbottom}>
          <div className={styles.copyright}>
            &copy; Copyright 2016
            <strong>
              <span> Phopautomation</span>
            </strong>
          </div>
          <div className={styles.credits}>
            with love
            <a href="https://www.phopautomation.co.th/">Phopautomation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
