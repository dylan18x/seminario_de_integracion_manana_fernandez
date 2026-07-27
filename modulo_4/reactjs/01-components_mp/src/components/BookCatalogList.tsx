interface BookItem {
  id: number
  name: string
  price: number
  outOfStock?: boolean
}

interface BookCatalogListProps {
  books: BookItem[]
  title?: string
}

export default function BookCatalogList({
  books,
  title = 'Catálogo de Libros',
}: BookCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {books.length === 0 && (
        <p style={{ color: '#999' }}>No hay libros en el catálogo.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map((book) => (
          <li
            key={book.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: book.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {book.name}
              {book.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Prestado
                </em>
              )}
            </span>
            <strong>${book.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
