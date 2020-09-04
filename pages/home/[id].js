import Link from "next/link";
import styles from '../../styles/vista_fotografa.module.css';
import { Row, Col, Button } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getPhotographer } from '../../src/server'
​
const Galeria = dynamic(() => import("../../src/components/Galeria"), {
  ssr: false,
});
​
const Vista = () => {
  const router = useRouter()
  const id = router.query.id;
  const [photographer, setPhotographer] = useState({})
​
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getPhotographer(id);
      if (response.data) {
        setPhotographer(response.data.photographer);
      }
    } 
    if (id) fetchProfile ();
  }, [id]);
​
  const { name, description, imagesUrl } = photographer
​
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
            <p>{name}</p>
            <p>
              Fotógrafa con más de 4 años de experiencia en fotografías de
              bodas. Me encargo de hacer de tu evento un día que recordarás para
              toda la vida.
            </p>
          </Col>
        </Row>
​
        <Row>
          <Col span={24}>
            <Galeria photos={imagesUrl} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
​
export default Vista;