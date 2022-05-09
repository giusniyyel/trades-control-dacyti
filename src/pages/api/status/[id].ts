import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const statusId = req.query.id

  switch (req.method) {
    case 'GET': {
      // SHOW METHOD
      const status = await prisma.status.findUnique({
        where: { id: Number(statusId) }
      })

      return res.status(200).json(status)
    }
    case 'PUT': {
      // UPDATE METHOD
      const data = req.body

      const status = await prisma.status.update({
        where: { id: Number(statusId) },
        data: {
          status_name: data.status_name
        }
      })

      return res.status(200).json(status)
    }
    case 'DELETE': {
      // DELETE METHOD
      const status = await prisma.status.delete({
        where: { id: Number(statusId) }
      })

      return res.status(200).json(status)
    }
    default: {
      return res.status(405)
    }
  }
}
