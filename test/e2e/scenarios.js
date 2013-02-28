describe('Notify App', function() {
 
    beforeEach(function() {
      browser().navigateTo('../../example/example.html');
    });

    it('should have an empty notification', function() {
      expect(repeater('.notify', 'Notify Divs').count()).toBe(1);
    });

    it('should show a nofication', function(){
      element(".btn-primary").click();
      expect(element(".notify").html()).not().toBe("");
    })
});