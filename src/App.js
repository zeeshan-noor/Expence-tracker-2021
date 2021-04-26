import Child from "./Child";
import './Child.css'
import {TransactionProvider} from './TrasContext'
function App() {
  return (
    <TransactionProvider>
      <Child/>
    </TransactionProvider>
  
  );
}

export default App;
