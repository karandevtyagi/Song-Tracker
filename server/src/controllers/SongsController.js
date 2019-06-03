const Sequelize=require('sequelize')
const {Song}=require('../models')
module.exports={
  async post(req,res){
    try{    const song= await Song.create(req.body)
        res.send(song)    
    }catch(err){
        res.status(500).send({
            error:" An error occured while submiting song."
        })
    }
    },
    async index(req,res){
        try{
            let songs=null
              let search=req.query.search
            if(search){
               songs=await Song.findAll({
                   where:Sequelize.or({
                       'title':search
                   },{
                       'album':search
                   },{
                    'artist':search
                },{
                    'genre':search
                })
               })
               res.send(songs)
            }
            else{
             songs= await Song.findAll({
            limit:10
        })
        res.send(songs)              
        }
    }catch(err){
            res.status(500).send({
                error:" An error occured while loading song."
            })
        }
        },
        async Show(req,res){
            try{
               const song= await Song.findOne({
                    where:{
                        id:req.params.songId
                    }
                })
                res.send(song)
            }catch(err){
                res.status(500).send({
                    error:"An error occured while loading your song."
                })
            }
        },
        async put(req,res){
            try{    const song= await Song.update(req.body,{
                where:{
                    id:req.params.songId
                }
            })
                res.send(req.body)    
            }catch(err){
                res.status(500).send({
                    error:" An error occured while submiting song."
                })
            }
            }
}