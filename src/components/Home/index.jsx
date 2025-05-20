import './Home.css';
import NavBar from '../Navbar';
import Button from '../Button';
import PicsContainer from '../Carousel/PicsContainer';
import TestimonialCarousel from '../TestmonialsCarousel';


const Home = () => {

  return (
    <>
    <main>
      <NavBar/>
      <div className="hero">
        <div className="hero-text">
          <h1>LoveBox</h1>
          <h2>A caixa de memórias do seu relacionamento</h2>
          <Button content="Registrar Memórias" className="btn-large"/>
        </div>
     
          <div className="hero-image"><img src="src\assets\img\ChatGPT Image 16 de mai. de 2025, 09_36_09.png"></img></div>
          <Button content="Registrar Memórias" className="btn-mobile"></Button>
      </div>
    </main>
    <div>
    <PicsContainer/>
    <TestimonialCarousel
  testimonials={[
     {
    text: "A LoveBox foi o presente mais criativo que já dei. Meu namorado amou cada detalhe!",
    author: "Camila & João"
  },
  {
    text: "Criamos nossa caixinha digital com as melhores memórias... até chorei lendo depois.",
    author: "Lucas & Marina"
  },
  {
    text: "Simples de montar e muito especial. Amei o resultado!",
    author: "Duda & Igor"
  },
  {
    text: "Estávamos à distância e o LoveBox foi nosso jeitinho de nos sentirmos mais perto.",
    author: "Bia & Pedro"
  },
  {
    text: "Nunca imaginei que um site pudesse emocionar tanto. Perfeito pra datas especiais.",
    author: "Rebeca & Carol"
  }
  ]}
/>

    </div>
    </>
  );
}

export default Home;