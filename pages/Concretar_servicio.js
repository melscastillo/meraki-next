import styles from "../styles/concretar.module.css";

import { Layout, Avatar, List, Row, Col, Button } from "antd";
const { Content } = Layout;

function Concretar() {
  return (
    <div>
      <Layout className={styles.layout}>
        <Row>
          <Col
            className={styles.nav_wrapper}
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
          >
            <div>
              <p className={styles.meraki}>MERAKI</p>
            </div>

            <div>
              <Avatar
                className={styles.avatar}
                size={60}
                src="https://picsum.photos/id/237/200/300"
              />
            </div>
          </Col>
        </Row>
        <Content className={styles.content}>
          <h3 className={styles.title}>
            Descarga la cotización que Nitzelli te ha enviado{" "}
            <a className={styles.descargar}>AQUÍ</a>
          </h3>
          <p className={styles.title2}>¿Qué deseas hacer?</p>
          <div className={styles.button_wrapper}>
            <Button className={styles.button}>Concretar servicio</Button>
            <Button className={styles.button}>Regresar a mis mensajes</Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Concretar;
