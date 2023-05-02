<div class="js-home-cover home-cover overflow-hidden relative">
@if(!empty($titleOneOne))
    <div class="home-cover__title h-[100vh] flex items-center justify-center">
        <div class="flex">
          <h1 class="rg:text-270 text-110 gap-16 rg:gap-4 text-center flex lg:flex-row flex-col font-body text-black js-title">
            <span class="js-split-title">{{ $titleOneOne }}</span>
            <div class="lg:flex hidden flex-col gap-8 justify-center">
              <div class="text-black home-cover__text w-[80%] text-start js-split text-14 font-subText">
                {{ $textOne }}
              </div>
              <div class="text-black home-cover__text js-split text-14 font-subText">
                {{ $textTwo }}
              </div>
              <div class="text-black home-cover__text rg:pl-[20%] rg:text-end js-split text-14 font-subText">
                {{ $textThree }}
              </div>
            </div>
            <div class="rg:text-270 js-split-title text-135 text-black font-body">
              {{ $titleOneTwo }}
            </div>
            <div class="lg:hidden text-22 rg:text-14 block">
              {{ $textOne }}
              {{ $textTwo }}
              {{ $textThree }}
            </div>
          </h1>
        </div>
    </div>
  @endif
</div>
