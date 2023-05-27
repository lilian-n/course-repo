import { TrafficLight } from "./index";

describe("traffic light", () => {
  it("initially is off, with no colors shown", () => {
    const trafficLight = TrafficLight.create();

    expect(trafficLight.isSwitchedOn()).toBeFalsy();
    expect(trafficLight.getCurrentColor()).toBeNull();
  });

  it("can be turned on, with the color automatically green", () => {
    // Arrange
    const trafficLight = TrafficLight.create();

    // Act
    trafficLight.switchOn();

    // Assert
    expect(trafficLight.isSwitchedOn()).toBeTruthy();
    expect(trafficLight.getCurrentColor()).toBe("GREEN");
  });
});
