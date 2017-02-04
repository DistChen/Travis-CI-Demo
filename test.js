var add = require("./add");
var expect = require("chai").expect;
describe("加法函数的测试",function(){
    it("2 加 3 应该等于 5",function(){
        expect(add(2,3)).to.be.equal(5);
    })
});