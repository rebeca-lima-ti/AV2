import { ArrowLeft } from 'react-bootstrap-icons';
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListaFuncionarios from '../components/adm/ListaFuncionarios';


function Funcionarios() {
    return (
        <>
            <Header />
            <div className="container">
                <button className="btn btn-outline-primary d-flex align-items-center m-4" >
                    <ArrowLeft />Voltar
                </button>
            </div>
            <div className="container col-md-9">
                <ListaFuncionarios />
            </div>
            <Footer/>
        </>
    );
}

export default Funcionarios;