
import './App.css';
import Comment from './Components/Comment';
import { comment } from './Data/Data'

function App() {
  return (
    <div className="app">
      {comment.map((el) => (
        <Comment author={el.author} text={el.text} date={el.date} />
      ))}
    </div>
  );
}

export default App;
