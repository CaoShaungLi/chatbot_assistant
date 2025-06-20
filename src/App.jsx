import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon/>
            <h2 className="logo-text">CHATBOT ASSISTANT</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down
          </button>
        </div>
        
        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon/>
            <p className="message-text">
              Hey there 👋 <br/> How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum amet tenetur distinctio impedit laudantium ut veniam! Quis voluptates necessitatibus, pariatur consectetur iure tenetur veniam quod iste a atque! Voluptatibus, cumque.
            </p>
          </div>
        </div>

        {/* Chatbot Footer*/}
        <div className="chat-footer">
          <ChatForm />
        </div>
      </div>
      
    </div>
  )
}

export default App