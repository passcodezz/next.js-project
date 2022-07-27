import Image from "next/image";
import heroImg from "../../public/images/team2.png";
import styles from "../../styles/header.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <section id={styles.hero} className="d-flex align-items-center">
        <div className="container f_flex top">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
              <h4>บริษัท ภพ ออโตเมชั่น จำกัด</h4>
              <h2>
                {/* PHOP */}
                <span>
                  <Typewriter
                    options={{
                      strings: ["PHOP AUTOMATION CO.,LTD."],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h2>
              <p>
                ดำเนินธุรกิจเกี่ยวกับ การผลิตเครื่องจักร Partเครื่องจักร
                ชิ้นส่วน อะไหล่ รวมถึง Jig Test และงานประกอบเครื่องปรับอากาศ
                ประเภท Air Cooled Chiller / Water Cooled Chiller รวมถึงระบบไฟฟ้า
                ระบบคอนโทรล ระบบคอนโทรลควบคุมเครื่องจักร ระบบลำเลียงสายพาน
                (Conveyor) ด้วยเทคโนโลยีที่ทันสมัย และงานระบบอื่นๆ
                ที่เกี่ยวข้องกับเครื่องจักรในงานอุตสาหกรรม
                ทั้งในอาคารและสำนักงานต่างๆ
                รวมถึงการออกแบบตามความต้องการลูกค้าเป็นหลัก และในงานด้านบริการ
                งานติดตั้ง งานซ่อมบำรุงเครื่องจักร งานบริการหลังการขาย
                เรามีพร้อมให้บริการ ตามความพึงพอใจลูกค้า
              </p>

              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link href="/contactpage">
                  <a className={styles.btngetstarted}>CONTACT</a>
                </Link>

                <Link href="/reference">
                  <a className={styles.btngetstarted}>REFERENCE</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <div className={styles.heroimg}>
                <Image
                  alt="hero-image"
                  src={heroImg}
                  width="350"
                  height="350"
                  objectFit="scale-down"
                  className="d-inline-block align-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
