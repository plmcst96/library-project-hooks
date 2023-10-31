import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
// import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import romanceBooks from '../src/data/books/romance.json'
// import SingleBook from './components/SingleBook';

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />

      <BookList books={romanceBooks} />

      <MyFooter />
    </div>
  );
}

export default App;
