import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';

const AppRoutes: React.FC = () => {

  return (
      <Routes>
          <Route path='/main-page' element={<Dashboard />}/>
              
          <Route path='*' element={<Navigate to="/main-page" />} />
      </Routes>
  );
};

export default AppRoutes;
