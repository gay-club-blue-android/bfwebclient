<template>
  <div id="landing">
    <header class="header">
      <div class="navbar-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand logo" href="index.html">
                  <img src="../../public/landing/images/logo/Logo.svg" alt="Logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul id="nav" class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="active" href="#what_is_it">Брянский Фермер</a></li>
                    <li class="nav-item">
                      <a href="#benefits">Преимущества</a>
                    </li>
                    <li class="nav-item"><a href="#how_it_works">как это работает</a></li>
                    <li class="nav-item"><a href="#start_fermer_carrier">Стать фермером</a></li>
                    <li class="nav-item"><a href="#FAQ">ЧАВО</a></li>
                    <li class="nav-item">
                      <router-link to="/auth">Авторизация</router-link>
                    </li>
                  </ul>
                </div>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </header>

    <!--что это-->
    <section id="what_is_it" class="hero-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="hero-text">
              <div>
                <img src="../../public/landing/images/hero/her.jpg" class="border">
              </div>
              <h1 class="fadeInUp bgc " data-wow-delay=".3">Брянский фермер</h1>
              <p class="fadeInUp bgc" data-wow-delay=".5s">Это лучший магазин для фермеров. <br> Мы сделали для
                вас лучшие условия для купли и продажи.
                <br></p>
              <div class="button1">
                <a href="contact.html" class="btn">Скачать</a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

    <!--преимущества-->
    <section id="benefits" class="services section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title align-left">
              <h2 class="fadeInUp tgc" data-wow-delay=".4s">Преимущества</h2>
              <p class="fadeInUp tgc" data-wow-delay=".6s">Здесь мы вам расскажем наши преимущества и потенциал.</p>
            </div>
          </div>
        </div>
        <div class="single-head">
          <img class="service-patern fadeInLeft" data-wow-delay=".5s"
               src="../../public/landing/images/service/service-patern.png" alt="#">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service fadeInUp tgc" data-wow-delay=".2s">
                <h3 class="tgc"><a href="service-single.html">Лучшие фермеры</a></h3>
                <div class="icon">
                  <i class="lni lni-microscope"></i>
                </div>
                <p>Победители конкурсов на лучшую бульбу белоруси</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service fadeInUp tgc" data-wow-delay=".4s">
                <h3><a href="service-single.html">Качественная продукция</a></h3>
                <div class="icon">
                  <i class="lni lni-blackboard"></i>
                </div>
                <p>Картинка на мину похожа, мы продаем оружие?(ну почему бы и нет)</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service fadeInUp tgc" data-wow-delay=".6s">
                <h3><a href="service-single.html">Быстрая тех поддержка</a></h3>
                <div class="icon">
                  <i class="lni lni-ux"></i>
                </div>
                <p>Настолько быстро вас нахуй не посылали никогда</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-service fadeInUp tgc" data-wow-delay=".8s">
                <h3><a href="service-single.html">Удобный и интуетивно понятный интерфейс</a></h3>
                <div class="icon">
                  <i class="lni lni-graph"></i>
                </div>
                <p>Ну вообщем и так понятно</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--как это работает-->
    <section id="how_it_works" class="about-us section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="about-left">
              <div class="section-title align-left">
                <h2 class=" fadeInUp tgc" data-wow-delay=".4s">Как это работает?</h2>
              </div>
              <div class="about-tab wow fadeInUp" data-wow-delay=".4s">

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#t-tab1"
                                          role="tab">Скачать</a></li>
                  <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#t-tab2"
                                          role="tab">Выбрать</a></li>
                  <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#t-tab3"
                                          role="tab">Заказать</a></li>
                </ul>

                <div class="tab-content" id="myTabContent">

                  <div class="tab-pane fade active" id="t-tab1" role="tabpanel">
                    <div class="tab-content">
                      <ul>
                        <li><i class="lni lni-checkmark-circle"></i> Скачиваешь приложение</li>
                        <li><i class="lni lni-checkmark-circle"></i> Регистрируешься в нем</li>

                      </ul>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="t-tab2" role="tabpanel">
                    <div class="tab-content">
                      <ul>
                        <li><i class="lni lni-checkmark-circle"></i> Ищеш что тебе нужно</li>
                        <li><i class="lni lni-checkmark-circle"></i> Хз может что то еще по желанию</li>

                      </ul>

                    </div>
                  </div>

                  <div class="tab-pane fade" id="t-tab3" role="tabpanel">
                    <div class="tab-content">
                      <ul>
                        <li><i class="lni lni-checkmark-circle"></i> Привязываешь карту</li>
                        <li><i class="lni lni-checkmark-circle"></i> Оплачиваешь</li>
                        <li><i class="lni lni-checkmark-circle"></i> Забираешь товар</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="about-right  fadeInRight" data-wow-delay=".4s">
              <img src="../../public/landing/images/about/baba.jpg" alt="#">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--стать фермером-->
    <section id="start_fermer_carrier" class="intro-video-area overlay section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title white-text">
              <h2 class="fadeInUp" data-wow-delay=".4s">Хочешь стать фермером?</h2>
              <p class=" fadeInUp" data-wow-delay=".6s">Здесь ты можешь узнать, как за пару минут стать одним из
                нашей
                команды фермеров.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="intro-video-play">
              <div class="carousel-3d">
                <figure>
                  <div><a href="#any"><img src="../../public/landing/images/hero/her.jpg" alt=""/></a></div>
                  <div><a href="#any"><img src="../../public/landing/images/hero/her.jpg" alt=""/></a></div>
                  <div><a href="#any"><img src="../../public/landing/images/hero/her.jpg" alt=""/></a></div>
                  <div><a href="#any"><img src="../../public/landing/images/hero/her.jpg" alt=""/></a></div>
                  <div><a href="#any"><img src="../../public/landing/images/hero/her.jpg" alt=""/></a></div>
                  <div><a href="#any"><img src="../../public/landing/images/hero/her.jpg" alt=""/></a></div>
                  <div><a href="#any"><img src="../../public/landing/images/hero/her.jpg" alt=""/></a></div>

                </figure>
                <nav>
                  <button class="nav">Назад</button>
                  <button class="nav">Вперед</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- row -->
    </section>

    <!--ЧАВО-->
    <div id="FAQ" class="container-fluid ">
      <div class="container">
        <section>
          <div class="row">
            <div class="section-title align-left">
              <h2 class="fadeInUp tgc" data-wow-delay=".4s">Часто задаваемые вопросы</h2>
            </div>
            <div class=" col-12  ">
              <div class="accordion " id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                              data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i class="fa fa-amazon main"></i><i class="fa fa-angle-double-right mr-3"></i>Как оплачивать.
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" class="collapse fade" aria-labelledby="headingOne">
                    <div class="card-body">
                      Можно картой ,налом ,аналом ,криптоволютой
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse"
                              data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <i class="fa fa-plus main"></i><i class="fa fa-angle-double-right mr-3"></i>Почему мы.
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse " aria-labelledby="headingTwo"
                  >
                    <div class="card-body">
                      Потому что мы командой из 7 человек старались делать этот проект(а еще, ток спизди сайт сука, я ж
                      тебя знаю, ЛЕНИВЫЙ РАЗРАБ JAVASCRIPT, ИДИ РУЧКАМИ ВЕРСТКУ ПИШИ)
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse"
                              data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <i class="fa fa-expeditedssl main"></i><i class="fa fa-angle-double-right mr-3"></i>Как сделать
                        чтоб не вздомали(Что-то с двух этапной аундификацией(аудификацией(а да похуй))).
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse " aria-labelledby="headingThree">
                    <div class="card-body">
                      Записываете номер телефона, вам ghb[jlbn rjl rjl ds tuj dgbcsdftnt d dscdtntdijtcz jryj b djn b
                      dct
                      rjulf rnj-nj gjgsnftncz djqnb yf frrfeyn ,tp dfituj dtljvf dfv ghbltn edtljvktybt(ну да,ну да
                      пошел
                      я нахер)
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse"
                              data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <i class="fa fa-envelope main"></i><i class="fa fa-angle-double-right mr-3"></i>Как с нами
                        связатся.
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" class="collapse " aria-labelledby="headingFour">
                    <div class="card-body">
                      Хз
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class=" single-footer">
                <div class="logo">
                  <a href="index.html">ddd</a>
                </div>
                <p>Какая то информация на которую всем похуй.</p>
                <div class="footer-social">
                  <ul>
                    <li><a href="#"><i class="lni lni-instagram"></i></a></li>
                    <li><a href="#"><i class="lni lni-twitter"></i></a></li>
                    <li><a href="#"><i class="lni lni-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer">
                <h3>Ну если вы это смотрите</h3>
                <ul>
                  <li><a href="#">В душе не ебу что здесь написать</a></li>
                  <li><a href="#">Наши сервисы</a></li>
                  <li><a href="#">Связаться с нами (ну что вам ответят и так знаете)</a></li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer ">
                <h3>Еще что-то</h3>
                <ul>
                  <li><a href="#">Topics</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">License</a></li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer">
                <h3>Поддержка</h3>
                <ul>
                  <li><a href="#">Cookies</a></li>
                  <li><a href="#">Forum</a></li>
                  <li><a href="#">Support Team</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
          </div>
        </div>
      </div>
      <!--/ End Footer Middle -->
      <!-- Start Footer Bottom -->

      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-12">
              <div class="left">
                <p>BY GodOfCat,Qvijae,Astagor,_HADES_,Zandegok,Rayman,didjei(от didjei(не пиздите пожалуйста в голову
                  ничего не приходит))<a href="https://graygrids.com/" rel="nofollow"
                                         target="_blank">GayClubBlueAndroid</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- End Footer Middle -->
    </footer>
    <!--/ End Footer Area -->

    <!-- ========================= scroll-top ========================= -->
    <a href="#" class="scroll-top btn-hover">
      <i class="lni lni-chevron-up"></i>
    </a>

  </div>

</template>

<script>

export default {
  name: "ComponentLanding",
  mounted() {
    let appDiv = document.getElementById("landing");

    const scriptsPath = [
      "./landing/js/bootstrap.min.js",
      "./landing/js/count-up.min.js",
      "./landing/js/wow.min.js",
      "./landing/js/tiny-slider.js",
      "./landing/js/glightbox.min.js",
      "./landing/js/imagesloaded.min.js",
      "./landing/js/isotope.min.js",
      "./landing/js/main.js",
    ];

    scriptsPath.forEach(scriptPath => {
      const script = document.createElement("script");
      script.setAttribute(
          "src",
          scriptPath
      );
      appDiv.appendChild(script);
    });

    const cssesPath = [
      "./landing/css/bootstrap.min.css",
      "./landing/css/LineIcons.2.0.css",
      "./landing/css/animate.css",
      "./landing/css/tiny-slider.css",
      "./landing/css/glightbox.min.css",
      "./landing/css/main.css",
    ];


    cssesPath.forEach(cssPath => {
      const css = document.createElement("link");
      css.setAttribute(
          "rel",
          "stylesheet"
      );
      css.setAttribute(
          "href",
          cssPath
      );

      appDiv.appendChild(css);
    })


  }
}
</script>

<style scoped>
.background {
  margin-top: 10px;
  border-radius: 10px;
  background: #0d462c;
}

.border {
  border-radius: 20px;
  float: right;
  width: 50%;
  height: 50%;
}
</style>
