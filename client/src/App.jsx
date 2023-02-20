import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Layout';
import Contentone from './pages/contents/Contentone';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import IconArea from './pages/IconArea';

function App() {
return (

<Routes>
<Route path="/" element={<Layout />}>
 <Route index element={<IndexPage />} />
 {/* <Route index element={<IconArea />}/> */}
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/contentone" element={<Contentone/>} />
</Route>
</Routes>

)}

export default App
