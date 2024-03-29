<div class="projects">
    <h2 class="font-body text-38 pb-10">
      {{ $title }}
    </h2>
  <div class="px-40 flex flex-col">
    <section class="section section-left text-white bg-body">
      <a href="{{ $solwareUrl }}" class="hoverable reveal w-full projects__img js-img-parallax rg:w-[40%]">
        <img src="{{ $solwareImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $solwareTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $solwareAreas @endphp
        </div>
      </div>
    </section>

    <section class="section section-right text-white bg-body">
      <a href="{{ $controlUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
        <img src="{{ $controlImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $controlTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $controlAreas @endphp
        </div>
      </div>
    </section>

    <section class="section section-left text-white bg-body">
      <a href="{{ $patinoUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
        <img src="{{ $patinoImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col md:mt-8 rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $patinoTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $patinoAreas @endphp
        </div>
      </div>
    </section>

    <section class="section section-right section-end text-white bg-body">
      <a href="{{ $optevenUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
        <img src="{{ $optevenImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $optevenTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $optevenAreas @endphp
        </div>
      </div>
    </section>

    <section class="section section-left text-white bg-body">
      <a href="{{ $butcherUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
        <img src="{{ $butcherImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $butcherTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $butcherAreas @endphp
        </div>
      </div>
    </section>

    <section class="section section-right text-white bg-body">
      @if($iziUrl)
        <a href="{{ $iziUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
          @if($iziImg)
            <img src="{{ $iziImg['url'] }}" alt="image of project">
          @endif
        </a>
      @endif
        <div class="flex flex-col rg:mt-16">
          <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
            {{ $iziTitle }}
          </h3>
          <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
            @php echo $iziAreas @endphp
          </div>
        </div>
    </section>

    <section class="section section-left section-end text-white bg-body">
      <a href="{{ $artUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
        <img src="{{ $artImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $artTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $artAreas @endphp
        </div>
      </div>
    </section>

    <section class="section section-right text-white bg-body">
      <a href="{{ $fieldsoffateUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
        <img src="{{ $fieldsoffateImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $fieldsoffateTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $fieldsoffateAreas @endphp
        </div>
      </div>
    </section>

    <section class="section section-left section-end text-white bg-body">
      <a href="{{ $veuveambalUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
        <img src="{{ $veuveambalImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $veuveambalTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $veuveambalAreas @endphp
        </div>
      </div>
    </section>

    <section class="section section-right section-end text-white bg-body">
      <a href="{{ $torikarasanUrl }}" class="hoverable reveal w-full rg:w-[40%] projects__img js-img-parallax">
        <img src="{{ $torikarasanImg['url'] }}" alt="image of project">
      </a>
      <div class="flex flex-col rg:mt-16">
        <h3 class="content__title-projects text-black font-subText text-34" data-splitting data-effect2>
          {{ $torikarasanTitle }}
        </h3>
        <div class="content__title-projects text-black font-light mt-4" data-splitting data-effect2>
          @php echo $torikarasanAreas @endphp
        </div>
      </div>
    </section>
  </div>
</div>
