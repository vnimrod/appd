import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const todoData: Prisma.TodoCreateInput[] = [
    {
        "text": "Do something nice for someone I care about",
        "completed": true,
        tags: {
            create: [{ text: "something nice" }]
        }
    },
    {
        "text": "Memorize the fifty states and their capitals",
        "completed": false,
    },
    {
        "text": "Watch a classic movie",
        "completed": false,
        tags: {
            create: [{ text: "movie" }]
        }
    },
    {
        "text": "Contribute code or a monetary donation to an open-source software project",
        "completed": true,
        tags: {
            create: [{ text: "open-source" }, { text: "software" }, { text: "code" }]
        }
    },
    {
        "text": "Solve a Rubik's cube",
        "completed": false,
    },
    {
        "text": "Bake pastries for me and neighbor",
        "completed": true,
    },
    {
        "text": "Go see a Broadway production",
        "completed": false,
    },
    {
        "text": "Write a thank you letter to an influential person in my life",
        "completed": true,
    },
    {
        "text": "Invite some friends over for a game night",
        "completed": false,
    },
    {
        "text": "Have a football scrimmage with some friends",
        "completed": true,
    },
    {
        "text": "Text a friend I haven't talked to in a long time",
        "completed": false,
    },
    {
        "text": "Organize pantry",
        "completed": true,
    },
    {
        "text": "Buy a new house decoration",
        "completed": false,
    },
    {
        "text": "Plan a vacation I've always wanted to take",
        "completed": true,
        tags: {
            create: [{ text: "vacation" }]
        }
    },
    {
        "text": "Clean out car",
        "completed": false,
    }
]

async function main() {
    console.log(`Start seeding ...`)
    for (const u of todoData) {
        const todo = await prisma.todo.create({
            data: u,
        })
        console.log(`Created todo with id: ${todo.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
