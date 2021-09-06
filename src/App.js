import './App.css';
import Header from './Header'
import Home from './Home'
import Courses from './Courses'
import TopEarners from "./TopEarners"
import Refer from "./Refer"
import Testimonials from "./Testimonials"
import Contact from './Contact'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Courses></Courses>
      <TopEarners></TopEarners>
      <Refer></Refer>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
