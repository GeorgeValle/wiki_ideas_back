import {Router} from 'express';

const routes= Router();

import topic from '../controllers/TopicController.js';
//********************************************** */

//create a new Topic 
routes.post('/', topic.createTopic)

//get all topics
routes.get('/', topic.getAllTopics)
//get a topic 
routes.get('/id/:id_topic', topic.findTopicById)

//get topics by a search whit characters
routes.get('/search/:letters_title', topic.findTopicByLetters)

//update a topic by id_user
routes.put('/:id_topic', topic.updateTopicById)

//delete a topic
routes.delete('/:id_topic', topic.deleteTopicById)







const topicRouter = routes
export {topicRouter}