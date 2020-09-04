import { Row, Col, Form, Input, Button, Select, Card, Avatar } from "antd";
import cx from "classnames"
import styles from "../../styles/Busqueda.module.css";
import Resultado from "./Resultado"
import React, { useEffect, useState } from "react";
import { getPhotographers } from '../server'

const Busqueda = () => {
  const [photographers, setPhotographers] = useState([])
  const [filteredPhotos, setFilteredPhotos] = useState([])
  const [category, setCategory] = useState("")
  /*  const handleInputChange = (key, value) => {
 
     console.log("propKey", key)
     console.log("propValue", value)
     if (key === "eventos") {
 
       setCategory(value.value);
       console.log("Selected:", category);
     } else if (key === "retrato") {
       setCategory(value.value);
       console.log("Selected:", category);
     } else if (key === "fotografiadeproducto") {
       setCategory(value.value);
       console.log("Selected:", category);
     } else if (name === "password") {
       setpassword(value);
       console.log("Selected: ", password);
     } else if (name === "phone") {
       setphone(value);
       console.log("Phone:", phone);
     } else if (name === "adress") {
       setadress(value);
       console.log("Address:", adress);
     } else if (name === "profilepicture") {
       setprofilepicture(value);
       console.log("Profilepic:", profilepicture);
     }
   }; */
  function handleChange(value) {
    console.log("value: ", value);
    if (value === "eventos") {
      setCategory(value);

    } else if (value === "retrato") {
      setCategory(value);

    } else if (value === "fotografiadeproducto") {
      setCategory(value);

    }
    console.log("Selected:", category);
  }


  useEffect(() => {
    async function getallPhotographers() {
      const response = await getPhotographers();

      if (response.data.photograpers) {
        setPhotographers(response.data.photograpers);
      }
    }
    getallPhotographers();
  }, []);
  

  const UICards = photographers.map(({ name, imagesUrl, _id }) => {

    const image = imagesUrl[1]
    return (
      <Resultado image={image} name={name} id={_id} />
    )
  })

  return (
    <>
      <Row>
        <Col className={styles.logo} offset={1} span={5}>
          MERAKI
        </Col>
        <Col className = {styles.alv} span={17}>
          <Avatar size={50} className={styles.avatar} src="/images/photo-1573878733211-a503d390fdd0.jpeg" />
          <Button className={styles.buttonBack}>REGRESAR</Button>
        </Col>
      </Row>
      <Row>
        <Col offset={1} span={21}>

          <Form className={styles.label} >
            <Form.Item name="selector" label="Selecciona una categoría" >
              <Select className={styles.select}
                showSearch
                optionFilterProp="children"
                value="value"
                onChange={handleChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Select.Option value="eventos" key="eventos" className={styles.selectOption} >Eventos</Select.Option>
                <Select.Option value="retrato" key="retrato" className={styles.selectOption} >Retrato</Select.Option>
                <Select.Option value="fotografiadeproducto" key="fotografiadeproducto" className={cx(styles.typography, styles.selectOption)}>
                  Fotografía de Producto
              </Select.Option>
                <Select.Option key="fotografiademoda" className={styles.selectOption} value="fotografiademoda">
                  Fotografía de Moda
              </Select.Option>
                <Select.Option key="FotografíaDocumentaloFotoperiodismo" className={styles.selectOption} value="fotografiadocumentalofotoperiodismo">
                  Fotografía Documental o Fotoperiodismo
              </Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        {UICards}
        {/*         <Resultado image="/images/photo-1531898611418-0ceb51a8e0ad.jpeg" name="Nitzelli Villa" />
        <Resultado image="/images/photo-1570536205668-ab1bdc67b4aa.jpeg" name="Iliana Maldonado" />
        <Resultado image="/images/photo-1568759532835-15e70ca7946f.jpeg" name="Melissa Castillo" />
        <Resultado image="/images/photo-1575865641151-ad4fddb7b418.jpeg" name="Karen Corona" /> */}
      </Row>
    </>
  );
};

export default Busqueda;
