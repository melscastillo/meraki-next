import {Result, Button} from 'antd'
import styles from "./../styles/404.module.css";

export default function Custom404() {
    return(
        <Result
  status="404"
  title="404"
  subTitle="Disculpa, la página que estás buscando no existe"
  extra={<Button className = {styles.submit} type="primary">Regresar al Inicio</Button>}
/>
    )
  
}