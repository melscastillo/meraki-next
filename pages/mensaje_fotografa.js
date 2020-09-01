import styles from "../styles/mensajesfoto.module.css";
import { Layout, Avatar, List, Row, Col, Button } from "antd";

const { Header, Sider, Content } = Layout;

function Mensajes() {
  return (
    <container>
      <Layout className={styles.layout}>
        <Row className={styles.center}>
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

        <Layout>
          <Sider className={styles.sider}>
            <div className={styles.list}>
              <List className={styles.item}>
                <a Editar Perfil>
                  {"Editar Perfil "}
                </a>
              </List>
              <List className={styles.item}>
                <a Mis Ofertas>
                  {"Mis Ofertas "}
                </a>
              </List>
            </div>
          </Sider>
          <Content className={styles.content}>
            <p className={styles.title}>MIS MENSAJES</p>
            <div>
              <Mensaje />
              <Mensaje />
              <Mensaje />
            </div>
          </Content>
        </Layout>
      </Layout>
    </container>
  );
}

function Mensaje() {
  return (
    <Row>
      <Col className={styles.message_card} offset={4} span={16}>
        <div className={styles.text_wrapper}>
          <span>ASUNTO: Sesión pareja</span> <span>Fecha:27/08720</span>
        </div>

        <Button className={styles.button}>Ver Mensaje</Button>
      </Col>
    </Row>
  );
}

export default Mensajes;
