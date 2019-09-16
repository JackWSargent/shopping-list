const request = require("request");
const server = require("../../src/app");
const base = "http://localhost:3000/";
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const List = require("../../src/db/models").List;
const Item = require("../../src/db/models").Item;
describe("routes : static", () => {

  beforeEach((done) => {
    this.user;
    this.list;
    this.item;
    sequelize.sync({force: true}).then((res) => {
      User.create({
        email: "test@gmail.com",
        password: "123456"
      })
      .then((user) => {
        this.user = user;
        List.create({
          name: 'List1',
          UserId: this.user.id
        })
        .then((list) => {
          this.list = list;
          Item.create({
            name: 'Item1',
            userId: this.user.id,
            listId: this.list.id
          })
          .then((item) => {
            this.item = item;
            done();
          })
          .catch((err) => {
            console.log("Cannot create item    " + err);
            done();
          })
        })
        .catch((err) => {
          console.log("Cannot create list   " + err);
          done();
        })
      })
      .catch((err) => {
        console.log("Cannot create user   " + err);
        done();
      })
    })
  })

  describe("GET /", () => {
    it("should return status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Shopping List")
        done();
      });
    });
  });

  describe("POST list", () => {
    it("should post a list using the user", (done) => {
      const options = {
        url: `${base}lists/create`,
        form: {
          name: "GroceryList1",
          UserId: this.user.id,
        }
      };
      request.post(options, (err, res, body) => {
        List.findOne({where: {UserId: this.user.id}})
        .then((list) => {
          expect(list.id).toBe(1);
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
      })
    })
  })
  describe("GET item", () => {
    it("should return a valid item object", (done) => {
      Item.findOne({ where: {userId: this.user.id}})
      .then((item) => {
        expect(item.name).toBe('Item1');
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })
});