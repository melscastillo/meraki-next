import Head from "next/head";
import Busqueda from "../src/components/Busqueda";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const BusquedaPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  });
  return (
    <>
      <Head>
        <title>Busqueda - Meraki</title>
      </Head>
      <Busqueda />
    </>
  );
};

export default BusquedaPage;
