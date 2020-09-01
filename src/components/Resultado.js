import {Card, Col} from "antd";
import styles from "../../styles/Busqueda.module.css";

const Resultado = ({name,image}) =>{
    return (
    <Col offset={1} span={10}>
    <Card className = { styles.card}
        hoverable
        cover={
          <img
            alt="example"
            src= {image}
          />
        }
      >
        <span className = {styles.cardName}>{name}</span>
      </Card>
      </Col>
      )
}

export default Resultado