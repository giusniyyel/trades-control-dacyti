import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      const trades = await prisma.trade.findMany()
      return res.status(200).json(trades)
    }
    case 'POST': {
      const { heading, status, owner_name, received_by, delivered_by, date_received, date_delivered } = req.body

      const trade = await prisma.trade.create({
        data: {
          heading: heading,
          status: status,
          owner_name: owner_name,
          received_by: received_by,
          delivered_by: delivered_by,
          date_received: date_received,
          date_delivered: date_delivered
        }
      })

      return res.status(201).json(trade)
    }
    default: {
      return res.status(405)
    }
  }
}

