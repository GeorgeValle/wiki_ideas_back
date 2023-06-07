//import '../daos/ConnectionDAOMongo.js';
import topicModel from '../models/TopicModel.js'

class Topic{

    async createTopic(req,res){
        try{
            //validate field name of a category
            //createCategoryValidation(req.body)
            const newTopic = await topicModel.create(req.body)
            //logInfo.info(`Topic created: ${req.body.name}  route /Topic/new`)
            return res.status(200).json({message:`Topic ${req.body.name} create`, data:newTopic})
        }catch(err){
            //errorLogger.error(`error in create a new Category: ${err}`)
            return res.status(400).json({message: err, route: "topic/new", zone: "create new topic"})
        }
    }

    async getAllTopics (req,res){
        try {
            let objsDAO = await topicModel.find({});
            //return objsDAO;
            return res.status(200).json({message:`Topic found: `, data:objsDAO})

        }
        catch(err) {
            console.log(err.message);
        }
    }

    async findTopicById (req,res){
        try {

            const {id_topic} = req.params
            if (!id_topic) return res.status(400).json( {message: "Id required"});
            console.log(id_topic);
            typeof(id_topic)
            const objDAO = await topicModel.findOne({ _id: id_topic });;
            if(!objDAO) throw new Error();
            //return objDAO;
            return res.status(200).json({message:`Topic found: `, data:objDAO})
        } catch (err) {
            console.log(err.message);
        } 
    }

    async findTopicByLetters (req, res){
        try{
            const {letters_title} = req.params
            if (!letters_title) return res.status(400).json({message: "required characters in the search"})
            if (letters_title.length<4) return res.status(400).json({message: "more than 3 characters required in the search "})

            let objsDAO = await topicModel.find({
                title: {
                    $regex: letters_title,
                    $options: 'i'
                }
            });
            //return objDAO 
            return res.status(200).json({message:`Topics found: `, data:objsDAO}) 
        }catch(err){
            console.log(err.message);
        }
    }

    async updateTopicById  (req,res){
        try {

            const { id_topic } = req.params
            if (!id_topic) return res.status(400).json( {message: "Id required"});

            let objDAO = await topicModel.findByIdAndUpdate(id_topic, req.body,{new:true});
            //return objDAO 
            return res.status(200).json({message:`Topic update: `, data:objDAO})  
            
        } catch (err) {
            console.log(err.message);
        }  
    }
    

    async deleteTopicById (req,res){
        try {
            const { id_topic } = req.params
            if (!id_topic) return res.status(400).json( {message: "Id required"});

            let objDAO = await topicModel.findByIdAndDelete(id_topic);
            return objDAO
        } catch (err) {
            console.log(err.message);
        }  
    }

}

export default new Topic();