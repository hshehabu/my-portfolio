'use client'

import { deleteProject } from '@/lib/actions/projects'
import { useRouter } from 'next/navigation'

type Props = { id: string }

export function DeleteProjectButton({ id }: Props) {
  const router = useRouter()

  async function handleClick() {
    if (!confirm('Delete this project?')) return
    await deleteProject(id)
    router.refresh()
  }

  return (
    <button type="button" onClick={handleClick} className="text-sm text-red-600 dark:text-red-400 hover:underline">
      Delete
    </button>
  )
}
