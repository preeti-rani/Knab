describe('api test',function() {

    Cypress.config('baseUrl','https://api.trello.com/1')

    it('Get member details',function(){
        cy.request({
            method : 'GET',url : '/members/John?key=063ae17508bef65f8d726e8f504e896f&token=974634547231230109a755594ce1a4af06ee5d68fbd79f46acc89a655432eb87',
        }).then((response) =>{
            //expect(response).to.have.property('status',200);
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
            expect(response.body.idBoards).to.have.length(11)
        });
    });


    it('crate board',function(){
        cy.request({
            method : 'POST',
            url : '/boards/?key=063ae17508bef65f8d726e8f504e896f&token=974634547231230109a755594ce1a4af06ee5d68fbd79f46acc89a655432eb87&name=preeti',
        }).its('body').should('include',{name:'preeti'})
           
        });
    

    it('delete board',function(){
        cy.request({
            method : 'DELETE',
            url : '/boards/606e10f14e29bb8800bc95ec?key=063ae17508bef65f8d726e8f504e896f&token=974634547231230109a755594ce1a4af06ee5d68fbd79f46acc89a655432eb87',
            failOnStatusCode: false,

        }).then(function(response){
            expect(response).to.have.property('status',404);
        });
    });
});