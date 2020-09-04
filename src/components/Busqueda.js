import { Row, Col, Form, Input, Button, Select, Card, Avatar } from "antd";
import cx from "classnames";
import styles from "../../styles/Busqueda.module.css";
import Resultado from "./Resultado";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPhotographers } from "../server";

const Busqueda = () => {
  const [originalSearch, setOriginalSearch] = useState([]);
  const [photographers, setPhotographers] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    async function getallPhotographers() {
      const response = await getPhotographers();

      if (response.data.photograpers) {
        setPhotographers(response.data.photograpers);
        setOriginalSearch(response.data.photograpers);
      }
    }
    getallPhotographers();
  }, []);

  const UICards = photographers.map(({ name, imagesUrl, _id }) => {
    const image = imagesUrl[1];
    return <Resultado key={_id} image={image} name={name} id={_id} />;
  });

  function handleChange(value) {
    console.log("value: ", value);
    if (value === "Eventos") {
      const arr = filteredArray(value);
      setPhotographers(arr);
    } else if (value === "Retrato") {
      const arr = filteredArray(value);
      setPhotographers(arr);
    } else if (value === "Fotografía de Producto") {
      const arr = filteredArray(value);
      setPhotographers(arr);
    } else if (value === "Fotografía de Moda") {
      const arr = filteredArray(value);
      setPhotographers(arr);
    } else if (value === "Fotografía Documental o Fotoperiodismo") {
      const arr = filteredArray(value);
      setPhotographers(arr);
    } else {
      setPhotographers(originalSearch);
    }
  }

  const filteredArray = (category) => {
    console.log(originalSearch);
    const rest = originalSearch.filter((item) => {
      let catArray = item.category;
      if (catArray.includes(category)) {
        return item;
      }
    });
    console.log(rest);
    return rest;
  };

  const UIFilteredCrds = filteredPhotos.map(({ name, imagesUrl, _id }) => {
    const image = imagesUrl[1];
    return <Resultado key={_id} image={image} name={name} id={_id} />;
  });

  return (
    <>
      <Row>
        <Col className={styles.logo} offset={1} span={5}>
          MERAKI
        </Col>
        <Col className={styles.alv} span={17}>
          <Avatar
            size={50}
            className={styles.avatar}
            src="/images/photo-1573878733211-a503d390fdd0.jpeg"
          />
          <Link href="/logout">
            <Button className={styles.buttonBack}>SALIR</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col offset={1} span={21}>
          <Form className={styles.label}>
            <Form.Item name="selector" label="Selecciona una categoría">
              <Select
                className={styles.select}
                showSearch
                optionFilterProp="children"
                defaultValue="Todos"
                onChange={handleChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Select.Option
                  value="Todos"
                  key="eventos"
                  className={styles.selectOption}
                >
                  Todas
                </Select.Option>
                <Select.Option
                  value="Eventos"
                  key="eventos"
                  className={styles.selectOption}
                >
                  Eventos
                </Select.Option>
                <Select.Option
                  value="Retrato"
                  key="retrato"
                  className={styles.selectOption}
                >
                  Retrato
                </Select.Option>
                <Select.Option
                  value="Fotografía de Producto"
                  key="fotografiadeproducto"
                  className={cx(styles.typography, styles.selectOption)}
                >
                  Fotografía de Producto
                </Select.Option>
                <Select.Option
                  key="Fotografía de Moda"
                  className={styles.selectOption}
                  value="Fotografía de Moda"
                >
                  Fotografía de Moda
                </Select.Option>
                <Select.Option
                  key="Fotografía Documental o Fotoperiodismo"
                  className={styles.selectOption}
                  value="Fotografía Documental o Fotoperiodismo"
                >
                  Fotografía Documental o Fotoperiodismo
                </Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>{UICards}</Row>
    </>
  );
};

export default Busqueda;
