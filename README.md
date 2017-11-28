gradrating
==========

Yet Another angularJs Rating Directive
This one - with gradients!

usage:
    <gradrating
        rate-current=""
        rate-icon-classes=""
        rate-count=""
        rate-raters=""
        rate-callback=""
    ></gradrating>

parameters:

    rateZCurrent: initial rate when loading.
    rateRaters: Number. Number of raters so far.
    rateIconClasses: Array. Classes to be used as rating stars (sample is useing Fontawesome classes).
    rateCount: Number. The number of rating options (defaults to 5).
    rateCallback: function name. Function to be called when rate icon is clicked.

CSS
    Include the rating.css file when needed for the basic styling classes.


Working sample @ http://ziv-p.com/gradrating/
