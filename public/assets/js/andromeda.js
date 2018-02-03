$(document).ready(() => {
    console.log('// dev - andromeda.js working');

    // TODO: check for rows with row--card class, then execute the following:
    (matchHeight = () => {
        // get collection of card heights
        var heights = $('.row.row--card').find('.card').map((idx, card) => card.offsetHeight);

        // get largest value from heights collection and apply it to each card node's height style
        $('.row.row--card').find('.card').each((idx, card) => card.style.height = Math.max(...heights) + "px");
    })();
});
