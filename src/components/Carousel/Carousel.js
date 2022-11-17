import React from 'react';
import 'bulma/css/bulma.min.css';
import '../Carousel/Carousel.css';

const Carousel = () => {
  return (
    <>
    <div class="conteudo">
        <div class="carrosel">
            <div class="caixa__card cc__1">PROGRAMADOR</div>
            <div class="caixa__card cc__2">HTML</div>
            <div class="caixa__card cc__3">CSS</div>
            <div class="caixa__card cc__4">JS</div>
            <div class="caixa__card cc__5">GIT</div>
            <div class="caixa__card cc__6">REACT</div>
            <div class="caixa__card cc__7">LÓGICA</div>
            <div class="caixa__card cc__8">
                {/* <img src="./ic-logo.png" width="40px"></> */}
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Carousel