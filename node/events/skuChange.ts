import type { EventContext, IOClients } from '@vtex/api'

export async function skuChange(ctx: EventContext<IOClients>) {
  console.log('RECEIVED EVENT', ctx.body)

  return true
}
