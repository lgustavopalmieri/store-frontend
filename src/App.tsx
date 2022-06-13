import { BrowserRouter } from "react-router-dom";
import './App.css'
import store  from '../src/store/index';
import { Provider } from 'react-redux';
import AppRoutes from "./routes";
import { AppThemeProvider } from "./contexts/ThemeContext";



function App() {
  return (
    <AppThemeProvider>
      <Provider store={store}>
          
            <AppRoutes />        
            
      
      </Provider>
    </AppThemeProvider>
  );
}

export default App;
