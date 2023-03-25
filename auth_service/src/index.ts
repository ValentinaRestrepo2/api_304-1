import express, { Request, Response } from 'express'
const server = express();

const users: { [key: string  | number ]: any } = {}

server.get('/api', (req: Request, res: Response) => {
  res.send(users)
})

server.get('/api/:id', (req: Request, res: Response) => {
  res.send(users[req.params.id])
})

server.post('/api', (req: Request, res: Response) => {
  console.log(req.body, 'Este es el body que enviamos desde la petición')
  const id = Math.ceil((Math.random() * 10000 ))
  users[id] = {
    id,
    ...req.body
  }
  res.send(users[id])
})

server.patch('/api', (req: Request, res: Response) => {
  res.send({message: '[PATCH] Hello world!!!'})
})

server.delete('/api/:id', (req: Request, res: Response) => {
  const { id } = req.params
  delete users[+id]
})

server.listen(80, () => {
  console.log('App is up and running')
})