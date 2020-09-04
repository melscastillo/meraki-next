import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/vista_fotografa.module.css";
import { Row, Col, Button } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPhotographer } from "../../src/server";
import {
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const Galeria = dynamic(() => import("../../src/components/Galeria"), {
  ssr: false,
});

const Vista = () => {
  const router = useRouter();
  const id = router.query.id;
  const [photographer, setPhotographer] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getPhotographer(id);
      if (response.data) {
        setPhotographer(response.data.photographer);
      }
    };
    if (id) fetchProfile();
  }, [id]);

  const {
    name,
    lastName,
    description,
    imagesUrl,
    website,
    facebook,
    instagram,
    linkedin,
  } = photographer;

  return (
    <>
      <Head>
        <title>
          Perfil {name} {lastName} - Meraki
        </title>
      </Head>
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
            <Col className={styles.col} span={24}>
              <p className={styles.name}>
                {name} {lastName}
              </p>
              <p className={styles.description}> {description}</p>
              <ul className={styles.ul}>
                {website && (
                  <li>
                    <a href={website}>
                      <GlobalOutlined />
                    </a>
                  </li>
                )}
                {facebook && (
                  <li>
                    <a href={facebook}>
                      <FacebookOutlined />
                    </a>
                  </li>
                )}
                {instagram && (
                  <li>
                    <a href={instagram}>
                      <InstagramOutlined />
                    </a>
                  </li>
                )}
                {linkedin && (
                  <li>
                    <a href={linkedin}>
                      <LinkedinOutlined />
                    </a>
                  </li>
                )}
              </ul>
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
    </>
  );
};

export default Vista;
