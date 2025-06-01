<template>


<aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas'>
    <section class="sidebar">
        <div class="w-80px mt-3 mb-3 ml-3">
            <img src="../../assets/img/basic/logo.png" alt="">
        </div>
        <div class="relative">
            <a data-toggle="collapse" href="#userSettingsCollapse" role="button" aria-expanded="false"
               aria-controls="userSettingsCollapse" class="btn-fab btn-fab-sm absolute fab-right-bottom fab-top btn-primary shadow1 ">
                <i class="icon icon-cogs"></i>
            </a>
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
                <ul class="treeview-menu">
                    <li><a href="index.html"><i class="icon icon-folder5"></i>Panel Dashboard 1</a>
                    </li>
                    <li><a href="panel-page-dashboard1-rtl.html"><i class="icon icon-folder5"></i>Panel Dashboard 1 - RTL</a>
                    </li>
                    <li><a href="panel-page-dashboard2.html"><i class="icon icon-folder5"></i>Panel Dashboard 2</a>
                    </li>
                    <li><a href="panel-page-dashboard3.html"><i class="icon icon-folder5"></i>Panel Dashboard 3</a>
                    </li>
                    <li><a href="panel-page-dashboard4.html"><i class="icon icon-folder5"></i>Panel Dashboard 4</a>
                    </li>
                    <li><a href="panel-page-dashboard5.html"><i class="icon icon-folder5"></i>Panel Dashboard 5</a>
                    </li>
                    <li><a href="panel-page-dashboard6.html"><i class="icon icon-folder5"></i>Panel Dashboard 6</a>
                    </li>
                    <li><a href="panel-page-dashboard7.html"><i class="icon icon-folder5"></i>Panel Dashboard 7</a></li>
                    <li><a href="panel-page-dashboard9.html"><i class="icon icon-folder5"></i>Panel Dashboard 9</a></li>
                    <li><a href="panel-page-dashboard10.html"><i class="icon icon-folder5"></i>Panel Dashboard 10</a></li>
                    <li><a href="panel-page-dashboard11.html"><i class="icon icon-folder5"></i>Panel Dashboard 11</a></li>
                </ul>
            </li>
            <li class="treeview"><a href="#">
                <i class="icon icon icon-package blue-text s-18"></i>
                <span>Проекты</span>
                <span class="badge r-3 badge-primary pull-right">4</span>
            </a>
                <ul class="treeview-menu">
                    <li><a href="panel-page-products.html"><i class="icon icon-circle-o"></i>All Products</a>
                    </li>
                    <li><a href="panel-page-products-create.html"><i class="icon icon-add"></i>Add
                        New </a>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a href="#"><i class="icon icon-account_box light-green-text s-18"></i>Статистика<i
                    class="icon icon-angle-left s-18 pull-right"></i></a>
                <ul class="treeview-menu">
                    <li><a href="panel-page-users.html"><i class="icon icon-circle-o"></i>All Users</a>
                    </li>
                    <li><a href="panel-page-users-create.html"><i class="icon icon-add"></i>Add User</a>
                    </li>
                    <li><a href="panel-page-profile.html"><i class="icon icon-user"></i>User Profile </a>
                    </li>
                </ul>
            </li>
            <li class="treeview no-b"><a href="#">
                <i class="icon icon-package light-green-text s-18"></i>
                <span>Почта</span>
                <span class="badge r-3 badge-success pull-right">20</span>
            </a>
                <ul class="treeview-menu">
                    <li><a href="panel-page-inbox.html"><i class="icon icon-circle-o"></i>All Messages</a>
                    </li>
                    <li><a href="panel7-inbox.html"><i class="icon icon-circle-o"></i>Panel7 - Inbox</a>
                    </li>
                    <li><a href="panel8-inbox.html"><i class="icon icon-circle-o"></i>Panel8 - Inbox</a>
                    </li>
                    <li><a href="panel-page-inbox-create.html"><i class="icon icon-add"></i>Compose</a>
                    </li>
                </ul>
            </li>

        </ul>
    </section>
