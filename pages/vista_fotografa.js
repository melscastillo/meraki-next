import Link from "next/link";
import styles from "../styles/vista_fotografa.module.css";
import { Row, Col, Button } from "antd";
import dynamic from "next/dynamic";

const Galeria = dynamic(() => import("../src/components/Galeria"), {
  ssr: false,
});

const photos = [
  {
    src: "/images/photo-1459259191495-52eccde892c7.jpeg",
    width: 1350,
    height: 900,
  },

  {
    src: "/images/photo-1548765015-1e047ff5c9e9.jpeg",
    width: 634,
    height: 951,
  },
  {
    src: "/images/photo-1588849538263-fbc2b7b8965f.jpeg",
    width: 1050,
    height: 700,
  },
  {
    src: "/images/photo-1468853692559-fc594e932a2d.jpeg",
    width: 634,
    height: 951,
  },
  {
    src: "/images/photo-1580151134699-e0cfbeb763d3.jpeg",
    width: 634,
    height: 951,
  },
  {
    src: "/images/photo-1517722014278-c256a91a6fba.jpeg",
    width: 1050,
    height: 700,
  },
];

const Vista = () => {
  return (
    <Row>
      <Col offset={4} span={16}>
        <Row>
          <Col span={24}>
            <p className={styles.regresar}>
              <Link href="/busqueda" passHref> 
                  <a>REGRESAR A RESULTADOS DE BÚSQUEDA</a>
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p>Nitzelli Villa</p>
            <p>
              Fotógrafa con más de 4 años de experiencia en fotografías de
              bodas. Me encargo de hacer de tu evento un día que recordarás para
              toda la vida.
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Galeria photos={photos} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Vista;