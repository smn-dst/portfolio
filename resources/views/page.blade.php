@extends('layouts.app')

@section('view-name', 'projects')

@section('content')
  @while (have_posts())
    @php the_post() @endphp
    @includeIf('partials.projects.projects-cover')
    @includeIf('blocks.presentation')
  @endwhile
@endsection
