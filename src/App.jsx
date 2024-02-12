import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes';

export default function App() {
  return (
    <RouterProvider router={routes} />
  )
}
