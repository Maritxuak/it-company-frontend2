<template>


<aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas'>
    <section class="sidebar">
        <div class="w-80px mt-3 mb-3 ml-3">
            <img src="../../assets/img/basic/logo.png" alt="">
        </div>
        <div class="relative">
            <div class="user-panel p-3 light mb-2">
                <div>
                    <div class="float-left image">
                        <img class="user_avatar" src="../../assets/img/dummy/u2.png" alt="User Image">
                    </div>
                    <div class="float-left info">
                        <h6 class="font-weight-light mt-2 mb-1">Дмитрий Христенко</h6>
                        <a href="#"><i class="icon-circle text-primary blink"></i> Онлайн</a>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="collapse multi-collapse" id="userSettingsCollapse">
                    <div class="list-group mt-3 shadow">
                        <a href="index.html" class="list-group-item list-group-item-action ">
                            <i class="mr-2 icon-umbrella text-blue"></i>Профиль
                        </a>
                        <a href="#" class="list-group-item list-group-item-action"><i
                                class="mr-2 icon-cogs text-yellow"></i>Настройки</a>
                        <a href="#" class="list-group-item list-group-item-action"><i
                                class="mr-2 icon-security text-purple"></i>Изменить пароль</a>
                    </div>
                </div>
            </div>
        </div>
        <ul class="sidebar-menu">
            <li class="header"><strong>Меню</strong></li>
            <li class="treeview"><a href="#">
                <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Профиль</span>
            </a>
            </li>
            <li class="treeview"><a href="#">
                <i class="icon icon icon-package blue-text s-18"></i>
                <span>Проекты</span>
                <span class="badge r-3 badge-primary pull-right">4</span>
            </a>
                <ul class="treeview-menu">
                    <li><a href=""><i class="icon icon-circle-o"></i>All Products</a>
                    </li>
                    <li><a href=""><i class="icon icon-add"></i>Add
                        New </a>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a href="#"><i class="icon icon-account_box light-green-text s-18"></i>Статистика</a>
            </li>
            <li class="treeview no-b">
              <a href="#">
                <i class="icon icon-package light-green-text s-18"></i>
                <span>Чаты</span>
                <span class="badge r-3 badge-success pull-right">20</span>
              </a>
            </li>

        </ul>
    </section>
</aside>
<div class="has-sidebar-left">
    <div class="pos-f-t">

</div>
    <div class="sticky">
        <div class="navbar navbar-expand navbar-dark d-flex justify-content-between bd-navbar blue accent-3">
            <div class="relative">
                <a href="#" data-toggle="push-menu" class="paper-nav-toggle pp-nav-toggle">
                    <i></i>
                </a>
            </div>
            <!--Top Menu Start -->
