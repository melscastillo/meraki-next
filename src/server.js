const URL_BASE = " https://meraki-app-reliable-rhinocerous-vx.mybluemix.net/";

const getClients = async () => {
  const response = await fetch(`${URL_BASE}clients`);
  return await response.json();
};

const getClient = async (id) => {
  const response = await fetch(`${URL_BASE}clients/${id}`);
  return await response.json();
};

const Login = async (email, password) => {
  const response = await fetch(`${URL_BASE}clients/login`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return await response.json();
};

export { getClient, getClients, Login };
