const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const { json } = require("express");

app.use(cors());
app.use(json({}));

app.use("/", (req, res, next) => {
  let _url = req.body.url;
  let _method = req.body.method;
  let _data = req.body.data;
  let _headers = req.body.headers;
  let _params = req.body.params;
  //let's make the axios call now.
  axios({
    url: _url,
    method: _method,
    headers: _headers,
    data: _data,
    params: _params
  }).then((response) => {
    res.status(response.status);
    res.json(response.data);
  }).catch(err => {
    res.status(err?.response?.status || 500);
    res.json(err?.response?.data || null)
  })
})

app.listen(4005, () => {
  console.log("Proxy server started at port 4005");
})