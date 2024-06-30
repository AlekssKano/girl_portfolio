import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Service} from "./layout/sections/service/Service";
import {Works} from "./layout/sections/works/Works";
import {Slider} from "./layout/sections/slider/Slider";
import {RecentProject} from "./layout/sections/recentProject/RecentProject";


function App() {
    return (
        <div className="App">
           <Header/>
            <Main/>
            <Skills/>
            <Service/>
            <Works/>
            <Slider/>
            <RecentProject/>
        </div>
    );
}

export default App;

