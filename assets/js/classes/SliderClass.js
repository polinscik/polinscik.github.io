export class SliderBody {
  elWidth = null;
  elCount = 0;

  constructor(bodyClass, lineClass, slidesClass) {
    this.body = document.querySelector(`.${bodyClass}`);
    this.sliderLine = document.querySelector(`.${lineClass}`);
    this.slideArray = document.querySelectorAll(`.${slidesClass}`);
    this.init = this.init.bind(this);
    this.moveSliderForward = this.moveSliderForward.bind(this);
    this.moveSliderBackward = this.moveSliderBackward.bind(this);
    this.roll = this.roll.bind(this);
  }

  init() {
    this.elWidth = this.body.offsetWidth;
    this.sliderLine.style.width = this.elWidth * this.slideArray.length + "px";
    this.slideArray.forEach((el) => {
      el.style.width = this.elWidth + "px";
      el.style.height = "auto";
    });
    this.roll();
  }
  moveSliderForward() {
    this.elCount++;
    if (this.elCount >= this.slideArray.length) {
      this.elCount = 0;
    }
    this.roll();
  }
  moveSliderBackward() {
    this.elCount--;
    if (this.elCount < 0) {
      this.elCount = this.slideArray.length - 1;
    }
    this.roll();
  }
  roll() {
    this.sliderLine.style.transform =
      "translate(-" + this.elCount * this.elWidth + "px)";
  }
}
