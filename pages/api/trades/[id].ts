import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tradeId = req.query.id

  switch (req.method) {
    case 'GET': {
      // SHOW METHOD
      const trade = await prisma.trade.findUnique({
        where: { id: Number(tradeId) }
      })

      return res.status(200).json(trade)
    }
    case 'PUT': {
      // UPDATE METHOD
      const data = req.body

      const trade = await prisma.trade.update({
        where: { id: Number(tradeId) },
        data: {
          heading: data.heading,
          status: data.status,
          owner_name: data.owner_name,
          received_by: data.received_by,
          delivered_by: data.delivered_by,
          date_received: data.date_received,
          date_delivered: data.date_delivered
        }
      })

      return res.status(200).json(trade)
    }
    case 'DELETE': {
      // DELETE METHOD
      const trade = await prisma.trade.delete({
        where: { id: Number(tradeId) }
      })

      return res.status(200).json(trade)
    }
    default: {
      return res.status(405)
    }
  }
}
