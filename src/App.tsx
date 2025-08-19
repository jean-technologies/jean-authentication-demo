import React from 'react';
import { JeanProvider, SignInWithJean, useJean } from '@jeanmemory/react';
import './App.css';

// Replace with your actual API key
const JEAN_API_KEY = "jean_sk_HbMsS3EEsZtlIcxlivYM0yPy6auK3ThYek9QMeX8lOo";

function App() {
  return (
    <div className="App">
      <JeanProvider apiKey={JEAN_API_KEY}>
        <AuthenticatedApp />
      </JeanProvider>
    </div>
  );
}

function AuthenticatedApp() {
  const { sendMessage, isAuthenticated, user, messages, isLoading } = useJean();
  const [input, setInput] = React.useState('');

  // If not authenticated, show sign-in
  if (!isAuthenticated) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>🧠 Jean Memory Demo</h1>
        <p>Sign in to access your personalized AI that remembers everything</p>
        <SignInWithJean 
          onSuccess={(user) => console.log('✅ Signed in:', user.email)}
          onError={(error) => console.error('❌ Auth error:', error)}
        >
          Sign In with Jean
        </SignInWithJean>
      </div>
    );
  }

  // Authenticated user interface
  const handleSend = async () => {
    if (!input.trim()) return;
    
    try {
      await sendMessage(input);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1>🧠 Jean Memory AI Chat</h1>
        <p>Welcome back, <strong>{user?.name || user?.email}</strong>!</p>
        <p style={{ color: '#666' }}>Ask me anything - I remember our conversations and your context</p>
      </header>

      {/* Chat History */}
      <div style={{ 
        height: '400px', 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '16px', 
        marginBottom: '16px',
        overflowY: 'auto',
        backgroundColor: '#f9f9f9'
      }}>
        {messages.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center', marginTop: '50px' }}>
            Start a conversation! Try asking: "What did I work on recently?" or "Remember that I like coffee"
          </p>
        ) : (
          messages.map((message, index) => (
            <div key={index} style={{ 
              marginBottom: '12px',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: message.role === 'user' ? '#007bff' : '#fff',
              color: message.role === 'user' ? 'white' : 'black',
              marginLeft: message.role === 'user' ? '20%' : '0',
              marginRight: message.role === 'user' ? '0' : '20%'
            }}>
              <strong>{message.role === 'user' ? 'You' : 'Jean'}:</strong> {message.content}
            </div>
          ))
        )}
        {isLoading && (
          <div style={{ textAlign: 'center', color: '#666' }}>
            <em>Jean is thinking...</em>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask Jean anything..."
          style={{
            flex: 1,
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px'
          }}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Send
        </button>
      </div>

      {/* Demo Actions */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3>Try These Examples:</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            "What did I work on recently?",
            "Remember that I prefer TypeScript",
            "What are my current projects?",
            "Help me plan my week"
          ].map(example => (
            <button
              key={example}
              onClick={() => setInput(example)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f8f9fa',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
