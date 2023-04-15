# Firebase React Provider

This utility package is created for firebase/React users who wanna access the firebase's auth state from context.

You should call `initializeApp` with your firebase config, and then you are ready to use this provider package:

```js
import React from "react";
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

Later in you app you can use the useFirebase hook like this:
```js
const { user, isAuthenticated } = useFirebase();
```



PR's are welcome!
