import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Home() {
  return (
    <div className="flex flex-col max-w-[400px] m-auto gap-7">
      <Button variant="elevated">Button</Button>
      <Input />
      <Textarea />
    </div>
  )
}
