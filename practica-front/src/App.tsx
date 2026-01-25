import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './categorias/pages/Home'
import CategoryCrud from './categorias/pages/CategoryCrud'
import ProductCateg from './categorias/pages/productCateg'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-96 border-dashed flex items-center justify-center text-slate-400">
              Contenido del Dashboard
            </div>
          } />
          <Route path="categorias" element={<CategoryCrud />} />
          <Route path="Productos" element={<ProductCateg />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App