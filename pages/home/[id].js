import Link from "next/link";
import styles from '../../styles/vista_fotografa.module.css';
import { Row, Col, Button } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getPhotographer } from '../../src/server'
import Gallery from "react-photo-gallery";

const Vista = () => {

  const router = useRouter()
  console.log(router.query.id)
  const [photographer, setPhotographer] = useState({})
  const [pics, setPics] = useState([])
  const [photos, setPhotos] = useState([])
  const [img1, setImg1] = useState("")
  const id = router.query.id
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getPhotographer(id);
      if (response.data) {
        console.log(response.data.photographer)
        setPhotographer(response.data.photographer);
      }
    } 
    fetchProfile ();
  }, []);

  const { name, description } = photographer
  return (

    < Row >
      <Col offset={4} span={16}>
        <Row>
          <Col span={24}>
            <p className={styles.regresar}>
              <Link href="/home" passHref>
                <a>REGRESAR A RESULTADOS DE BÚSQUEDA</a>
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p>{name}</p>
            <p>
              {description}
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Gallery photos={photos} columns={3} direction="row" />
          </Col>
        </Row>
      </Col>
    </Row >
  );
};

export default Vista;
