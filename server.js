const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/rxcourse-logging', async (req, res) => {
  try {
    const { data } = await axios.get('https://rxcourse.gitbook.io/rxcourse/basics/logging');
    res.send(data);
  } catch (err) {
    res.status(500).send('Failed to fetch RXCourse logging page.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
