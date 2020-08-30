import styles from "../styles/mensajescliente.module.css";
import { Layout, Avatar, List, Row, Col, Button } from "antd";

const { Header, Sider, Content } = Layout;

function Mensajes() {
  return (
    <container>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          MERAKI
          <Avatar className={styles.avatar} size={50} src="" />
        </Header>
        <Layout>
          <Sider className={styles.sider}>
            <div className={styles.list}>
              <List className={styles.item2}>
                <a Editar Perfil>
                  {"Editar Perfil "}
                </a>
              </List>
              <List className={styles.item3}>
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
      <Col className={styles.col} offset={4} span={16}>
        <Row>
          <Col span={16}>
            <p>ASUNTO: Sesión pareja</p> <p>Fecha:27/08720</p>{" "}
          </Col>
          <Col span={8}>
            <Button className={styles.button}>Ver Mensaje</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Mensajes;
