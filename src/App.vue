<template>
  <div id="app">
    <div class="cursor"></div>
    <link rel="icon" href="static/img/logojf.png">
    <header>
      <svg id="LOGO" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5500 2700">
        <defs>
        </defs>

        <polygon id="descente" class="cls-3"  points="3108.66 2206.16 3141.34 2263.35 2803.3 2457.39 2471.38 2284.8 2502.02 2230.67 2797.46 2382.84 3108.66 2206.16"/>

        <text id="julien" class="cls-7" transform="translate(1900,1500)">JULIEN</text>

        <text id="ferre" class="cls-7" transform="translate(1900,1500)">FERRÉ</text>

        <polygon id="fondbleu" class="cls-4"
                 points="2752.36 275.79 1903.74 759.87 1923.96 1787.74 2798.75 2240.06 3683.01 1725.55 3662.79 759.87 2752.36 275.79"/>

        <rect id="barre" class="cls-3" x="2650.6" y="300" width="209.43" height="1908.51"/>

        <rect id="jhaut" class="cls-3" y="500" x="2265" width="100" height="74.81"/>
        <rect id="jhaut2" class="cls-3" x="2390" y="430"  width="308.34" height="74.81"/>
        <rect id="jhaut1" class="cls-3" x="2520" y="357" width="182.06" height="74.81"/>

        <rect id="croix2" class="cls-3" x="2767.12" y="1129.05" width="889.12" height="260.53"/>

        <rect id="croix" class="cls-3" x="1908.31" y="1129.05" width="963.53" height="260.53"/>

        <rect id="ftraitdeux2" class="cls-3" x="2840" y="1750" width="642.84" height="89.87"/>
        <rect id="ftraitdeux" class="cls-3" x="2832" y="1585" width="766.42" height="183.68"/>

        <rect id="jcourbe" class="cls-3" x="1940" y="1050" width="130.73" height="1000" transform="translate(1141.11 1822.66) rotate(-1.4)"/>

        <rect id="delimitation" class="cls-1" x="2900" y="-1000" width="61.41" height="495.03"  transform="rotate(38.26)"/>

        <g id="hexadroit">
          <polyline id="hexagone" class="cls-2" points="62.14 1996.63 946.39 1481.38 926.17 514.33 15.74 29.57"/>
        </g>

        <g id="hexagauche">
          <polyline id="hexagone" class="cls-2" points="882.5 29.09 33.88 513.85 54.1 1543.19 928.89 1996.15"/>
        </g>
      </svg>
      <br><br>
      <nav id="home">
        <li class="menu-lien-principal"><a href="components/Portfolio.vue#aboutme" class="menu">ABOUT ME</a></li>
        <li class="menu-lien-principal"><a href="components/Portfolio.vue#myprojects" class="menu">MY PROJECTS</a></li>
        <li class="menu-lien-principal"><a href="components/Portfolio.vue#contact" class="menu2">CONTACT</a></li>
        <li class="menu-lien-principal"><a href="#home" class="menu3">HOME</a></li>
      </nav>

    </header>

    <router-view/>

    <br>

    <footer>
      <br>
      <p>Thanks for coming !</p>
      <p class="rights">@ 2022 Julien FERRÉ - All Rights Reserved</p>
      <br><br>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{}
  }
}

</script>

<style scoped>
.cursor {
  width: 40px;
  height: 40px;
  border: 1px dashed white;
  border-radius: 50%;
  position: absolute;
  animation: Anim1 1s infinite alternate;
  pointer-events: none;
}

.cursor::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 10px;
  height: 10px;
  background: #2888f3;
  border-radius: 50%;
}

.expand {
  animation: Anim2 .5s;
  background: #298af7;
  border: 1px solid #001327;
}
@keyframes Anim1 {
  from {
    transform: scale(1) rotate(0deg);
  }
  to {
    transform: scale(0.7) rotate(190deg);
  }
}

@keyframes Anim2 {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(2);
  }
  100%{
    transform: scale(1);
    opacity:0;
  }}

.cls-1{fill:#132b47}.cls-2{fill:none;stroke:#001327;stroke-miterlimit:10;stroke-width:67px;}.cls-4{fill:#132b47;}.cls-6{stroke:#001327;stroke-miterlimit:10;}.cls-3{fill:#fff;}.cls-5{fill:#bb4e9d;}.cls-6{fill:none;stroke-width:67px;}.cls-7{font-size:800px;fill:#231f20;font-family:AgencyFB-Reg, Agency FB;}

header nav:after {
  content: url("assets/banner0.png");
  top: -142px;
  position: relative;
  z-index: -1;
}

header:after{
  content:url("assets/emancipation.png");
  top: 16500px;
  position: absolute;
  opacity: 1;
  z-index: -4;
}

header:before{
  content:url("assets/enquete.png");
  top: 11500px;
  position: absolute;
  opacity: 1;
  z-index: -3;
}

@font-face {
  font-family: 'Agency FB';
}

@media screen and (max-width: 300px) and (max-height: 600px) {
  header nav:after {
    content: none;
  }
}

nav li {
  display: inline-block;
  font-family: "Agency FB";
  font-size: 400%;
  padding: 2rem;
  top: -150px;
}

.menu2 {
  margin-left: 300px;
}

@media screen and (max-width: 900px) and (max-height: 1000px) {
  .menu2 {
    margin-left: 10px;
  }
}

a{
  text-decoration:none;
  color: #D0D0D0 ;

}

a:hover {
  color: #2888f3;
  scroll-behavior: smooth;

}

@media screen and (max-width: 1440px){

}

@media screen and (max-width: 600px) and (max-height: 700px) {
  nav li a {
    font-size: calc(15px + 2vw);

  }}

footer:before{
  content:url("assets/deadpool.png");
  top: 8956px;
  position: absolute;
  opacity: 1;
  z-index: -2;
}

footer:after{
  content:url("assets/duel.png");
  top: 6900px;
  position: absolute;
  z-index: -1;
}

</style>


