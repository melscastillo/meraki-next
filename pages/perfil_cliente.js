import styles from "../styles/perfil_cliente.module.css";
import { Layout, Avatar, List, Row, Col, Button, Card } from "antd";
import Link from "next/link";

const { Header, Sider, Content } = Layout;

function PerfilCliente() {
  return (
    <container>
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

        <Layout>
          <Sider className={styles.sider}>
            <div className={styles.list}>
              <List className={styles.item}>
                <a Editar Perfil>
                  {"Editar Perfil "}
                </a>
              </List>
              <List className={styles.item}>
                <Link href="/mensaje_fotografa" passHref>
                  <a Mis Mensajes>
                    {"Mis Mensajes"}
                  </a>
                </Link>
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
              <Card className={styles.insideCard} hoverable>
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

              <Card hoverable className={styles.insideCard}>
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

            <div className={styles.bnt_wrapper}>
              <Button className={styles.button}>
                Publicar Oferta{" "}
                <svg
                  className={styles.icon}
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <title>arrow-right2</title>
                  <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                </svg>
              </Button>
              <Link href="/busqueda">
                <Button className={styles.button}>
                  Buscar por categoría
                  <svg
                    className={styles.icon}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>search</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
                  </svg>
                </Button>
              </Link>
            </div>
          </Content>
        </Layout>
      </Layout>
    </container>
  );
}

export default PerfilCliente;
