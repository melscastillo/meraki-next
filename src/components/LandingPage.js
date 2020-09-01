import styles from "../../styles/LandingPage.module.css";
import { Row, Col, Card, Carousel } from "antd";
import Navbar from "./Navbar";

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
              style={{ width: 419, height: 414 }}
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
              style={{ width: 419, height: 414 }}
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
              style={{ width: 419, height: 414 }}
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
                src="/images/beauty-galina-trush-04.jpg"
              />
            </div>
            <div>
            <img
                className={styles.fit}
                alt="example"
                src="/images/beauty-galina-trush-04.jpg"
              />
            </div>
            <div>
            <img
                className={styles.fit}
                alt="example"
                src="/images/beauty-galina-trush-04.jpg"
              />
            </div>
            <div>
            <img
                className={styles.fit}
                alt="example"
                src="/images/beauty-galina-trush-04.jpg"
              />
            </div>
            <div>
            <img
                className={styles.fit}
                alt="example"
                src="/images/beauty-galina-trush-04.jpg"
              />
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;
