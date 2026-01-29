'use client'

import { deleteExperience } from '@/lib/actions/experience'
import { useRouter } from 'next/navigation'

type Props = { id: string }

export function DeleteExperienceButton({ id }: Props) {
  const router = useRouter()

  async function handleClick() {
    if (!confirm('Delete this experience entry?')) return
    await deleteExperience(id)
    router.refresh()
  }

  return (
    <button type="button" onClick={handleClick} className="text-sm text-red-600 dark:text-red-400 hover:underline">
      Delete
    </button>
  )
}
