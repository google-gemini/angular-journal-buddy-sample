# Journal with Gemini

Get started with the Gemini API by asking questions about your journal.

<a href="https://idx.google.com/import?url=https://github.com/google-gemini/angular-journal-buddy-sample">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://cdn.idx.dev/btn/open_dark_32@2x.png">
  <source media="(prefers-color-scheme: light)" srcset="https://cdn.idx.dev/btn/open_light_32@2x.png">
  <img height="32" alt="Open in IDX" src="https://cdn.idx.dev/btn/open_purple_32@2x.png">
</picture>
</a>

## Basic request

To send your first API request with the [Gemini API JavaScript SDK](https://github.com/google-gemini/generative-ai-js), make sure you have the right dependencies installed (see installation steps below) and then run the following code:

```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("GEMINI_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());
```

## Setup

1. If you don’t have Angualr installed, install it [from Angular.io](https://angular.io/cli).

2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repository.

3. Install the requirements:

   ```bash
   $ npm install
   ```

4. Run the app:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

5. Paste your [API key](https://ai.google.dev/gemini-api/docs/api-key) in the frontend, note this is generally a bad practice and is just shown here for simplicity.
