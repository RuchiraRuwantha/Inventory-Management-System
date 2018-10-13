const mongoose = require("mongoose");
// var bcrypt = require("bcrypt-nodejs");




var itemSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    itemname: {
        type: String,
        required: true,
    },

    itemtype: {
        electronic: {
            type: String,
            required: false
        },
        wooden: {
            type: String,
            required: false
        },
        cushion: {
            type: String,
            requied: false
        },
        plastic: {
            type: String,
            reqired: false
        }
    },
    itemstatus: {
        work_well: {
            type: String,
            required: false
        },
        out_of_order: {
            type: String,
            required: false
        },
        damage: {
            type: String,
            required: false
        }
    },
    hallname: {
        type: String,
        required: true
    }
});


var Item = mongoose.model("Item", itemSchema);

module.exports = Item;