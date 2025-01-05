import { useNavigate } from 'react-router';
import { Button } from '../presentation/components/ui/shadcn/button';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate('/login')}>Click me</Button>
    </div>
  );
}

export default App;
