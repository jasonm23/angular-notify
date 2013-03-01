describe('Notify App', function() {
 
    beforeEach(function() {
      browser().navigateTo('../../example/example.html');
      input("duration").enter("10");
    });

    describe("Basic functions", function(){
      it('should have an empty notification', function() {
        expect(element(".notify").html()).toBe("");
      });

      it('should show a nofication', function(){
        element(".btn-primary").click();
        expect(element(".notify").html()).not().toBe("");
      });

      it('should change class', function(){
        select("extra_class").option(1);
        element(".btn-primary").click();
        expect(element(".notify").attr('class')).toBe("notify alert alert-danger");
      });
    });
});