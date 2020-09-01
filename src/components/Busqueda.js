import { Row, Col, Form, Input, Button, Select, Card, Avatar } from "antd";
import cx from "classnames"
import styles from "../../styles/Busqueda.module.css";
import Resultado from "./Resultado"

const Busqueda = () => {
  return (
    <>
      <Row className = {styles.typography}>
        <Col  className = {styles.logo} offset={1} span={16}>
          MERAKI
        </Col>
        <Col span={6}>
            <Avatar size = {50} className ={ styles.avatar} src= "/images/photo-1573878733211-a503d390fdd0.jpeg"/>
        <Button className ={styles.buttonBack}>REGRESAR</Button>
        </Col>
      </Row>
      <Row>
        <Col offset={1} span={21}>
            
          <Form className = {cx (styles.typography, styles.label)} >
              <Form.Item label= "Selecciona una categoría">
            <Select className ={styles.select}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Select.Option className = {cx (styles.typography, styles.selectOption)} value="eventos">Eventos</Select.Option>
              <Select.Option className = {cx (styles.typography, styles.selectOption)} value="retrato">Retrato</Select.Option>
              <Select.Option className = {cx (styles.typography, styles.selectOption)} value="fotografia de producto">
                Fotografía de Producto
              </Select.Option>
              <Select.Option className = {cx (styles.typography, styles.selectOption)} value="fotografia de moda">
                Fotografía de Moda
              </Select.Option>
              <Select.Option className = {cx (styles.typography, styles.selectOption)} value="fotografia documental o fotoperiodismo<">
                Fotografía Documental o Fotoperiodismo
              </Select.Option>
            </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row className = {styles.typography}>
        
        <Resultado image= "/images/photo-1531898611418-0ceb51a8e0ad.jpeg" name= "Nitzelli Villa" />
        <Resultado image= "/images/photo-1570536205668-ab1bdc67b4aa.jpeg" name= "Iliana Maldonado" />
        <Resultado image= "/images/photo-1568759532835-15e70ca7946f.jpeg" name= "Melissa Castillo" />
        <Resultado image= "/images/photo-1575865641151-ad4fddb7b418.jpeg" name= "Kikish Reveles" />
      </Row>
    </>
  );
};

export default Busqueda;
