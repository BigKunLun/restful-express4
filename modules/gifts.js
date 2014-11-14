var express = require('express');
var router = express.Router();

var gifts = [
  {
    gitf_id: 1,
    gitf_name: '超级大礼包1'
  },{
    gitf_id: 2,
    gitf_name: '超级大礼包2'
  },{
    gitf_id: 3,
    gitf_name: '超级大礼包3'
  },{
    gitf_id: 4,
    gitf_name: '超级大礼包4'
  },{
    gitf_id: 5,
    gitf_name: '超级大礼包5'
  }
];

router.route('/gifts')
  .get(function(req,res){
    res.json(gifts);
  });

module.exports = router;