export class Button {
  elLink = null;

  constructor(id) {
    this.elLink = document.getElementById(id);
    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.attachLink = this.attachLink.bind(this);
  }

  onClick(clickCallback) {
    this.elLink.addEventListener("click", clickCallback);
  }

  onMouseOver(mouseOverCallback) {
    this.elLink.addEventListener("mouseover", mouseOverCallback);
  }

  onMouseOut(mouseOutCallback) {
    this.elLink.addEventListener("mouseout", mouseOutCallback);
  }

  attachLink(linkString) {
    this.onClick(function () {
      location = linkString;
    });
  }
}
