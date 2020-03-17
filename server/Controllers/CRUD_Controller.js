const axios = require("axios");

module.exports = {
  async index(req, res) {
    try {
      const { data } = await axios.get("http://localhost:9999/customers");
      return res.json(data);
    } catch (error) {
      console.log(error);
    }
  },

  async store(req, res) {
    try {
      const info = req.body;
      const { data } = await axios.post(
        "http://localhost:9999/customers",
        info
      );
      return res.json(data);
    } catch (error) {
      console.log(error);
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const info = req.body;

    try {
      const { data } = await axios.put(
        `http://localhost:9999/customers/${id}`,
        info
      );
      res.json(data);
    } catch (error) {}
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await axios.delete(`http://localhost:9999/customers/${id}`);
      return res.json({ msg: "User deleted" });
    } catch (error) {
      console.log(error);
    }
  }
};
