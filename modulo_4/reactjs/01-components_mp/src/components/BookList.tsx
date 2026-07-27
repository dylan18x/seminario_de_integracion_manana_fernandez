interface Book {
  name: string
  emoji: string
  calories: number
  peso: number
}

interface BookListProps {
  books: Book[]
  title?: string
}

export default function BookList({ books, title = 'Libros Destacados' }: BookListProps) {
  if (books.length === 0) {
    return <p style={{ color: '#999' }}>No hay libros en la lista.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map((book) => (
          <li
            key={book.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{book.emoji} {book.name}</span>
            <span>Páginas: {book.peso}</span>
            <span style={{ color: '#888', fontSize: 13 }}>{book.calories} préstamos</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
