import './App.css';
import Header from "./Header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
