describe('this greeting test' , function()
{
    it('should return hello and the name of a person' , function(){
        assert.equal('Hello, Ben', greet('Ben'));

    });

});