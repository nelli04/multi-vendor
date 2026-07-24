import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'categories',
  })

  return (
    <div className="flex flex-col max-w-[400px] m-auto gap-7">
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
