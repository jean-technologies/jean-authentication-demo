import { JeanProvider, SignInWithJean, useJean } from '@jeanmemory/react';
import './App.css';

// Test API key inheritance by using a WRONG key in Provider
const WRONG_API_KEY = "jean_sk_wrong_key_should_fail";
const JEAN_API_KEY = process.env.REACT_APP_JEAN_API_KEY || "jean_sk_your_api_key_here";

function App() {
  return (
    <JeanProvider apiKey={JEAN_API_KEY}>
      <AuthenticatedApp />
    </JeanProvider>
  );
}

function AuthenticatedApp() {
  const { isAuthenticated, user, signOut } = useJean();

  if (!isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center' 
      }}>
        <h1>🔐 Jean Memory Authentication</h1>
        <p>Secure OAuth 2.1 authentication in just a few lines of code</p>
        
        <SignInWithJean 
          {...({ asChild: true } as any)}
          onSuccess={(user) => console.log('User signed in:', user)}
        >
          <button style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '20px'
          }}>
            Sign In with Jean
          </button>
        </SignInWithJean>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center' 
    }}>
      <h1>✅ Authentication Successful!</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        border: '1px solid #dee2e6', 
        borderRadius: '8px', 
        padding: '20px', 
        margin: '20px 0',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h3>User Information</h3>
        <p><strong>Name:</strong> {user?.name || 'Not provided'}</p>
        <p><strong>Email:</strong> {user?.email || 'Not provided'}</p>
        <p><strong>Status:</strong> ✅ Authenticated</p>
      </div>

      <button
        onClick={signOut}
        style={{
          padding: '12px 24px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Sign Out
      </button>

      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666', maxWidth: '500px' }}>
        <p>🎉 That's it! You now have secure, persistent authentication with OAuth 2.1 PKCE.</p>
        <p>Users stay logged in across browser refreshes and have universal identity across Jean Memory apps.</p>
      </div>
    </div>
  );
}

export default App;
