import "./main.scss"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import AppRouter from "./components/AppRouter/appRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
