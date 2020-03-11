$(document).ready(function () {
    let sidebarToggle = $('.sidebar-toggle');
    let sidebar = $('.sidebar');

   
    sidebarToggle.click(function () {
        sidebar.toggleClass('opened');
    });

    let betSlipCardToggelr = $('.btn-bet-slip');
    let betSlipCard = $('.bet-slip');

    betSlipCardToggelr.click(function () {
        betSlipCard.show();
    })
    
});