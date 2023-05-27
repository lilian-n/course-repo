type LightColors = "GREEN" | "YELLOW" | "RED" | null;
export class TrafficLight {
  private isOn: boolean;
  private currentColor: LightColors;

  private constructor() {
    this.isOn = false;
    this.currentColor = null;
  }

  public static create(): TrafficLight {
    return new TrafficLight();
  }

  public isSwitchedOn(): boolean {
    return this.isOn;
  }

  public getCurrentColor(): LightColors {
    return this.currentColor;
  }

  public switchOn(): void {
    this.isOn = true;
    this.currentColor = "GREEN";
  }

  public changeColor(): void {
    this.currentColor = "YELLOW";
  }
}
