import { Bus } from './components/bus';
import { Students } from './data/students';

function App() {
  return (
    <div className="container p-4">
      <h2 className="text-center mb-4">Linhas de Ônibus</h2>
      <Bus e={Students} />
    </div>
  );
}

export default App;