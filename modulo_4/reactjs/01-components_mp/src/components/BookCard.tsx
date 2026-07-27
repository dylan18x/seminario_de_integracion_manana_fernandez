interface BookCardProps {
  title: string
  description?: string
  highlighted?: boolean
}

export default function BookCard({
  title,
  description = 'Sin resumen disponible',
  highlighted = false,
}: BookCardProps) {
  return (
    <div
      style={{
        border: highlighted ? '2px solid gold' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: highlighted ? '#fffbea' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description}</p>
    </div>
  )
}
