const Loading = () => {
  return (
    <div>
      <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
          <div class="animation-preloader">
            <div class="spinner"></div>
            <div class="txt-loading">

              <span data-text-preloader=" W " class="letters-loading"> W </span>
              <span data-text-preloader=" e " class="letters-loading"> e </span>
              <span data-text-preloader=" F " class="letters-loading"> F </span>
              <span data-text-preloader=" i " class="letters-loading"> i </span>
              <span data-text-preloader=" x " class="letters-loading"> x </span>
              <span data-text-preloader=" a " class="letters-loading"> a </span>
              <span data-text-preloader=" r " class="letters-loading"> r </span>
           
            </div>
          </div>
          <div class="loader">
            <div class="row">
              <div class="col-3 loader-section section-left">
                <div class="bg"></div>
              </div>
              <div class="col-3 loader-section section-left">
                <div class="bg"></div>
              </div>
              <div class="col-3 loader-section section-right">
                <div class="bg"></div>
              </div>
              <div class="col-3 loader-section section-right">
                <div class="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Loading;
