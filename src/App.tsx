import { lazy, Suspense, useState } from 'react';
import './App.css';
// import Parent from './parent';
// import Other from './test';

function App() {
  // const MarkdownPreview = lazy(() => import('./lazy'));
  const MarkdownPreview = lazy(() => delayForDemo(import('./lazy')));

  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('Hello, **world**!');

  // Add a fixed delay so you can see the loading state
  function delayForDemo(promise: Promise<typeof import('./lazy')>) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }

  return (
    <>
      {/* <Other /> */}
      {/* <Parent /> */}
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <label>
        <input
          type='checkbox'
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<p>Loading...</p>}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </>
  );
}

export default App;
