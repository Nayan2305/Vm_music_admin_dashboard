
import './App.css';
import {Home} from './pages/index'
import { ProSidebarProvider } from 'react-pro-sidebar';
function App() {
  return (
    <ProSidebarProvider>
      <Home/>
    </ProSidebarProvider>  
    
    
  );
}

export default App;
