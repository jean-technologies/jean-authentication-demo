# Jean Memory Authentication Demo

This repository provides a minimal demonstration of OAuth 2.1 authentication using the Jean Memory React SDK. It showcases a secure and straightforward implementation with persistent user sessions.

---

## Features

This demonstration includes:
- Secure OAuth 2.1 PKCE authentication with Google Sign-In.
- Persistent user sessions that survive browser refreshes.
- Universal identity for users across all Jean Memory applications.
- A minimal-code approach to authentication.

---

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/jonathan-politzki/jean-authentication-demo.git
cd jean-authentication-demo
npm install
```

### 2. Obtain an API Key

1. Visit the [Jean Memory Dashboard](https://jeanmemory.com/dashboard).
2. Sign up or log in with a Google account.
3. Create a new application and copy the provided API key (e.g., `jean_sk_...`).

### 3. Configure the API Key

In `src/App.tsx`, replace the placeholder with your API key:

```tsx
const JEAN_API_KEY = "jean_sk_your_actual_key_here";
```

For production environments, it is recommended to use environment variables.

### 4. Run the Demo

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application. You will see a sign-in button, and after authentication, user information and a sign-out option will be displayed.

---

## Implementation Overview

The core authentication pattern is implemented in `App.tsx` using the `@jeanmemory/react` library.

### Core Components

- **`JeanProvider`**: Wraps the application to manage authentication state.
- **`SignInWithJean`**: A component that handles the OAuth 2.1 PKCE flow.
- **`useJean`**: A hook that provides access to the authenticated user's data and session management functions like `signOut`.

### Example Usage

```tsx
import { JeanProvider, SignInWithJean, useJean } from '@jeanmemory/react';

function App() {
  return (
    <JeanProvider apiKey="jean_sk_your_key">
      <AuthenticatedContent />
    </JeanProvider>
  );
}

function AuthenticatedContent() {
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

This example demonstrates conditional rendering based on the user's authentication status.

---

## Production Checklist

Before deploying to a production environment, ensure the following steps are completed:

- Use a production API key from the Jean Memory dashboard.
- Set the correct CORS origins for your domain in the dashboard.
- Enable HTTPS on your production server for secure OAuth redirects.
- Test the complete authentication flow in your production environment.

---

## Troubleshooting

- **API Key Not Found**: Ensure the `apiKey` prop in `JeanProvider` is correctly set and not an empty string.
- **Authentication Not Persisting**: `JeanProvider` must wrap the entire component tree that requires authentication context.

---

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

---

## License

This project is licensed under the MIT License.

---

Built with [Jean Memory](https://jeanmemory.com).
