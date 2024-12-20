```javascript
// next.config.js
module.exports = {
  output: 'standalone',
};
```

```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
    </div>
  );
}
```