</aside>
<!--Sidebar End-->
<div class="has-sidebar-left">
    <div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark pt-2 pb-2 pl-4 pr-2">
            <div class="search-bar">
                <input class="transparent s-24 text-white b-0 font-weight-lighter w-128 height-50" type="text"
                       placeholder="start typing...">
            </div>
            <a href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-expanded="false"
               aria-label="Toggle navigation" class="paper-nav-toggle paper-nav-white active "><i></i></a>
        </div>
    </div>
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
                        <!-- end message -->
                        <!-- start message -->
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
                        <!-- end message -->
                        <!-- start message -->
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
                        <!-- end message -->
                        <!-- start message -->
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
                        <!-- end message -->
                    </ul>
                </li>
                <li class="footer s-12 p-2 text-center"><a href="#">See All Messages</a></li>
            </ul>
        </li>
        <!-- Notifications -->
        <li class="dropdown custom-dropdown notifications-menu">
            <a href="#" class=" nav-link" data-toggle="dropdown" aria-expanded="false">
                <i class="icon-notifications "></i>
                <span class="badge badge-danger badge-mini rounded-circle">4</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
                <li class="header">У тебя 3 новых уведомления</li>
                <li>
                    <!-- inner menu: contains the actual data -->
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
        <!-- Right Sidebar Toggle Button -->
        <li>
            <a class="nav-link ml-2" data-toggle="control-sidebar">
                <i class="icon-tasks "></i>
            </a>
        </li>
        <!-- User Account-->
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
                        <img class="icon-box" src="../../assets/img/icon/icon1.png" width="20px" height="20px" ></img>
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
                    <li>
                        <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2"><i class="icon icon-plus-circle mb-3"></i>Вчера</a>
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
                                <h5 class="sc-counter mt-3">25</h5>
                            </div>
                            <div class="progress progress-xs r-0">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                                     aria-valuemin="0" aria-valuemax="128"></div>
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
                                <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25"
                                     aria-valuemin="0" aria-valuemax="128"></div>
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
                                <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="25"
                                     aria-valuemin="0" aria-valuemax="128"></div>
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
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                                     aria-valuemin="0" aria-valuemax="128"></div>
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
                    <!-- Chat Widget Start -->
                    <div class="col-md-4">
                        <div class="card my-3 no-b r-5">
                            <div class="card-header white no-b">
                                <h6><span class="badge badge-danger r-3 mr-2">5</span>New Chats </h6>
                            </div>
                            <div class="card-body chat-widget  p-3 r-5 slimScroll" data-height="435">
                                <ul class="list-unstyled">
                                    <li class="by-me">
                                        <div class="avatar float-left">
                                            <img src="../../assets/img/dummy/u1.png" alt="" class="img-responsive">
                                            <span class="avatar-badge has-indicator busy"></span>
                                        </div>
                                        <div class="chat-content">
                                            <!-- In meta area, first include "name" and then "time" -->
                                            <div class="chat-meta">Sent
                                                <span class="float-right">3 hours ago</span>
                                            </div>
                                            Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                                        </div>
                                    </li>
                                    <!-- Chat by other. Use the class "by-other". -->
                                    <li class="by-other">
                                        <!-- Use the class "float-right" in avatar -->
                                        <div class="avatar float-right">
                                            <!-- Online or offline -->
                                            <b class="c-off"></b>
                                            <img src="../../assets/img/dummy/u4.png" alt="" class="img-responsive">
                                            <span class="avatar-badge has-indicator idle"></span>
                                        </div>
                                        <div class="chat-content">
                                            <!-- In the chat meta, first include "time" then "name" -->
                                            <div class="chat-meta">3 hours ago
                                                <span class="float-right">Received</span>
                                            </div>
                                            Vivamus diam elit diam, consectetur elit.
                                        </div>
                                    </li>
                                    <li class="by-me">
                                        <div class="avatar float-left">
                                            <b class="c-on"></b>
                                            <img src="../../assets/img/dummy/u5.png" alt="" class="img-responsive">
                                            <span class="avatar-badge has-indicator online"></span>
                                        </div>
                                        <div class="chat-content">
                                            <div class="chat-meta">Seen
                                                <span class="float-right">4 hours ago</span>
                                            </div>
                                            Lorem dolor sit sit amet dolo.
                                        </div>
                                    </li>
                                    <li class="by-other">
                                        <!-- Use the class "float-right" in avatar -->
                                        <div class="avatar float-right">
                                            <b class="c-off"></b>
                                            <img src="../../assets/img/dummy/u4.png" alt="" class="img-responsive">
                                            <span class="avatar-badge has-indicator online"></span>
                                        </div>
                                        <div class="chat-content">
                                            <!-- In the chat meta, first include "time" then "name" -->
                                            <div class="chat-meta">3 hours ago
                                                <span class="float-right">Undelivered</span>
                                            </div>
                                            Vivamus diam elit diam, consectetur.
                                        </div>
                                    </li>
                                    <li class="by-me">
                                        <div class="avatar float-left">
                                            <b class="c-on"></b>
                                            <img src="../../assets/img/dummy/u3.png" alt="" class="img-responsive">
                                            <span class="avatar-badge has-indicator bust"></span>
                                        </div>
                                        <div class="chat-content">
                                            <div class="chat-meta">Audio
                                                <span class="float-right">4 hours ago</span>
                                            </div>
                                            Vivamus diam eget, Vivamus consectetur.
                                        </div>
                                    </li>
                                    <li class="by-other">
                                        <!-- Use the class "float-right" in avatar -->
                                        <div class="avatar float-right">
                                            <b class="c-off"></b>
                                            <img src="../../assets/img/dummy/u2.png" alt="" class="img-responsive">
                                            <span class="avatar-badge has-indicator online"></span>
                                        </div>
                                        <div class="chat-content">
                                            <!-- In the chat meta, first include "time" then "name" -->
                                            <div class="chat-meta">3 hours ago
                                                <span class="float-right">Image</span>
                                            </div>
                                            Duis dolor sit eut purus dolor feugius diam elit diamt.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer white">
                                <!-- Chat button -->
                                <form>
                                    <div class="input-group">
                                        <input class="form-control s-12 bg-light r-30 mr-3"
                                               placeholder="Type your message..." type="text">
                                        <span class="input-group-btn">
                                                        <button type="submit" class="btn-fab btn-danger p-0 s-14"><i
                                                                class="icon-subdirectory_arrow_left"></i></button>
                                                    </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- Followers -->
                    <div class="col-md-3">
                        <div class="card no-b r-5 my-3">
                            <div class="card-body">
                                <h5 class="card-title">New Followers <span class="badge badge-success r-3">30+</span>
                                </h5>
                                <p>There are 30 new followers</p>
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
                        <div class="card no-b r-5 my-3">
                            <div class="bg-primary text-white lighten-2 r-5">
                                <div class="pt-5 pb-0 pl-4 pr-4">
                                    <div class="lightSlider masonry-container" data-item="1" data-item-md="1"
                                         data-item-sm="1" data-auto="true" data-pause="6000" data-pager="false" data-controls="false" data-loop="true">
                                        <div>
                                            <h5 class="font-weight-normal s-14">Followers Increased</h5>
                                            <div class="my-5">
                                                  <span>
                                               Today 30%</span>
                                                <div class="progress" style="height: 3px;">
                                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="my-5">
                                                  <span>
                                               Yesterday 10%</span>
                                                <div class="progress" style="height: 3px;">
                                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <canvas width="378" height="140" data-chart="spark" data-chart-type="bar"
                                                data-dataset="[[28,530,200,430,28,530,200,430,28,530,200,430,28,530,200,430,28,530,200,430]]"
                                                data-labels="['a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d']"
                                                data-dataset-options="[
                                                        { borderColor:  'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235,1)'},
                                                        ]">
                                        </canvas>
                                        </div>
                                        <div>
                                            <h5 class="font-weight-normal s-14">Followers Increased</h5>
                                            <div class="my-5">
                                                  <span>
                                               Today 30%</span>
                                                <div class="progress" style="height: 3px;">
                                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="my-5">
                                                  <span>
                                               Yesterday 10%</span>
                                                <div class="progress" style="height: 3px;">
                                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <canvas width="378" height="140" data-chart="spark" data-chart-type="line"
                                                    data-dataset="[[28,530,200,430,28,530,200,430,28,530,200,430,28,530,200,430,28,530,200,430]]"
                                                    data-labels="['a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d']"
                                                    data-dataset-options="[
                                                        { borderColor:  'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235,1)'},
                                                        ]">
                                            </canvas>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- Daily Sale Report-->
                    <div class="col-md-5">
                        <div class="card my-3 no-b ">
                            <div class="card-header white b-0 p-3">
                                <div class="card-handle">
                                    <a data-toggle="collapse" href="#salesCard" aria-expanded="false"
                                       aria-controls="salesCard">
                                        <i class="icon-menu"></i>
                                    </a>
                                </div>
                                <h4 class="card-title">Daily Sale Report</h4>
                                <small class="card-subtitle mb-2 text-muted">Items purchase by users.</small>
                            </div>
                            <div class="collapse show" id="salesCard">
                                <div class="card-body p-0">
                                    <div class="table-responsive">
                                        <table class="table table-hover earning-box">
                                            <thead class="bg-light">
                                            <tr>
                                                <th colspan="2">Client Name</th>
                                                <th>Item Purchased</th>
                                                <th>Price</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td class="w-10">
                                                    <a href="panel-page-profile.html" class="avatar avatar-lg">
                                                        <img src="../../assets/img/dummy/u6.png" alt="">
                                                    </a>
                                                </td>
                                                <td>
                                                    <h6>Sara Kamzoon</h6>
                                                    <small class="text-muted">Marketing Manager</small>
                                                </td>
                                                <td>25</td>
                                                <td>$250</td>
                                            </tr>
                                            <tr>
                                                <td class="w-10">
                                                    <a href="panel-page-profile.html" class="avatar avatar-lg">
                                                        <img src="../../assets/img/dummy/u7.png" alt="">
                                                    </a>
                                                </td>
                                                <td>
                                                    <h6>Sara Kamzoon</h6>
                                                    <small class="text-muted">Marketing Manager</small>
                                                </td>
                                                <td>25</td>
                                                <td>$250</td>
                                            </tr>
                                            <tr>
                                                <td class="w-10">
                                                    <a href="panel-page-profile.html" class="avatar avatar-lg">
                                                        <img src="../../assets/img/dummy/u9.png" alt="">
                                                    </a>
                                                </td>
                                                <td>
                                                    <h6>Sara Kamzoon</h6>
                                                    <small class="text-muted">Marketing Manager</small>
                                                </td>
                                                <td>25</td>
                                                <td>$250</td>
                                            </tr>
                                            <tr>
                                                <td class="w-10">
                                                    <a href="panel-page-profile.html" class="avatar avatar-lg">
                                                        <img src="../../assets/img/dummy/u11.png" alt="">
                                                    </a>
                                                </td>
                                                <td>
                                                    <h6>Sara Kamzoon</h6>
                                                    <small class="text-muted">Marketing Manager</small>
                                                </td>
                                                <td>25</td>
                                                <td>$250</td>
                                            </tr>
                                            <tr>
                                                <td class="w-10">
                                                    <a href="panel-page-profile.html" class="avatar avatar-lg">
                                                        <img src="../../assets/img/dummy/u12.png" alt="">
                                                    </a>
                                                </td>
                                                <td>
                                                    <h6>Sara Kamzoon</h6>
                                                    <small class="text-muted">Marketing Manager</small>
                                                </td>
                                                <td>25</td>
                                                <td>$250</td>
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
            <!--Today Tab End-->
            <!--Yesterday Tab Start-->
            <div class="tab-pane animated fadeInUpShort" id="v-pills-2">
                <div class="row my-3">
                    <div class="col-md-3">
                        <div class="counter-box white r-5 p-3">
                            <div class="p-4">
                                <div class="float-right">
                                    <span class="icon icon-note-list text-light-blue s-48"></span>
                                </div>
                                <div class="counter-title">Web Projects</div>
                                <h5 class="sc-counter mt-3">3000</h5>
                            </div>
                            <div class="progress progress-xs r-0">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 25%;"
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="128"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter-box white r-5 p-3">
                            <div class="p-4">
                                <div class="float-right">
                                    <span class="icon icon-mail-envelope-open s-48"></span>
                                </div>
                                <div class="counter-title ">Premium Themes</div>
                                <h5 class="sc-counter mt-3">1000</h5>
                            </div>
                            <div class="progress progress-xs r-0">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;"
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="128"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter-box white r-5 p-3">
                            <div class="p-4">
                                <div class="float-right">
                                    <span class="icon icon-stop-watch3 s-48"></span>
                                </div>
                                <div class="counter-title">Support Requests</div>
                                <h5 class="sc-counter mt-3">600</h5>
                            </div>
                            <div class="progress progress-xs r-0">
                                <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="25"
                                     aria-valuemin="0" aria-valuemax="128"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter-box white r-5 p-3">
                            <div class="p-4">
                                <div class="float-right">
                                    <span class="icon icon-inbox-document-text s-48"></span>
                                </div>
                                <div class="counter-title">Support Requests</div>
                                <h5 class="sc-counter mt-3">525</h5>
                            </div>
                            <div class="progress progress-xs r-0">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 25%;"
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="128"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-md-12">
                        <div class="white p-5 r-5">
                            <div style="height: 528px">
                                <canvas
                                        data-chart="line"
                                        data-dataset="[
                                                [0,528,228,728,528,1628,0],
                                                [0,628,228,1228,428,1828,0],
                                                ]"
                                        data-labels="['Blue','Yellow','Green','Purple','Orange','Red','Indigo']"
                                        data-dataset-options="[
                                            { label:'Sales', borderColor:  'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235,1)'},
                                            { label:'Orders', borderColor:  'rgba(255,99,132,1)', backgroundColor: 'rgba(255, 99, 132, 1)' }]"
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
            <!--Yesterday Tab Start-->
            <!--Yesterday Tab Start-->
            <div class="tab-pane animated fadeInUpShort" id="v-pills-3">
                <div class="row">
                    <div class="col-md-4 mx-md-auto m-5">
                        <div class="card no-b shadow">
                            <div class="card-body p-4">
                                <div>
                                    <i class="icon-calendar-check-o s-48 text-primary"></i>
                                    <p class="p-t-b-20">Hey Soldier welcome back signin now there is lot of new stuff
                                        waiting
                                        for you</p>
                                </div>
                                <form action="dashboard2.html">
                                    <div class="form-group has-icon"><i class="icon-calendar"></i>
                                        <input class="form-control form-control-lg datePicker" placeholder="Date From"
                                               type="text">
                                    </div>
                                    <div class="form-group has-icon"><i class="icon-calendar"></i>
                                        <input class="form-control form-control-lg datePicker" placeholder="Date TO"
                                               type="text">
                                    </div>
                                    <input class="btn btn-success btn-lg btn-block" value="Get Data" type="submit">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Yesterday Tab Start-->
        </div>
    </div>
