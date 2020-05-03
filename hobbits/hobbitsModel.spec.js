const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel.js");

describe("hobbits model", () => {
  describe("INSERT()", () => {
    it(" should insert hobbits into the dba ", async () => {
      await Hobbits.insert({ name: "gaffer" });
      await Hobbits.insert({ name: "same" });

      const addedHobbits = await db("hobbits");
      expect(addedHobbits).toHaveLength(2);
    });

    it("should add a single hobbit", async () => {
      let hobbit = await Hobbits.insert({ name: "raza" });
      expect(hobbit.name).toBe("raza");

      hobbit = await Hobbits.insert({ name: "raza2" });
      expect(hobbit.name).toBe("raza2");
    });
  }); // end of describe INSERT()
}); // end of describe hobbits

beforeEach(async () => {
  await db("hobbits").truncate();
});
