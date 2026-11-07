import { AppDataSource } from '../data-source.js';
import { Conversation } from '../../modules/conversations/entities/conversation.entity.js';
import { ConversationStatus } from '../../modules/conversations/enums/conversation.enum.js';

export const seedConversations = async () => {
  const repository = AppDataSource.getRepository(Conversation);

  const conversations = [
    {
      status: ConversationStatus.PENDING,
      childId: 'cccccccc-1111-4111-8111-111111111111',
      parentId: '11111111-1111-4111-8111-111111111111',
      doctorId: null,
    },
    {
      status: ConversationStatus.PENDING,
      childId: 'cccccccc-3333-4222-8222-222222222222',
      parentId: '22222222-2222-4222-8222-222222222222',
      doctorId: null,
    },
  ];

  await repository.save(conversations);
};
