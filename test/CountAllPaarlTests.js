
describe('this tests if the registration number from Paarl' , function()
{
    it('should return reg Number from Paarl' , function(){
      var Paarlregistration = 'CJ 345 123, CK 345, CJ 123';
        var regs = allPaarl(Paarlregistration)
        
        assert.equal('CJ 345 123', regs[0]);
    });

});