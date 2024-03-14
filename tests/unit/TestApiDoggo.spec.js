const { shallowMount } = require("@vue/test-utils");
const apiDoggo = require("../../src/components/APIDoggo.vue");

jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());
const fetchMock = require("node-fetch");

describe("apiDoggo.vue", () => {
  let wrapper;

  beforeEach(() => {
    fetchMock.get("*", { message: "test" });
    wrapper = shallowMount(apiDoggo);
  });

  afterEach(() => {
    fetchMock.reset();
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("fetches dog image on button click", async () => {
    const button = wrapper.find(".generateDog");
    await button.trigger("click");
  });
});
