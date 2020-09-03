import styles from "../styles/mensajeind.module.css";
import {
  Layout,
  Avatar,
  List,
  Row,
  Col,
  Button,
  Card,
  Divider,
  Input,
} from "antd";
import Link from "next/link";

const { Sider, Content } = Layout;
const { TextArea } = Input;

function VerMensaje() {
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
            <div>
              <LeerMensaje />
            </div>
          </Content>
        </Layout>
      </Layout>
    </container>
  );
}

function LeerMensaje() {
  return (
    <Row>
      <Col offset={4} span={16}>
        <div>
          <Card className={styles.mensaje}>
            <span> De: Karla Sevilla</span>
            <Divider></Divider>
            <p>
              Hola Nitzelli: Soy Karla y trabajo como wedding planner. Estoy
              actualmente ayudando a una pareja de novios que se casan el de
              mayo de 2021 a organizar su boda y encontré tu perfil en esta
              plataforma. Se lo mostré los novios y están encantados. No se i
              podrías enviarme los paquetes de cotización para bodas que tienes
              disponible. Si necesitas más información, no dudes en contactarme.
            </p>
          </Card>
          <div>
            <TextArea rows={4} className={styles.textArea} />
            <div className={styles.btn}>
              <Button className={styles.btnsave}>ENVIAR MENSAJE</Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default VerMensaje;
