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

  it("when on, changes color from green to yellow'", () => {
    const trafficLight = TrafficLight.create();
    trafficLight.switchOn();

    expect(trafficLight.getCurrentColor()).toBe("GREEN");
    // Act
    trafficLight.changeColor();

    expect(trafficLight.getCurrentColor()).toBe("YELLOW");
  });
});
