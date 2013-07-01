
/*
 * GET homework result 1-2.
 */

var mongoose = require('mongoose')
    , FunnyNumber = mongoose.model('FunnyNumber');

exports.homework1_2 = function(req, res){
    FunnyNumber.find().exec(function(err, numbers){
        var magic = 0;
        for (var i = 0 ; i < numbers.length; i++) {
            if (numbers[i].value % 3 == 0) {
                magic += numbers[i].value;
            }
        }

        res.render('homework1/hw1-2', { result: magic });
    });
};

exports.homework1_3 = function(req, res){
    var n = req.route.params.n;

    FunnyNumber
        .find()
        .limit(1)
        .skip(n)
        .sort('value')
        .exec(function(err, numbers){

            var result;
            for (var i = 0 ; i < numbers.length; i++) {
                result = numbers[i].value + '\n';
            }

            console.log(result);
            res.render('homework1/hw1-3', { n: n, result: result });
        });
};