import Header from "../../components/header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';


function Home() {
     return (
     <section className='container'>
     <div className='apresentacao'>
     <p>Olá, somos <br/>
     <span>Almeida e Pires</span> <br/>
     Devs Full Stack
     </p>
       <Link to="/Sobre" className='btn btn-red'>
         Saiba mais sobre nós!
       </Link>
     </div>
     <figure>
       <img className='img-home' src="/Phone.svg" alt="Imagem da home" />
     </figure>
     </section>
     )
}

export default Home