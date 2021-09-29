
function App() {
  return (
    <div>
      <div></div>
      <ul>
      {Array(12).fill(null).map((_,ix)=>(<li>{ix}</li>))}
      </ul>
    </div>
  );
}

export default App;
