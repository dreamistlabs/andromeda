$( document ).ready(() => {
    console.log('// dev - andromeda.js working');

    // TODO: check for rows with row--card class so it doesn't always execute
    // TODO: turn this into a reusable functions
    (matchHeight = () => {
        // get collection of card heights
        var heights = $('.row.row--card-has-same-height').find('.card').map((idx, card) => card.offsetHeight);

        // get largest value from heights collection and apply it to each card node's height style
        $('.row.row--card-has-same-height').find('.card').each((idx, card) => card.style.height = Math.max(...heights) + "px");
    })();

});
