import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComponentA from "./components/ComponentA";
import CreateTable from "./components/Table";
import BasicTabs from './components/Tabs';
import Header from './components/Header'


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header/>
                        <BasicTabs/>                        
                    </>
                }/>
                
                <Route path="/result" element={
                    <>
                        <Header/>
                        <BasicTabs/>                       
                        <CreateTable/>
                    </>
                }/>
                <Route path="/componenta" element={
                    <>
                        <Header/>
                        <BasicTabs/>
                        <ComponentA/>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers