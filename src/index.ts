import Sdk from "elios-sdk";

export default class App {

  sdk: Sdk;

  constructor() {
    this.sdk = new Sdk();
  }

  start() {
    const clockWidget = this.sdk.createWidget();
    setInterval(() => {
      clockWidget.html(Date.now().toString());
    }, 1000);
  }
}

new App().start();


