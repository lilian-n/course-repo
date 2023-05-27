export class TrafficLight {
  private isOn: boolean;
  private currentColor: "GREEN" | "YELLOW" | "RED" | null;

  constructor() {
    this.isOn = false;
    this.currentColor = null;
  }

  public isSwitchedOn() {
    return this.isOn;
  }

  public getCurrentColor() {
    return this.currentColor;
  }
}
