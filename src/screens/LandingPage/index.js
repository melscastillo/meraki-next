import styles from "./LandingPage.module.css";

import { Row, Col } from "antd";
import { Card } from "antd";
import { Carousel } from "antd";

import Navbar from "../../components/Navbar";

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
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className={styles.cards}>
            <Card
              className={styles.insideCard}
              hoverable
              style={{ width: 320, height: 320 }}
              cover={
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_photo_sharing_1_85vy.svg"
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
          </div>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className={styles.cards}>
            <Card
              hoverable
              style={{ width: 320, height: 320 }}
              cover={
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_optimize_image_yp8f.svg"
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
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className={styles.cards}>
            <Card
              hoverable
              style={{ width: 320, height: 320 }}
              cover={
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_fashion_photoshoot_mtq8.svg"
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
                src="/images/beauty-galina-trush-04.jpg"
              />
            </div>
            <div>
              <h3 className={styles.contentStyle}>2</h3>
            </div>
            <div>
              <h3 className={styles.contentStyle}>3</h3>
            </div>
            <div>
              <h3 className={styles.contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;
