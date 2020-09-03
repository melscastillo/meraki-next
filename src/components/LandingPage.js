import { Row, Col, Card, Carousel, Rate, Button } from "antd";
import Link from "next/link";
import Navbar from "./Navbar";
import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import styles from "../../styles/LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Navbar />
        </Col>
        <Col
          className={styles.background}
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
        >
          <div className={styles.textDiv}>
            <h1 className={styles.h1}>
              La primer plataforma de mujeres fotógrafas en México
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={styles.spacer}>
            <h2 className={styles.h2}>Ventajas de usar Meraki</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className={styles.cards}>
            <Card
              className={styles.insideCard}
              hoverable
              cover={
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_social_ideas_e8rj.svg"
                />
              }
            >
              <div>
                <p className={styles.pTittle}>¡Da a conocer tu trabajo!</p>
                <p className={styles.pText}>
                  Comparte tu portafolio, redes sociales y accede a las mejores
                  ofertas laborales
                </p>
              </div>
            </Card>

            <Card
              className={styles.insideCard}
              hoverable
              cover={
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_asset_selection_ix3v.svg"
                />
              }
            >
              <div>
                <p className={styles.pTittle}>Publica tus ofertas laborales</p>
                <p className={styles.pText}>
                  Recibe diferentes cotizaciones y concreta con quien más te
                  guste.
                </p>
              </div>
            </Card>
            <Card
              className={styles.insideCard}
              hoverable
              cover={
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_fashion_photoshoot_mtq8 (1).svg"
                />
              }
            >
              <div>
                <p className={styles.pTittle}> Comparte tu experiencia</p>
                <p className={styles.pText}>
                  Califica la experiencia y comparte tus comentarios
                </p>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Carousel autoplay className={styles.divSpace}>
            <div>
              <img
                className={styles.fit}
                alt="example"
                src="/images/photo-1492633423870-43d1cd2775eb.jpeg"
              />
              {/*<p className = {styles.textCarrusel}>RETRATO</p>*/}
            </div>
            <div>
              <img
                className={styles.fit}
                alt="example"
                src="/images/fotografo-moda-instagram.jpg"
              />
            </div>
            <div>
              <img
                className={styles.fit}
                alt="example"
                src="/images/PA2017_04_0001-1-e1525355768627.jpg"
              />
            </div>
            <div>
              <img
                className={styles.fit}
                alt="example"
                src="/images/photo-1498979237786-9c35706bd45e.jpeg"
              />
            </div>
            <div>
              <img
                className={styles.fit}
                alt="example"
                src="/images/Def-1-1920x1536.jpg"
              />
            </div>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <p className={styles.textCases}>Casos de Éxito</p>
          <div>
            <Card className={styles.cardCase}>
              <img
                className={styles.imgCardCase}
                src="/images/photo-1573878733211-a503d390fdd0.jpeg"
              />
              <div className={styles.wrapp_info}>
                <p className={styles.textCardCase}>
                  "Meraki me ayudó muchísimo a encontrar de manera rápida y
                  confiable a una excelente fotógrafa para hacer el shooting de
                  nuestra nueva marca. Gracias a todo el equipo por su excelente
                  atención."
                </p>
                <p className={styles.nameCardCase}>Blanca Guerra</p>
                <p className={styles.nameCardCase_}>Guadalajara, Gdl.</p>
                <Rate style={{ fontSize: "25px" }} disabled />
              </div>
            </Card>

            <Card className={styles.cardCase}>
              <div className={(styles.wrapp_info, styles.text_right)}>
                <p className={styles.textCardCase2}>
                  "Meraki me ayudó a conocer a muchas personas y establecer
                  excelentes vínculos laborales y personales con otras
                  fotógrafas. Recomiendo ampliamente esta aplicación."
                </p>
                <p className={styles.nameCardCase}>Sara Reveles</p>
                <p className={styles.nameCardCase_}>CDMX, México.</p>
                <Rate style={{ fontSize: "25px" }} disabled />
              </div>
              <img
                className={styles.imgCardCase}
                src="/images/photo-1481882466320-51765fd9fe21.jpeg"
              />
            </Card>
          </div>
          <div className = {styles.donate}>
            <div className = {styles.donateText}>
            <h3>
                ¡Ayúdanos a mantener viva Meraki!
              </h3>
              <p>
                Con tu donativo, podemos seguir difundiendo el trabajo de
                mujeres fotógrafas y contactarlas con diferentes clientes en
                todo el país
              </p>
              <Button>DONAR</Button>
            </div>
            <div className = {styles.donateImg}>
            <img
                src="/images/undraw_landing_page_q6hh.svg"
              />
              
            </div>
          </div>
          <footer className={styles.footer}>
            <p>MERAKI, 2020.</p>
            <hr />
            <div className={styles.linksContainer}>
              <ul className={styles.ul}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
              <ul className={styles.ul}>
                <li>
                  {" "}
                  <TwitterOutlined />{" "}
                </li>
                <li>
                  {" "}
                  <FacebookOutlined />{" "}
                </li>
                <li>
                  {" "}
                  <LinkedinOutlined />{" "}
                </li>
                <li>
                  {" "}
                  <InstagramOutlined />{" "}
                </li>
              </ul>
            </div>
          </footer>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;