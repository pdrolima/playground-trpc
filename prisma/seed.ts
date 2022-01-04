import { prisma } from '../src/backend/prisma';
import { restaurants } from "./restaurants";

async function main() {
    for (let restaurant of restaurants) {
        await prisma.restaurant.create({
            data: restaurant
        })
    }
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => prisma.$disconnect())
