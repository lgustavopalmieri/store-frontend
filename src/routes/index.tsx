import { Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => {

  return (
      <Routes>
          <Route path='/main-page' />
              
          <Route path='*' element={<Navigate to="/main-page" />} />
      </Routes>
  );
};

export default AppRoutes;
