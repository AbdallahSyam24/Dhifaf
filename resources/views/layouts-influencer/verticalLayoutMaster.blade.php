<body
  class="{{$configData['mainLayoutTypeClass']}} @if(!empty($configData['bodyCustomClass']) && isset($configData['bodyCustomClass'])) {{$configData['bodyCustomClass']}} @endif @if($configData['isMenuCollapsed'] && isset($configData['isMenuCollapsed'])){{'menu-collapse'}} @endif"
  data-open="click" data-menu="vertical-modern-menu" data-col="2-columns">

  <!-- BEGIN: Header-->
  <header class="page-topbar" id="header">
    @include('panels-influencer.navbar')
  </header>
  <!-- END: Header-->

  <!-- BEGIN: SideNav-->
  @include('panels-influencer.sidebar')
  <!-- END: SideNav-->

  <!-- BEGIN: Page Main-->
  <div id="main">
    <div class="row">
      @if ($configData["navbarLarge"] === true)
        @if(($configData["mainLayoutType"]) === 'vertical-modern-menu')
        {{-- navabar large  --}}
        <div
          class="content-wrapper-before @if(!empty($configData['navbarBgColor'])) {{$configData['navbarBgColor']}} @else {{$configData["navbarLargeColor"]}} @endif">
        </div>
        @else
        {{-- navabar large  --}}
        <div class="content-wrapper-before {{$configData["navbarLargeColor"]}}">
        </div>
        @endif
      @endif
      @if($configData["pageHeader"] === true && isset($breadcrumbs))
      {{--  breadcrumb --}}
      @include('panels-influencer.breadcrumb')
      @endif
      <div class="col s12">
        <div class="container">
             @include('panels-influencer.message')
          {{-- main page content --}}
          @yield('content')
          {{-- right sidebar --}}
          @include('pages.sidebar.right-sidebar')
          @if($configData["isFabButton"] === true)
            @include('pages.sidebar.fab-menu')
          @endif
        </div>
        {{-- overlay --}}
        <div class="content-overlay"></div>
      </div>
    </div>
  </div>
  <!-- END: Page Main-->


  @if($configData['isCustomizer'] === true)
  <!-- Theme Customizer -->
  @include('pages.partials.customizer')
  <!--/ Theme Customizer -->
  {{-- buy now button --}}
  @include('pages.partials.buy-now')
  @endif


  {{-- footer  --}}
  @include('panels-influencer.footer')
  {{-- vendor and page scripts --}}
  @include('panels-influencer.scripts')
</body>
