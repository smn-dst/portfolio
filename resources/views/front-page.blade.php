@extends('layouts.app')

@section('view-name', 'home')

@section('content')
  @while (have_posts())
    @php the_post() @endphp
    <div class="lg:hidden block">
      @includeIf('partials.mobile.mobile-cover')
    </div>
    <div class="lg:block hidden">
    @includeIf('partials.home.home-cover')
    @includeIf('blocks.projects')
    @includeIf('blocks.contact')
    @includeIf('blocks.cv')
    </div>
  @endwhile
@endsection
