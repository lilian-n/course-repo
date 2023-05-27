import { TrafficLight } from "./index";

describe("traffic light", () => {
  const trafficLight = TrafficLight.create();

  it("initially is off, with no colors shown", () => {
    expect(trafficLight.isSwitchedOn()).toBeFalsy();
    expect(trafficLight.getCurrentColor()).toBeNull();
  });

  it("can be turned on, with the color automatically green", () => {
    trafficLight.switchOn();

    expect(trafficLight.isSwitchedOn()).toBeTruthy();
    expect(trafficLight.getCurrentColor()).toBe("GREEN");
  });

  it("when on and color is green, changes color to yellow'", () => {
    expect(trafficLight.getCurrentColor()).toBe("GREEN");

    trafficLight.changeColor();

    expect(trafficLight.getCurrentColor()).toBe("YELLOW");
  });
});
