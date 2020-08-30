const URL_BASE = " http://localhost:8080/";

const getClients = async () => {
  const response = await fetch(`${URL_BASE}clients`);
  return await response.json();
};

const getClient = async (id) => {
  const response = await fetch(`${URL_BASE}clients/${id}`);
  return await response.json();
};

const signUp = async (request) => {
  const response = await fetch(`${URL_BASE}authClients/sign-up`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const posts = await response.json();

  return posts;
};

export { getClient, getClients, signUp };
