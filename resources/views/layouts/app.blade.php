<!doctype html>
<body class="preload">
@includeIf('components.custom-cursor')

  <main data-router-wrapper class="main">
    <div class="@yield('view-class', 'default')" data-router-view="@yield('view-name', 'page')">
      @yield('content')
    </div>
  </main>
</body>

</html>
