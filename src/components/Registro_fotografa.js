import { useState } from "react";
import cx from "classnames";
import { Row, Col, Form, Input, Button, Checkbox, Upload } from "antd";
import styles from "../../styles/RegistroFotografa.module.css";

import { signUpPhotographers } from "../server";

const RegistroFotografa = () => {
  const [form] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categoryList = [
    "Retrato",
    "Eventos",
    "Fotografía de Producto",
    "Fotografía de Moda",
    "Fotografía Documental o Fotoperiodismo",
  ];

  const onChange = (checkedValues) => {
    console.log (checkedValues, "test")
    
    if (checkedValues.length >= 3) {
      const options = checkedValues.slice(0, 3);
      setSelectedCategories(options);
    } else {
      setSelectedCategories(checkedValues);
    }
    console.log("checked = ", checkedValues);
  };

  const onFinish = async (value) => {
    console.log(value);
    try {
      const response = await signUpPhotographers(value);
      if (!response.success) {
        console.log("Error: ", response.error);
        return;
      }
      console.log("response", response.data);
      form.resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(selectedCategories);
  return (
    <Row>
      <Col md ={16} sm = {24}>
        <Row>
          <Col offset={6} md ={12} sm = {24}>
            <h1 className={styles.logo}>MERAKI</h1>
            <p className={styles.title}>¿Ya tienes una cuenta?</p>
            <p className={styles.iniciaSesion}>
              {" "}
              <a>Inicia Sesión</a>
            </p>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                form={form}
                className={styles.formItem}
                label="Nombre"
                name="name"
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item className={styles.formItem} label="Email" name="email">
                <Input placeholder="" type="email" />
              </Form.Item>
              <Form.Item
                className={styles.formItem}
                label="Contraseña"
                name="password"
              >
                <Input placeholder="" type="password" />
              </Form.Item>

              <Form.Item
                className={styles.formItem}
                label="¿En qué categoría de fotografía te especializas? (Puedes elegir hasta tres categorías distintas)"
                name="category"
              >
                <Checkbox.Group
                  options={categoryList}
                  onChange={onChange}
                  value={selectedCategories}
                />
              </Form.Item>
              <Form.Item
                className={styles.formItem}
                label="Cuéntanos más acerca de ti"
                name="description"
              >
                <Input.TextArea rows={4} />
              </Form.Item>

              <Form.Item
                className={styles.formItem}
                label="Comparte la URL de tu porfatolio AQUÍ:"
                name="portfolio"
              >
                <Input placeholder="" type="url" />
              </Form.Item>

              <p className = {styles.textLabel}> Compartenos tu sitio web y redes sociales</p>
              <Form.Item
                className={cx(styles.formItem, styles.socialInput)}
                name="website"
              >
                <img width="24" src="/images/Icons/sphere.svg" />
                <Input placeholder="" type="url" />
              </Form.Item>

              <Form.Item
                className={cx (styles.formItem, styles.socialInput)}
                name="facebook"
              >
                <img width="24" src="/images/Icons/facebook.svg" />
                <Input placeholder="" type="url" />
              </Form.Item>

              <Form.Item
                className={cx(styles.formItem, styles.socialInput)}
                name="instagram"
              >
                <img width="24" src="/images/Icons/instagram.svg" />
                <Input type="url" />
              </Form.Item>
              <Form.Item
                className={cx(styles.formItem, styles.socialInput)}
                name="linkedin"
              >
                <img width="24" src="/images/Icons/linkedin.svg" />
                <Input type="url" />
              </Form.Item>
              <p className = {styles.textLabel}>
                Elige las 6 mejores fotografías que mejor definan tu trabajo
              </p>
              <ul className = {styles.submitPhotos}>
                <li> Formato .JPG</li>
                <li> Máximo 5mp</li>
                <li>
                  Estas fotografías serán públicas y se mostrarán en tu perfil.
                  Podrás modificarlas cuando lo desees.
                </li>
              </ul>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
              >
                <Button className={styles.uploadButton}>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                  >
                    <title></title>
                    <g id="icomoon-ignore"></g>
                    <path d="M224 288h64v-128h96l-128-128-128 128h96zM320 216v49.356l146.533 54.644-210.533 78.509-210.533-78.509 146.533-54.644v-49.356l-192 72v128l256 96 256-96v-128z"></path>
                  </svg>
                  AGREGAR ARCHIVOS
                </Button>
              </Upload>
              <p className = {styles.textLabel}>
                Antes de unirte te invitamos a leer y aceptar nuestros{" "}
                <a>TÉRMINOS Y CONDICIONES</a>
              </p>
              <p className = {styles.submitPhotos}>
                <Checkbox /> He leído y acepto TÉRMINOS Y CONDICIONES
              </p>
              <div>
                <Button className={styles.submit}>REGISTRARSE</Button>
              </div>
              
            </Form>
          </Col>
        </Row>
      </Col>

      <Col className={styles.aside} md={8}>
        <p>
          Únete a Meraki para conocer ofertas laborales y promocionar tu trabajo
          con clientes de todo el país
        </p>
      </Col>
    </Row>
  );
};

export default RegistroFotografa;
