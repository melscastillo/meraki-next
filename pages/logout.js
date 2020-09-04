import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Logout() {
  const router = useRouter();
  useEffect(() => {
    window.localStorage.removeItem("token");
    router.push("/");
  }, []);
  return <div />;
}
export default Logout;
