import { Router } from 'express';
import { ChatController } from '../controllers';

const ChatRouter = Router();

ChatRouter.get('/chat', ChatController.renderChatForm);

export default ChatRouter;
