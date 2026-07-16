const express = require("express");
const router = express.Router();

const words = require("./thesaurus.json");

router.get("/search/:word",(req,res)=>{

    const word=req.params.word.toLowerCase();

    if(words[word]){
        res.json(words[word]);
    }else{
        res.status(404).json({
            message:"Word not found."
        });
    }

});

module.exports=router;