import api from ".";

const getAnimes = async (offset = 0, limit = 10) => {
  return await api("/anime");
}

export {getAnimes};