import { TrafficLight } from "./index";

describe("traffic light", () => {
  it("initially is off, with no colors shown", () => {
    const trafficLight = new TrafficLight();

    expect(trafficLight.isSwitchedOn()).toBeFalsy();
    expect(trafficLight.getCurrentColor()).toBeNull();
  });
});
