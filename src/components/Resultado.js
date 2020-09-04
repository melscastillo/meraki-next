import { Card, Col, Row } from "antd";
import Link from "next/link";
import styles from "../../styles/Resultado.module.css";

const Resultado = ({ name, lastName, image, id }) => {
  return (
    <Link href="/home/[id]" as={`home/${id}`}>
    <Col offset = {1} xs = {22} md ={10}>
        <Card
          className={styles.card}
          hoverable
          cover={<img alt="example" src={image} />}
        >
          <span className={styles.cardName}>{name} {lastName}</span>
        </Card>
    </Col>
      </Link>
  );
};

export default Resultado;
