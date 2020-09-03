import styles from "../../styles/mensajecliente.module.css";
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
import { HighlightOutlined } from "@ant-design/icons";

import { useState } from "react";

const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

function VerMensaje() {
  return (
    <container>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          MERAKI
          <Avatar className={styles.avatar} size={40} src="" />
        </Header>
        <Layout>
          <Sider className={styles.sider}>
            <div className={styles.list}>
              <List className={styles.item1}>
                <a Mis Mensajes>
                  {"Mis Mensajes "}
                </a>
              </List>
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
          <Content>
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
            <div>
              <Button className={styles.btnsave} type="primary">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default VerMensaje;
