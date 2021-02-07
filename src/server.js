import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Skeleton from "./Skeleton";
import ReactApp from './App'

const app = express()
const port = 3000

app.use('/public', express.static(path.join(__dirname,'../public')));

app.get('*', (req, res) => {

  const renderedApp = ReactDOM.renderToString(<ReactApp/>)
  const html = ReactDOM.renderToStaticMarkup(<Skeleton>{renderedApp}</Skeleton>)
  res.send(`<!doctype html>${html}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
