# 🔐 Jean Memory Authentication Demo

**Minimal viable authentication with Jean Memory - secure OAuth 2.1 in just a few lines of code.**

---

## 🎯 What This Demo Shows

This repository demonstrates the **simplest possible authentication** using Jean Memory:
- ✅ **Secure OAuth 2.1 PKCE authentication** with Google sign-in  
- ✅ **Persistent user sessions** that survive browser refreshes
- ✅ **Universal identity** - same user account across all Jean Memory apps
- ✅ **Zero authentication complexity** for developers
- ✅ **Minimal code** - just the essentials

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/jonathan-politzki/jean-authentication-demo.git
cd jean-authentication-demo
npm install
```

### 2. Get Your API Key

1. Visit [Jean Memory Dashboard](https://jeanmemory.com/dashboard)
2. Sign up/login with Google
3. Create a new app and copy your API key (`jean_sk_...`)

### 3. Configure Your API Key

Replace `jean_sk_your_api_key_here` in `src/App.tsx` with your actual API key:

```tsx
const JEAN_API_KEY = "jean_sk_your_actual_key_here";
```

### 4. Run the Demo

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) and you'll see:
- A clean "Sign In with Jean" button
- After authentication: user information and sign-out functionality
- Persistent sessions across browser refreshes

---

## 💡 How It Works

### The Minimal Authentication Pattern

```tsx
import { JeanProvider, SignInWithJean, useJean } from '@jeanmemory/react';

function App() {
  return (
    <JeanProvider apiKey="jean_sk_your_key">
      <AuthenticatedApp />
    </JeanProvider>
  );
}

function AuthenticatedApp() {
  const { isAuthenticated, user, signOut } = useJean();

  if (!isAuthenticated) {
    return (
      <SignInWithJean onSuccess={(user) => console.log('User signed in:', user)}>
        <button>Sign In with Jean</button>
      </SignInWithJean>
    );
  }

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

That's it! A complete authentication system in ~20 lines.

### Under the Hood
1. **OAuth 2.1 PKCE Flow** - Secure authentication with Google (no client secrets needed)
2. **Session Persistence** - Users stay logged in across browser refreshes and tabs  
3. **Universal Identity** - Same user account across all Jean Memory applications
4. **JWT Token Management** - Automatic token handling and refresh
5. **Error Recovery** - Handles token expiration and network issues gracefully

---

## 🔧 Code Structure

### Core Components

**`App.tsx`** - Minimal authentication example (only 30 lines!)
- `JeanProvider` - Wraps the app and manages authentication state
- `SignInWithJean` - Handles OAuth 2.1 PKCE flow automatically  
- `useJean` hook - Provides access to authenticated user and sign-out functionality

### Key Features Demonstrated

1. **Conditional Rendering** - Shows sign-in UI vs. authenticated interface
2. **Session Persistence** - Refresh the page and stay logged in
3. **User Information** - Access to user name, email, and auth status
4. **Sign Out** - Clean sign-out with state reset

---

## 🎨 Customization

### Custom Sign-In Button

```tsx
<SignInWithJean onSuccess={(user) => console.log('Signed in:', user)}>
  <button className="my-custom-button">
    🔐 Sign In with Jean
  </button>
</SignInWithJean>
```

### Environment Variables

For production, use environment variables:

```bash
# .env
REACT_APP_JEAN_API_KEY=jean_sk_your_production_key
```

```tsx
const JEAN_API_KEY = process.env.REACT_APP_JEAN_API_KEY;
```

---

## 🌟 Production Checklist

When deploying to production:

- ✅ Use production API key (not test key)
- ✅ Set proper CORS origins in Jean Memory dashboard
- ✅ Enable HTTPS for OAuth redirects
- ✅ Test authentication flow in production environment

---

## 🆘 Troubleshooting

### Common Issues

**"API key not found" error**
```tsx
// ❌ Wrong
<JeanProvider apiKey="">

// ✅ Correct  
<JeanProvider apiKey="jean_sk_your_actual_key">
```

**Authentication not persisting**
```tsx
// Make sure JeanProvider wraps your entire app
function App() {
  return (
    <JeanProvider apiKey={JEAN_API_KEY}>
      {/* All components that use authentication */}
    </JeanProvider>
  );
}
```

---

## 🎉 What's Next?

You now have **minimal viable authentication** with Jean Memory! 

### Next Steps:
- Add Jean Memory chat functionality with `JeanChatComplete`
- Integrate memory features with `useJean` tools
- Build custom user interfaces
- Deploy to production

### Use Cases:
- User authentication for any React app
- Personalized AI applications  
- Cross-application identity management
- Secure session management

**Ready to add AI memory?** Check out the [full Jean Memory documentation](https://docs.jeanmemory.com) 🚀

---

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

---

## 📄 License

MIT License - feel free to use this demo as a starting point for your own applications.

---

**Built with ❤️ using [Jean Memory](https://jeanmemory.com) - The fastest way to add personalized AI memory to any application.**
