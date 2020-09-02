import Gallery from "react-photo-gallery";
import Link from "next/link";
import styles from "../styles/vista_fotografa.module.css";
import { Row, Col, Button } from "antd";

const photos = [
  {
    src: "/images/photo-1460978812857-470ed1c77af0.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/i-Jdzt6qP-X3.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "/images/i-Jdzt6qP-X3.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/i-Jdzt6qP-X3.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/i-Jdzt6qP-X3.jpg",
    width: 3,
    height: 4,
  },
];

const Vista = () => {
  return (
    <Row>
      <Col offset={4} span={16}>
        <Row>
          <Col span={24}>
            <p>
              <Link href="/busqueda" passHref>
                <a> REGRESAR A RESULTADOS DE BÚSQUEDA</a>
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
            <Col span={24}>
            <p>
                Nitzelli Villa
            </p>
            <p>
                Fotógrafa con más de 4 años de experiencia en fotografías de bodas. Me encargo de hacer de tu evento un día que recordarás para toda la vida.
            </p>
            </Col>
        </Row>
        
        <Row>
          <Col span={24}>
            <Gallery photos={photos} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Vista;
