<div class="presentation">
  <div class="presentation--section">
  <section class="pin h-[100vh] flex flex-col justify-evenly gap-12 bg-second p-16 w-[25%] ml-auto">
    <h3 class="text-38 font-subText text-black">
      {{ $titlePresentation }}
    </h3>
    <div class="text-12 opacity-60">
      @php echo $subTextPresentation @endphp
    </div>
    <div class="text-9">
      @php echo $textPresentation @endphp
    </div>
  </section>
  </div>
  <section class="pl-12">
    @if($imgOnePresentation)
    <div class="relative h-[30vw] w-[80vw] img-parallax overflow-hidden flex flex-col gap-8">
      <img class="w-[75%] absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgOnePresentation }}" alt="1ière image du projet">
      <div class="text-12 w-1/2">
        @php echo $textOnePresentation @endphp
      </div>
    </div>
    @endif
  <div class="flex w-[65%] gap-28 mt-56">
    @if($imgTwoPresentation)
        <div class="flex relative h-[30vw] w-[80vw] img-parallax overflow-hidden">
          <img class="absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgTwoPresentation }}" alt="2ième image du projet">
        </div>
    @endif
    <div class="text-12">
      @php echo $textOnePresentation @endphp
    </div>
  </div>
  </section>
  <section class="flex mt-40 gap-32 pl-20 flex-col relative items-center">
    @if($imgThreePresentation)
      <div class="relative h-[30vw] w-[80vw] img-parallax overflow-hidden">
        <img class="w-[63%] absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgThreePresentation }}" alt="3ième image du projet">
      </div>
    @endif
    @if($imgFourPresentation)
      <div class="relative h-[30vw] w-[80vw] img-parallax overflow-hidden">
        <img class="w-[63%] absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgFourPresentation }}" alt="4ième image du projet">
      </div>
      @endif
    @if($imgFivePresentation)
      <div class="relative h-[30vw] w-[80vw] img-parallax overflow-hidden">
        <img class="w-[63%] absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgFivePresentation }}" alt="5ième image du projet">
      </div>
      @endif
    @if($imgSixPresentation)
        <div class="relative h-[30vw] w-[80vw] w-full h-full img-parallax overflow-hidden">
          <img class="w-[63%] absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgSixPresentation }}" alt="6ième image du projet">
        </div>
      @endif
    @if($imgSevenPresentation)
        <div class="relative h-[30vw] w-[80vw] img-parallax overflow-hidden">
          <img class="w-[63%] absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgSevenPresentation }}" alt="7ième image du projet">
        </div>
      @endif
    @if($imgHeightPresentation)
        <div class="relative h-[30vw] w-[80vw] img-parallax overflow-hidden">
          <img class="w-[63%] absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgHeightPresentation }}">
        </div>
      @endif
    @if($imgNinePresentation)
        <div class="relative h-[30vw] w-[80vw] img-parallax overflow-hidden">
          <img class="w-[63%] absolute bottom-0 object-center left-0 object-cover h-[135%]" src="{{ $imgNinePresentation }}">
        </div>
      @endif
  </section>
</div>
