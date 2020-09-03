//CSS
import styles from "../../styles/Navbar.module.css";
import { Button, Row, Col } from "antd";
import Link from "next/link";

function Navbar() {
  return (
    <Row className={styles.center}>
      <Col xs={15} sm={15} md={15} lg={15} xl={15}>
        <div className={styles.order1}>
          <p className={styles.meraki}>MERAKI</p>
        </div>
      </Col>
      <Col xs={9} sm={9} md={9} lg={9} xl={9}>
        <div className={styles.right}>
          <Link href="/login">
            <Button className={styles.txt}>INICIAR SESION</Button>
          </Link>
          <Link href="/registrate_como">
            <Button className={styles.btn}>REGISTRATE</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default Navbar;