<div class="navbar-custom-menu">
    <ul class="nav navbar-nav">
        <!-- Messages-->
        <li class="dropdown custom-dropdown messages-menu">
            <a href="#" class="nav-link" data-toggle="dropdown">
                   <i class="icon-message "></i>
                   <span class="badge badge-success badge-mini rounded-circle">4</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
                <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu pl-2 pr-2">
                        <!-- start message -->
                        <li>
                            <a href="#">
                                <div class="avatar float-left">
                                    <img src="../../assets/img/dummy/u4.png" alt="">
                                    <span class="avatar-badge busy"></span>
                                </div>
                                <h4>
                                    Support Team
                                    <small><i class="icon icon-clock-o"></i> 5 mins</small>
                                </h4>
                                <p>Why not buy a new awesome theme?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar float-left">
                                    <img src="../../assets/img/dummy/u1.png" alt="">
                                    <span class="avatar-badge online"></span>
                                </div>
                                <h4>
                                    Support Team
                                    <small><i class="icon icon-clock-o"></i> 5 mins</small>
                                </h4>
                                <p>Why not buy a new awesome theme?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar float-left">
                                    <img src="../../assets/img/dummy/u2.png" alt="">
                                    <span class="avatar-badge idle"></span>
                                </div>
                                <h4>
                                    Support Team
                                    <small><i class="icon icon-clock-o"></i> 5 mins</small>
                                </h4>
                                <p>Why not buy a new awesome theme?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="avatar float-left">
                                    <img src="../../assets/img/dummy/u3.png" alt="">
                                    <span class="avatar-badge busy"></span>
                                </div>
                                <h4>
                                    Support Team
                                    <small><i class="icon icon-clock-o"></i> 5 mins</small>
                                </h4>
                                <p>Why not buy a new awesome theme?</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="footer s-12 p-2 text-center"><a href="#">See All Messages</a></li>
            </ul>
        </li>
        <li class="dropdown custom-dropdown notifications-menu">
            <a href="#" class=" nav-link" data-toggle="dropdown" aria-expanded="false">
                <i class="icon-notifications "></i>
                <span class="badge badge-danger badge-mini rounded-circle">4</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
                <li class="header">У тебя 3 новых уведомления</li>
                <li>
                    <ul class="menu">
                        <li>
                            <a href="#">
                                <i class="icon icon-data_usage text-success"></i> Собрание 26.06.25 в 14:00
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-data_usage text-danger"></i>Задача просрчоена!
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-data_usage text-yellow"></i>Задача скоро будет просрчоена!
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="footer p-2 text-center"><a href="#">View all</a></li>
            </ul>
        </li>
        <li>
            <a class="nav-link " data-toggle="collapse" data-target="#navbarToggleExternalContent"
               aria-controls="navbarToggleExternalContent"
               aria-expanded="false" aria-label="Toggle navigation">
                <i class=" icon-search3 "></i>
            </a>
        </li>
        <li>
            <a class="nav-link ml-2" data-toggle="control-sidebar">
                <i class="icon-tasks "></i>
            </a>
        </li>
        <li class="dropdown custom-dropdown user user-menu ">
            <a href="#" class="nav-link" data-toggle="dropdown">
                <img src="../../assets/img/dummy/u8.png" class="user-image" alt="User Image">
                <i class="icon-more_vert "></i>
            </a>
            <div class="dropdown-menu p-4 dropdown-menu-right">
                <div class="row box justify-content-between my-4">
                    <div class="col">
                        <a href="#">
                            <i class="icon-apps purple lighten-2 avatar  r-5"></i>
                            <div class="pt-1">Apps</div>
                        </a>
                    </div>
                    <div class="col"><a href="#">
                        <i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
                        <div class="pt-1">Profile</div>
                    </a></div>
                    <div class="col">
                        <a href="#">
                            <i class="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
                            <div class="pt-1">Settings</div>
                        </a>
                    </div>
                </div>
                <div class="row box justify-content-between my-4">
                    <div class="col">
                        <a href="#">
                            <i class="icon-star light-green lighten-1 avatar  r-5"></i>
                            <div class="pt-1">Favourites</div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <i class="icon-save2 orange accent-1 avatar  r-5"></i>
                            <div class="pt-1">Saved</div>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <i class="icon-perm_data_setting grey darken-3 avatar  r-5"></i>
                            <div class="pt-1">Settings</div>
                        </a>
                    </div>
                </div>
                <hr>
                <div class="row box justify-content-between my-4">
                    <div class="col">
                        <a href="#">
                            <i class="icon-apps purple lighten-2 avatar  r-5"></i>
                            <div class="pt-1">Apps</div>
                        </a>
                    </div>
                    <div class="col"><a href="#">
                        <i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
                        <div class="pt-1">Profile</div>
                    </a></div>
                    <div class="col">
                        <a href="#">
                            <i class="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
                            <div class="pt-1">Settings</div>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
        </div>
    </div>
