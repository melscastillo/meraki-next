import styles from "../styles/perfil_cliente.module.css";
import { Layout, Avatar, List, Row, Col, Button, Card } from "antd";

const { Header, Sider, Content } = Layout;

function PerfilCliente() {
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
                  {"Mis Mensajes"}
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
            <p className={styles.title}>¡BIENVENIDO!</p>

            <div className={styles.card_wrapper}>
              <Card
                className={styles.insideCard}
                hoverable
                style={{ width: 380, height: 400 }}
              >
                <h3 className={styles.pTittle}> Hasta el momento tienes: </h3>
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/create1.png"
                />
                <div>
                  <p className={styles.pText}>
                    10 ofertas laborales publicadas
                  </p>
                  <p className={styles.pText}>
                    5 ofertas laborales concretadas
                  </p>
                </div>
              </Card>

              <Card
                hoverable
                style={{ width: 380, height: 400 }}
                className={styles.insideCard}
              >
                <h3 className={styles.pTittle}>Calificación de </h3>
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_reviews_lp8w.svg"
                />

                <div>
                  <p className={styles.pText}>5 Estrellas</p>
                  <div className={styles.stars}>
                    <img src="/images/vector.png" />
                    <img src="/images/vector.png" />
                    <img src="/images/vector.png" />
                    <img src="/images/vector.png" />
                    <img src="/images/vector.png" />
                  </div>
                </div>
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </container>
  );
}

export default PerfilCliente;
