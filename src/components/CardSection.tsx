export function CardSection({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-3 gap-4 py-8'>
      {children}
    </div>
  )
}