import { AppDataSource } from '../data-source.js';
import { ConsultationMessage } from '../../modules/consultation-messages/entities/consultation-message.entity.js';
import { Conversation } from '../../modules/conversations/entities/conversation.entity.js'; // Nhập Entity này

export async function seedConsultationMessages() {
  const messageRepository = AppDataSource.getRepository(ConsultationMessage);
  const conversationRepository = AppDataSource.getRepository(Conversation);

  // Lấy ra tất cả các conversation đã seed trước đó
  const conversations = await conversationRepository.find();

  if (conversations.length < 2) {
    console.warn('Chưa đủ dữ liệu conversations để seed messages');
    return;
  }

  // Lấy động 2 ID vừa được tạo
  const convId1 = conversations[0].conversationId;
  const convId2 = conversations[1].conversationId;

  const messages = [
    {
      content:
        'Chào bác sĩ, con tôi có dấu hiệu bàn chân bẹt. Tôi muốn được tư vấn.',
      attachmentUrl: null,
      isRead: true,
      conversationId: convId1, // Sử dụng ID động
      senderUserId: '11111111-1111-4111-8111-111111111111',
    },
    // ... các tin nhắn khác dùng convId1

    {
      content: 'Cảm ơn bác sĩ, tôi sẽ hướng dẫn bé tập luyện theo chỉ dẫn.',
      attachmentUrl: null,
      isRead: true,
      conversationId: convId2, // Sử dụng ID động của cuộc hội thoại thứ 2
      senderUserId: '22222222-2222-4222-8222-222222222222',
    },
  ];

  await messageRepository.save(messages);
}
