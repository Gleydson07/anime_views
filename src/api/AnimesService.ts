import { api } from ".";

class AnimeService {
  constructor() {}

  async getAnimes({offset = 0, limit = 10}) {
    return await api(`/anime?offset=${offset}&limit=${limit}`);
  }
}

export default new AnimeService();