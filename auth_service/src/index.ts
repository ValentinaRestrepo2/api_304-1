import express, { Request, Response, json } from 'express'
import cors from 'cors'
const server = express();

server.use(json())
server.use(cors())

const users: { [key: string  | number ]: any } = {}

server.get('/api', (req: Request, res: Response) => {
  res.send(users)
})

server.get('/api/:id', (req: Request, res: Response) => {
  res.send(users[req.params.id])
})

server.listen(80, () => {
  console.log('App is up and running')
})