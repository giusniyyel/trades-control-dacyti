import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      // INDEX METHOD
      const people = await prisma.personal.findMany()
      return res.status(200).json(people)
    }
    case 'POST': {
      // STORE METHOD
      const personal = await prisma.personal.create({
        data: {
          full_name: req.body.full_name
        }
      })

      return res.status(201).json(personal)
    }
    default: {
      return res.status(405)
    }
  }
}
