import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  state = { language: 'english', color: 'red' };

  // onLanguageChange = language => {
  //   this.setState({ language });
  //   if (language === 'english') {
  //     this.setState({ color: 'red' });
  //   } else {
  //     this.setState({ color: 'green' });
  //   }
  // };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;