</div>
<div class="page has-sidebar-left height-full">
    <header class="blue accent-3 relative nav-sticky">
        <div class="container-fluid text-white">
            <div class="row p-t-b-10 ">
                <div class="col">
                    <h4>
                      <i class="icon-box"></i>
                        Профиль
                    </h4>
                </div>
            </div>
            <div class="row">
                <ul class="nav responsive-tab nav-material nav-material-white" id="v-pills-tab">
                    <li>
                        <a class="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1">
                            <i class="icon icon-home2"></i>Сегодня</a>
                    </li>
                </ul>
                <a class="btn-fab absolute fab-right-bottom btn-primary" data-toggle="control-sidebar">
                    <i class="icon icon-menu"></i>
                </a>
            </div>
        </div>
    </header>
  <div class="container-fluid relative animatedParent animateOnce">
    <div class="tab-content pb-3" id="v-pills-tabContent">
      <!--Today Tab Start-->
      <div class="tab-pane animated fadeInUpShort show active" id="v-pills-1">
        <div class="row my-3">
          <div class="col-md-3">
            <div class="counter-box white r-5 p-3">
              <div class="p-4">
                <div class="float-right">
                  <span class="icon icon-note-list text-light-blue s-48"></span>
                </div>
                <div class="counter-title">Новых веб проектов</div>
                <h5 class="sc-counter mt-3">129</h5>
              </div>
              <div class="progress progress-xs r-0">
                <div class="progress-bar" role="progressbar" style="width: 25%;"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box white r-5 p-3">
              <div class="p-4">
                <div class="float-right">
                  <span class="icon icon-mail-envelope-open s-48"></span>
                </div>
                <div class="counter-title ">Отзывов</div>
                <h5 class="sc-counter mt-3">1228</h5>
              </div>
              <div class="progress progress-xs r-0">
                <div class="progress-bar" role="progressbar" style="width: 50%;"></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box white r-5 p-3">
              <div class="p-4">
                <div class="float-right">
                  <span class="icon icon-stop-watch3 s-48"></span>
                </div>
                <div class="counter-title">Обращения в тех.поддержку</div>
                <h5 class="sc-counter mt-3">209</h5>
              </div>
              <div class="progress progress-xs r-0">
                <div class="progress-bar" role="progressbar" style="width: 75%;" ></div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counter-box white r-5 p-3">
              <div class="p-4">
                <div class="float-right">
                  <span class="icon icon-inbox-document-text s-48"></span>
                </div>
                <div class="counter-title">Новых прочих проектов</div>
                <h5 class="sc-counter mt-3">550</h5>
              </div>
              <div class="progress progress-xs r-0">
                <div class="progress-bar" role="progressbar" style="width: 25%;"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="white p-5 r-5">
              <div class="card-title">
                <h5> Задач выполненно</h5>
              </div>
              <div class="row my-3">
                <div class="col-md-3">
                  <div class="my-3 mt-4">
                    <h5>Просроченных задач <span class="red-text">+20</span></h5>
                    <span class="s-24">90</span>
                    <p>Статистика сколько всего задач и сколько задач просроченно</p>
                  </div>
                  <div class="row no-gutters bg-light r-3 p-2 mt-5">
                    <div class="col-md-6 b-r p-3">
                      <h5>В работе</h5>
                      <span>80 </span>
                    </div>
                    <div class="col-md-6 p-3">
                      <div class="">
                        <h5>В ожидании <span class="amber-text">+5</span></h5>
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-9" style="height: 350px">
                  <canvas data-chart="line" data-dataset="[
                                                            [0, 15, 4, 30, 8, 5, 18],
                                                            [1, 7, 21, 4, 12, 5, 10],
                                                
                                                            ]" data-labels="['A', 'B', 'C', 'D', 'E', 'F']"
                          data-dataset-options="[
                                                            {   label:'HTML',
                                                                fill: true,
                                                                backgroundColor: 'rgba(50,141,255,.2)',
                                                                borderColor: '#328dff',
                                                                pointBorderColor: '#328dff',
                                                                pointBackgroundColor: '#fff',
                                                                pointBorderWidth: 2,
                                                                borderWidth: 1,
                                                                borderJoinStyle: 'miter',
                                                                pointHoverBackgroundColor: '#328dff',
                                                                pointHoverBorderColor: '#328dff',
                                                                pointHoverBorderWidth: 1,
                                                                pointRadius: 3,
                                                                
                                                            },
                                                            {  
                                                                label:'Wordpress',
                                                                fill: false,
                                                                borderDash: [5, 5],
                                                                backgroundColor: 'rgba(87,115,238,.3)',
                                                                borderColor: '#2979ff',
                                                                pointBorderColor: '#2979ff',
                                                                pointBackgroundColor: '#2979ff',
                                                                pointBorderWidth: 2,
                                                
                                                                borderWidth: 1,
                                                                borderJoinStyle: 'miter',
                                                                pointHoverBackgroundColor: '#2979ff',
                                                                pointHoverBorderColor: '#fff',
                                                                pointHoverBorderWidth: 1,
                                                                pointRadius: 3,
                                                                
                                                            }
                                                            ]"
                          data-options="{
                                                                    maintainAspectRatio: false,
                                                                    legend: {
                                                                        display: true
                                                                    },
                                                        
                                                                    scales: {
                                                                        xAxes: [{
                                                                            display: true,
                                                                            gridLines: {
                                                                                zeroLineColor: '#eee',
                                                                                color: '#eee',
                                                                            
                                                                                borderDash: [5, 5],
                                                                            }
                                                                        }],
                                                                        yAxes: [{
                                                                            display: true,
                                                                            gridLines: {
                                                                                zeroLineColor: '#eee',
                                                                                color: '#eee',
                                                                                borderDash: [5, 5],
                                                                            }
                                                                        }]
                                                        
                                                                    },
                                                                    elements: {
                                                                        line: {
                                                                        
                                                                            tension: 0.4,
                                                                            borderWidth: 1
                                                                        },
                                                                        point: {
                                                                            radius: 2,
                                                                            hitRadius: 10,
                                                                            hoverRadius: 6,
                                                                            borderWidth: 4
                                                                        }
                                                                    }
                                                                }">
                  </canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-eq-height">
          <div class="col-md-4">
            <div class="card my-3 no-b r-5">
              <div class="card-header white no-b">
                <h6><span class="badge badge-danger r-3 mr-2">5</span>Тех Поддержка </h6>
              </div>
              <div class="card-body chat-widget  p-3 r-5 slimScroll" data-height="435">
                <ul class="list-unstyled">
                  <li class="by-me">
                    <div class="avatar float-left">
                      <img src="../../assets/img/dummy/u1.png" alt="" class="img-responsive">
                      <span class="avatar-badge has-indicator busy"></span>
                    </div>
                    <div class="chat-content">
                      <div class="chat-meta">Тех поддержка
                        <span class="float-right">3 часа назад</span>
                      </div>
                      Оставите отзыв по работе нашего приложения!
                    </div>
                  </li>
                  <li class="by-other">
                    <div class="avatar float-right">
                      <b class="c-off"></b>
                      <img src="../../assets/img/dummy/u4.png" alt="" class="img-responsive">
                      <span class="avatar-badge has-indicator idle"></span>
                    </div>
                    <div class="chat-content">
                      <div class="chat-meta">3 часа назад
                        <span class="float-right">Я</span>
                      </div>
                      Идеально сделали! 5 из 5!
                    </div>

                  </li>

                </ul>
              </div>
              <div class="card-footer white">
                <form>
                  <div class="input-group">
                    <input class="form-control s-12 bg-light r-30 mr-3"
                           placeholder="Type your message..." type="text">
                    <span class="input-group-btn">
                        <button type="submit" class="btn-fab btn-danger p-0 s-14">
                          <i class="icon-subdirectory_arrow_left"></i>
                        </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card no-b r-5 my-3">
              <div class="card-body">
                <h5 class="card-title">Новые пользователи <span class="badge badge-success r-3">30+</span>
                </h5>
                <p>Новых 30 пользователей с нами!</p>
                <div class="avatar-group">
                  <figure class="avatar">
                    <img src="../../assets/img/dummy/u4.png" alt=""></figure>
                  <figure class="avatar">
                    <span class="avatar-letter avatar-letter-l circle"></span>
                  </figure>
                  <figure class="avatar">
                    <img src="../../assets/img/dummy/u5.png" alt=""></figure>
                  <figure class="avatar">
                    <img src="../../assets/img/dummy/u6.png" alt=""></figure>
                  <figure class="avatar">
                    <img src="../../assets/img/dummy/u7.png" alt="">
                  </figure>
                  <figure class="avatar">
                    <span class="avatar-letter avatar-letter-a circle"></span>
                  </figure>
                  <figure class="avatar">
                    <span class="avatar-letter avatar-letter-b circle"></span>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card my-3 no-b ">
              <div class="card-header white b-0 p-3">
                <div class="card-handle">
                  <a data-toggle="collapse" href="#salesCard" aria-expanded="false"
                     aria-controls="salesCard">
                    <i class="icon-menu"></i>
                  </a>
                </div>
                <h4 class="card-title">Недельные отчеты</h4>
                <small class="card-subtitle mb-2 text-muted">Отчеты по задачам за неделю.</small>
              </div>
              <div class="collapse show" id="salesCard">
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-hover earning-box">
                      <thead class="bg-light">
                      <tr>
                        <th colspan="2">Имя сотрудника</th>
                        <th>Кол-во закрытых задач</th>
                        <th>Заработали</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td class="w-10">
                          <a href="" class="avatar avatar-lg">
                            <img src="../../assets/img/dummy/u6.png" alt="">
                          </a>
                        </td>
                        <td>
                          <h6>Екатерина Высоцкая</h6>
                          <small class="text-muted">Веб-дизайнер</small>
                        </td>
                        <td>25</td>
                        <td>25000р</td>
                      </tr>
                      <tr>
                        <td class="w-10">
                          <a href="" class="avatar avatar-lg">
                            <img src="../../assets/img/dummy/u7.png" alt="">
                          </a>
                        </td>
                        <td>
                          <h6>Дмитрий Король</h6>
                          <small class="text-muted">Frontend-разработчик</small>
                        </td>
                        <td>10</td>
                        <td>40000р</td>
                      </tr>
                      <tr>
                        <td class="w-10">
                          <a href="" class="avatar avatar-lg">
                            <img src="../../assets/img/dummy/u10.png" alt="">
                          </a>
                        </td>
                        <td>
                          <h6>Александр Колпаков</h6>
                          <small class="text-muted">Backend-разработчик</small>
                        </td>
                        <td>15</td>
                        <td>50322р</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "index"
}
</script>
