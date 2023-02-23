import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Authentication from './pages/authentication/auth.component';
import CompanyHub from './pages/companyHub/companyHub.component';

import TestComponent from './components/test.component';

const App = () => {

  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='hub' element={<CompanyHub />}>
        <Route path='test' element={<TestComponent />} />
        {/* <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} /> */}
      </Route>
      <Route path='auth' element={<Authentication />} />
    </Routes>
    
  );
};

export default App;
