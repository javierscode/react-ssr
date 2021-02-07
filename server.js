import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Skeleton from "./Skeleton";
import ReactApp from './src/app'

const app = express()
const port = 3000

app.get('*', (req, res) => {

  const renderedApp = ReactDOM.renderToString(<ReactApp/>)
  const html = ReactDOM.renderToStaticMarkup(<Skeleton>{renderedApp}</Skeleton>)
  res.send(`<!doctype html>${html}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
