import '../App.css'
import Header from '../components/Header';
import ListaFuncionarios from '../components/adm/ListaFuncionarios';


function HomeAdm() {
    return(
        <>
            <Header/>
            <div className="container col-md-9">
                <ListaFuncionarios/>
            </div>
        </>
    );
}

export default HomeAdm;