import { Router } from 'express';
import { ChatController } from '../controllers';
import checkUserAuth from '../middlewares/checkUserAuth';

const ChatRouter = Router();

ChatRouter.get('/chat', ChatController.renderChat);
ChatRouter.post('/chat', checkUserAuth, ChatController.addMessage);

export default ChatRouter;
