import WelcomeBanner from './components/WelcomeBanner'
import BookList from './components/BookList'
import BookCard from './components/BookCard'
import BookCatalogList from './components/BookCatalogList'

import DigitalCounter from './01useState/DigitalCounter'
import SafeCounter from './01useState/SafeCounter'
import TaskManager from './01useState/TaskManager'
import UserProfileForm from './01useState/UserProfileForm'

import DocumentTitle from './02useEffect/DocumentTitle'
import FetchUser from './02useEffect/FetchUser'
import FetchUsers from './02useEffect/FetchUsers'

import AutoFocusForm from './03useRef/AutoFocusForm'
import InlineEditor from './03useRef/InlineEditor'


const books = [
  { name: 'Cien Años de Soledad', emoji: '📖', calories: 15, peso: 417 },
  { name: 'Don Quijote de la Mancha', emoji: '📚', calories: 28, peso: 863 },
  { name: 'El Aleph', emoji: '📕', calories: 9, peso: 210 },
]

const catalog = [
  { id: 1, name: 'Cien Años de Soledad - Gabriel García Márquez', price: 25.00 },
  { id: 2, name: 'Don Quijote de la Mancha - Miguel de Cervantes', price: 35.00 },
  { id: 3, name: 'Rayuela - Julio Cortázar', price: 20.00, outOfStock: true },
  { id: 4, name: 'Ficciones - Jorge Luis Borges', price: 18.00 },
]
const PASO = 1

export default function App() {
  const content =
  PASO === 1 ? <WelcomeBanner /> :
    PASO === 2 ? <BookList books={books} title="Libros Destacados" /> :
    PASO === 3 ? <BookCard title="Don Quijote de la Mancha" description="Obra cumbre de la literatura española" highlighted /> :
    PASO === 4 ? <BookCatalogList books={catalog} title="Catálogo de Libros" /> :
    PASO === 20 ? <DigitalCounter initialValue={5} step={1} label="Contador de Préstamos" /> :
    PASO === 21 ? <SafeCounter /> :
    PASO === 22 ? <UserProfileForm /> :
    PASO === 23 ? <TaskManager /> :
    PASO === 30 ? <DocumentTitle /> :
    PASO === 31 ? <FetchUser /> :
    PASO === 32 ? <FetchUsers /> :
    PASO === 40 ? <AutoFocusForm /> :
    PASO === 41 ? <InlineEditor /> :
    <WelcomeBanner />

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
