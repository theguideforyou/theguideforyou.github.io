export function CardSection({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 py-8'>
      {children}
    </div>
  )
}