"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4">
        Try again
      </button>
    </div>
  )
}