</div>
<!-- Right Sidebar -->
<aside class="control-sidebar fixed white ">
    <div class="slimScroll">
        <div class="sidebar-header">
            <h4>Activity List</h4>
            <a href="#" data-toggle="control-sidebar" class="paper-nav-toggle  active"><i></i></a>
        </div>
        <div class="p-3">
            <div>
                <div class="my-3">
                    <small>25% Complete</small>
                    <div class="progress" style="height: 3px;">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="my-3">
                    <small>45% Complete</small>
                    <div class="progress" style="height: 3px;">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 45%;" aria-valuenow="45"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="my-3">
                    <small>60% Complete</small>
                    `
                    <div class="progress" style="height: 3px;">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 60%;" aria-valuenow="60"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="my-3">
                    <small>75% Complete</small>
                    <div class="progress" style="height: 3px;">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 75%;" aria-valuenow="75"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="my-3">
                    <small>100% Complete</small>
                    <div class="progress" style="height: 3px;">
                        <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-3 bg-primary text-white">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="font-weight-normal s-14">Sodium</h5>
                    <span class="font-weight-lighter text-primary">Spark Bar</span>
                    <div> Oxygen
                        <span class="text-primary">
                                                    <i class="icon icon-arrow_downward"></i> 67%</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <canvas width="100" height="70" data-chart="spark" data-chart-type="bar"
                            data-dataset="[[28,68,41,43,96,45,100,28,68,41,43,96,45,100,28,68,41,43,96,45,100,28,68,41,43,96,45,100]]"
                            data-labels="['a','b','c','d','e','f','g','h','i','j','k','l','m','n','a','b','c','d','e','f','g','h','i','j','k','l','m','n']">
                    </canvas>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table id="recent-orders" class="table table-hover mb-0 ps-container ps-theme-default">
                <tbody>
                <tr>
                    <td>
                        <a href="#">INV-281281</a>
                    </td>
                    <td>
                        <span class="badge badge-success">Paid</span>
                    </td>
                    <td>$ 1228.28</td>
                </tr>
                <tr>
                    <td>
                        <a href="#">INV-01112</a>
                    </td>
                    <td>
                        <span class="badge badge-warning">Overdue</span>
                    </td>
                    <td>$ 5685.28</td>
                </tr>
                <tr>
                    <td>
                        <a href="#">INV-281012</a>
                    </td>
                    <td>
                        <span class="badge badge-success">Paid</span>
                    </td>
                    <td>$ 152.28</td>
                </tr>
                <tr>
                    <td>
                        <a href="#">INV-01112</a>
                    </td>
                    <td>
                        <span class="badge badge-warning">Overdue</span>
                    </td>
                    <td>$ 5685.28</td>
                </tr>
                <tr>
                    <td>
                        <a href="#">INV-281012</a>
                    </td>
                    <td>
                        <span class="badge badge-success">Paid</span>
                    </td>
                    <td>$ 152.28</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="sidebar-header">
            <h4>Activity</h4>
            <a href="#" data-toggle="control-sidebar" class="paper-nav-toggle  active"><i></i></a>
        </div>
        <div class="p-4">
            <div class="activity-item activity-primary">
                <div class="activity-content">
                    <small class="text-muted">
                        <i class="icon icon-user position-left"></i> 5 mins ago
                    </small>
                    <p>Lorem ipsum dolor sit amet conse ctetur which ascing elit users.</p>
                </div>
            </div>
            <div class="activity-item activity-danger">
                <div class="activity-content">
                    <small class="text-muted">
                        <i class="icon icon-user position-left"></i> 8 mins ago
                    </small>
                    <p>Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.</p>
                </div>
            </div>
            <div class="activity-item activity-success">
                <div class="activity-content">
                    <small class="text-muted">
                        <i class="icon icon-user position-left"></i> 10 mins ago
                    </small>
                    <p>Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.</p>
                </div>
            </div>
            <div class="activity-item activity-warning">
                <div class="activity-content">
                    <small class="text-muted">
                        <i class="icon icon-user position-left"></i> 12 mins ago
                    </small>
                    <p>Lorem ipsum dolor sit amet consec tetur adip ascing elit users.</p>
                </div>
            </div>
        </div>
    </div>
</aside>
</template>

<script>
export default {
  name: "index"
}
</script>
