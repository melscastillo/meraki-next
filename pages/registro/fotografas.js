import Head from "next/head";
import { Row, Col } from "antd";

const Fotografas = () => {
  return (
    <>
      {" "}
      {/*Fragmento de JSX*/}
      <Head>
        <title>Meraki</title>
      </Head>
      <Row>
        <Col span={16}>Columna 1</Col>
        <Col span={8}>Columna 2</Col>
      </Row>
    </>
  );
};

export default Fotografas;
