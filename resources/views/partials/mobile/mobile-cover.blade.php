<div class="mobile-cover p-4 pt-12">
{{--  <div class="flex flex-col">--}}
    <div class="flex justify-between gap-24">
      <h1 class="text-black font-subText text-40 tracking-tight leading-[2rem]">
        {{ $titleFirst }} <br/>
        {{ $titleLast }}
      </h1>
      <div class="text-black">
        {{ $job }}
      </div>
    </div>
    <h2 class="mt-28 text-black font-body text-102 tracking-tighter leading-[6rem]">
      {{ $titleSecondary }}
    </h2>
    <h3 class="text-black text-9 opacity-70 mt-4">
      {{ $subText }}
    </h3>
    <h4 class="text-black mt-16 text-12">
      {{ $description }}
    </h4>
    <div class="mt-12">
      <div class="text-black">
        contact
      </div>
      <div class="flex flex-col gap-4 pl-16 mt-6">
        <div class="flex">
          <a href="mailto:{!! $urlEmail !!}" rel="noopener noreferrer" target="_blank" class="text-12 hoverable hover:underline text-text"><span>EMAIL</span></a>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg>
        </div>
        <div class="flex">
          <a href="{{ $urlLinkedin }}" rel="noopener noreferrer" target="_blank" class="text-12 hoverable hover:underline text-text">LINKEDIN</a>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg>
        </div>
        <div class="flex">
          <a href="{{ $urlGithub }}" rel="noopener noreferrer" target="_blank" class="text-12 hoverable hover:underline text-text">GITHUB</a>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg>
        </div>
        <div class="flex">
          <a href="{{ $urlInstagram }}" rel="noopener noreferrer" target="_blank" class="text-12 hoverable hover:underline text-text">INSTAGRAM</a>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg>
        </div>
      </div>
    </div>
{{--  </div>--}}
</div>
