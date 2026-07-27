import { useEffect } from 'react'

export default function DocumentTitle() {
  useEffect(() => {
    document.title = 'Control de Biblioteca - React 19'

    return () => {
      document.title = 'Biblioteca App'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió a Control de Biblioteca al montar este componente.
    </p>
  )
}
