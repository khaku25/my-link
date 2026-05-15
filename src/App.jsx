import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  const navigateToProfile = () => setCurrentView('profile');
  const navigateToLanding = () => setCurrentView('landing');

  return (
    <div className="animate-fade-in">
      {currentView === 'landing' ? (
        <LandingPage onStart={navigateToProfile} />
      ) : (
        <ProfilePage onBack={navigateToLanding} />
      )}
    </div>
  );
}

export default App;




