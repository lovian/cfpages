// src/App.jsx
function App() {
  return (
    <div className="text-center p-5">
      <img src="/assets/images/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
      <h1 className="text-3xl font-bold mt-4">Your Name</h1>
      <p className="text-gray-600">Web Developer | Designer</p>
      <div className="mt-8 space-y-4">
        <a href="https://github.com/username" className="block bg-blue-500 text-white px-4 py-2 rounded">GitHub</a>
        <a href="https://linkedin.com/in/username" className="block bg-blue-500 text-white px-4 py-2 rounded">LinkedIn</a>
      </div>
    </div>
  );
}
export default App;