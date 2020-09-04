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



  useEffect(async () => {
    async function getInfo(id) {
      const infoObj = await getPhotographer(id)
      return infoObj
    }
    const payload = getInfo(id)

    payload.then((response) => {
      console.log(response)
      setPhotographer(response.data.photographer)
      console.log('Photographer', photographer)
      let arr = []

      console.log('Photografer', photographer)
      console.log(response.data.photographer.imagesUrl)

      for (const [key, value] of Object.entries(response.data.photographer.imagesUrl)) {
        console.log(key, value);
        arr.push({
          src: value, width: 1350,
          height: 900
        })
      }
      console.log(arr)

      setPhotos(arr)
    })
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
