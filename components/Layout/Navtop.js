import Image from "next/image";
import styles from "../../styles/header.module.css";
import icon from "../../public/images/icon_phone.jpg";
import { Container, Navbar, Nav, Row } from "reactstrap";

const Navtop = () => {
  return (
    <>
      <Navbar className={styles.Navbarcolor} collapseOnSelect expand="lg">
        <Container>
          <div className={styles.navbar}>
            <Navbar className="mt-2">
              <h6 id={styles.textheader}>
                มุ่งเน้นพัฒนาการผลิตที่ทันสมัยมีคุณภาพได้มาตรฐาน และ
                บริการที่ตรงความต้องการลูกค้า
              </h6>
            </Navbar>
            <Nav className="float-right">
              <p className="mt-3" id={styles.textheader}>
                <Image
                  alt="icon"
                  src={icon}
                  width="20"
                  height="20"
                  className={styles.iconphone}
                />
              </p>
              <Nav
                id={styles.textheader}
                className="float-right text-white mt-3 ms-3"
              >
                <p>087-260-7999, 085-108-4246</p>
              </Nav>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navtop;
