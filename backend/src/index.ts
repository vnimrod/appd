import { PrismaClient, Todo } from '@prisma/client'
import express from 'express'
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/todos', async (req, res) => {
    const { search } = req.query;
    const todos = await prisma.todo.findMany({ include: { tags: true } });
    res.json(todos.filter(todo => todo.text?.trim()?.toLowerCase()?.startsWith((search as string)?.trim()?.toLowerCase() || '')));
})

app.post(`/api/todo`, async (req, res) => {
    const { text } = req.body
    const newTodo = await prisma.todo.create({
        data: { text },
        include: { tags: true }
    })
    res.json(newTodo);
})

app.delete(`/api/todo/:id`, async (req, res) => {
    const { id } = req.params
    const todo = await prisma.todo.delete({
        where: {
            id: parseInt(id),
        },
        include: { tags: true }
    })
    res.json(todo)
})

app.patch('/api/todo', async (req, res) => {
    const { text, id, completed, tags } = req.body;
    try {
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: {
                text,
                completed
            },
            include: { tags: true }
        })
        res.json(updatedTodo)
    } catch (error) {
        res.status(500).send((error as Error)?.message);
    }
})


const server = app.listen(3333, () => console.log(`🚀 Server ready at: http://localhost:3333`))
