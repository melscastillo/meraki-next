
import Head from "next/head";
import Busqueda from "../src/components/Busqueda";

const BusquedaPage = () =>{
    return (
        <>
      {" "}
      {/*Fragmento de JSX*/}
      <Head>
        <title>Meraki-Busqueda</title>
      </Head>
      <Busqueda />
    </>
  );
};

export default BusquedaPage;
