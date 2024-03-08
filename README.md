# React provider for Firebase

This utility package is created for firebase+React users who wanna access the firebase's auth state from context. The project built on top of TypeScript so it contains typings too.

## Install

With **yarn**:
```bash
yarn add @pilab/firebase-provider
```

With **npm**:

```
npm install --save @pilab/firebase-provider
```


## Usage

First of all you should call `initializeApp` with your firebase config, and then you are ready to use this provider package, preferred in your top level of your app as bellow:

```ts
import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Your app initialization code from firebase console
import "./firebase";

// Import provider from the base package
import { FirebaseProvider } from "@pilab/firebase-provider";

ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>
        {/* Wrap yout app's content with the provider */}
        <FirebaseProvider>
            <App />
        </FirebaseProvider>
    </React.StrictMode>
);

```

Later in your app you can easily access the context using the `useFirebase` hook:
```ts
const { user, app, isAuthenticated } = useFirebase();
```


Made with ❤️ by nev3rkn0wn - PR's are welcome!