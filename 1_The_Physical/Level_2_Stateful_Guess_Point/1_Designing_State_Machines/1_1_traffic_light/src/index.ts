export class TrafficLight {
  private isOn: boolean;
  private currentColor: "GREEN" | "YELLOW" | "RED" | null;

  private constructor() {
    this.isOn = false;
    this.currentColor = null;
  }

  public static create(): TrafficLight {
    return new TrafficLight();
  }

  public isSwitchedOn() {
    return this.isOn;
  }

  public getCurrentColor() {
    return this.currentColor;
  }
}
