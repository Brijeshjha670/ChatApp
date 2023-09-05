import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine 
      height="100vh"
      projectID="
      ef74afad-482e-4a1c-90b7-966019499cec"
      userName="john"
      userSecret="bingbong@123%"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonawz.com/click.mp3')}
      />
    </div>
  );
}

export default App;
