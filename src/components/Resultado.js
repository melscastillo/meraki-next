import { Card, Col, Row } from "antd";
import Link from "next/link";
import styles from "../../styles/Resultado.module.css";

const Resultado = ({ name, image, id }) => {
  return (
    <Col offset = {1} xs = {22} md ={10}>
      <Link href="/home/[id]" as={`home/${id}`}>
        <Card
          className={styles.card}
          hoverable
          cover={<img alt="example" src={image} />}
        >
          <span className={styles.cardName}>{name}</span>
        </Card>
      </Link>
    </Col>
  );
};

export default Resultado;
