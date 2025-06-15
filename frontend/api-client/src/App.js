import { useState } from 'react';

import './App.css';
import TalkWithaAi from './pages/chat/TalkWithAi';
import RecipeGenerator from './pages/recipe/RecipeGenerator';
import ImageGenerator from './pages/image/ImageGenerator';

function App() {

  const [activeTab, setActiveTab] = useState('ask-ai');

  const handleTabChange = (tab) => {
    //alert(tab);
    setActiveTab(tab);
  }
  
  return (
    <div className="App">
      <button 
        className={activeTab === 'ask-ai' ? 'active' : ''}
        onClick={() => handleTabChange('ask-ai')}>
        Talk with AI
      </button>
      <button 
        className={activeTab === 'recipe-generator' ? 'active' : ''}
        onClick={() => handleTabChange('recipe-generator')}>
        Genetate Recipes
      </button>
      <button 
        className={activeTab === 'image-generator' ? 'active' : ''}
        onClick={() => handleTabChange('image-generator')}>
        Genetate Images
      </button>
      <div>
        {activeTab === 'ask-ai' && <TalkWithaAi />}
        {activeTab === 'recipe-generator' && <RecipeGenerator />}
        {activeTab === 'image-generator' && <ImageGenerator />}
      </div>
    </div>
  );
}

export default App;
