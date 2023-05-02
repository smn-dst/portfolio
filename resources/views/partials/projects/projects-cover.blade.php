<div class="js-projects-cover projects-cover overflow-hidden relative">
  <div class="mt-8 fixed w-[97%] m-auto z-10 text-center hoverable">
    <a class="underline projects__button font-subText cursor-none" href="{{ home_url() }}">RETOUR</a>
  </div>
  @if(!empty($titleOne))
    <div class="projects-cover__title flex items-center flex-col h-[100vh]">
      <div class="flex items-center mt-48 justify-center">
        <div class="flex projects-cover__container">
          <img class="projects-cover__img" src="{{ get_the_post_thumbnail_url() }}" alt="image of project">
          <h1 class="rg:text-270 relative projects-cover__title text-135 gap-28 text-center flex rg:flex-row flex-col font-body text-black js-project-title">
            <span class="js-project-split-title">{{ $titleOne }}</span>
            <span class="js-project-split-title">{{ $titleTwo }}</span>
            <span class="js-project-split-title">{{ $titleThree }}</span>
          </h1>
        </div>
      </div>
      <div class="font-subText js-split-text pl-8 w-[60%] mt-4 text-black mt-12">
        {{ $subText }}
      </div>
    </div>
  @endif
</div>
