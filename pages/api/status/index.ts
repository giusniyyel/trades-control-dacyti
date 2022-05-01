import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      const status = await prisma.status.findMany()
      return res.status(200).json(status)
    }
    case 'POST': {
      const status = await prisma.status.create({
        data: {
          status_name: req.body.status_name
        }
      })

      return res.status(201).json(status)
    }
    default: {
      return res.status(405)
    }
  }
}

