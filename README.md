# 🧠 Jean Memory Demo - 5-Minute AI Chat

**A complete demo showing how to add personalized AI memory to any React application in just 5 lines of code.**

---

## 🎯 What This Demo Shows

This repository demonstrates:
- ✅ **Secure OAuth 2.1 authentication** with Google sign-in
- ✅ **Persistent user sessions** that survive browser refreshes
- ✅ **Personalized AI chat** that remembers user context across conversations
- ✅ **Universal identity** - same user account across all Jean Memory apps
- ✅ **Zero authentication complexity** for developers

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/your-username/jean-memory-demo.git
cd jean-memory-demo
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
- A "Sign In with Jean" button
- After authentication: a fully functional AI chat interface
- AI that remembers everything you tell it

---

## 💡 How It Works

### The 5 Lines That Changed Everything

```tsx
import { JeanProvider, SignInWithJean, useJean } from '@jeanmemory/react';

<JeanProvider apiKey="jean_sk_your_key">
  <SignInWithJean onSuccess={(user) => console.log('Authenticated!')}>
    Sign In with Jean
  </SignInWithJean>
</JeanProvider>
```

That's literally it. Everything else happens automatically:

### Under the Hood
1. **OAuth 2.1 PKCE Flow** - Secure authentication with Google (no client secrets needed)
2. **Session Persistence** - Users stay logged in across browser refreshes and tabs
3. **Universal Identity** - Same user account across all Jean Memory applications
4. **Automatic API Requests** - All memory queries include user context automatically
5. **Error Recovery** - Handles token expiration and network issues gracefully

---

## 🧪 Try These Examples

Once authenticated, try asking:

- **"What did I work on recently?"** - See how Jean remembers your work context
- **"Remember that I prefer TypeScript"** - Add a new memory
- **"What are my current projects?"** - Retrieve stored information
- **"Help me plan my week"** - Get personalized assistance

Each conversation builds on previous ones, creating a continuous memory thread.

---

## 🔧 Code Structure

### Core Components

**`App.tsx`** - Main application with authentication and chat interface
- `JeanProvider` - Wraps the app and manages authentication state
- `SignInWithJean` - Handles OAuth 2.1 PKCE flow automatically
- `useJean` hook - Provides access to authenticated user and chat functionality

### Key Features Demonstrated

1. **Conditional Rendering** - Shows sign-in UI vs. authenticated chat interface
2. **Real-time Chat** - Messages appear instantly with loading states
3. **Session Persistence** - Refresh the page and stay logged in
4. **Error Handling** - Graceful handling of authentication and API errors
5. **User Context** - AI responses are personalized based on user history

---

## 🎨 Customization

### Styling the Sign-In Button

```tsx
<SignInWithJean 
  className="custom-signin-button"
  onSuccess={(user) => console.log('Signed in:', user)}
>
  <span>🔐 Custom Sign In Button</span>
</SignInWithJean>
```

### Custom Chat UI

```tsx
const { sendMessage, messages, isAuthenticated } = useJean();

// Build your own chat interface using these primitives
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
- ✅ Monitor authentication success rates

---

## 📚 Documentation

- **Jean Memory Docs**: [docs.jeanmemory.com](https://docs.jeanmemory.com)
- **React SDK Guide**: [Complete implementation guide](https://docs.jeanmemory.com/sdk/react)
- **Authentication**: [OAuth 2.1 details](https://docs.jeanmemory.com/authentication)

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

**CORS errors in production**
- Add your production domain to allowed origins in Jean Memory dashboard
- Ensure HTTPS is enabled for OAuth redirects

---

## 🏆 Success Metrics

After running this demo, you should see:

- ✅ **Sub-5 minute setup time**
- ✅ **Zero authentication complexity**  
- ✅ **Persistent sessions across browser restarts**
- ✅ **Personalized AI responses based on user context**
- ✅ **Universal user identity across applications**
- ✅ **Production-ready security (OAuth 2.1 PKCE)**

---

## 📞 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/jean-technologies/jean-memory/issues)
- **Discord Community**: [Join our developer community](https://discord.gg/jeanmemory)
- **Email Support**: support@jeanmemory.com

---

## 🎉 What's Next?

Congratulations! You've successfully implemented personalized AI memory in a React application. 

### Extend This Demo:
- Add memory management features
- Integrate with your existing user system
- Build custom chat interfaces
- Deploy to production

### Real-World Applications:
- Customer support with memory
- Personalized learning assistants
- Context-aware productivity tools
- Multi-session project continuity

**The future of AI is personal, and it starts with memory.** 🚀

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
