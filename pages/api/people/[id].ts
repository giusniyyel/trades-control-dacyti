import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const personalId = req.query.id

  switch (req.method) {
    case 'GET': {
      const personal = await prisma.personal.findUnique({
        where: { id: Number(personalId) }
      })

      return res.status(200).json(personal)
    }
    case 'PUT': {
      // UPDATE METHOD
      const data = req.body

      const personal = await prisma.personal.update({
        where: { id: Number(personalId) },
        data: {
          full_name: data.full_name
        }
      })

      return res.status(200).json(personal)
    }
    case 'DELETE': {
      // DELETE METHOD
      const personal = await prisma.personal.delete({
        where: { id: Number(personalId) }
      })

      return res.status(200).json(personal)
    }
    default: {
      return res.status(405)
    }
  }
}
