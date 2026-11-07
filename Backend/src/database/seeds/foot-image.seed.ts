import { AppDataSource } from '../data-source.js';
import { FootImage } from '../../modules/child-profiles/entities/foot-image.entity.js';
import { FootSide } from '../../modules/child-profiles/enums/foot-image.enum.js';

export async function seedFootImages() {
  const footImageRepository = AppDataSource.getRepository(FootImage);

  const footImages = [
    // Nguyen Minh Khang
    {
      imageUrl: 'https://example.com/foot-images/khang-left-1.jpg',
      capturedAt: new Date('2026-10-01T08:00:00'),
      footSide: FootSide.LEFT,
      description: 'Hình ảnh lòng bàn chân trái khi bắt đầu theo dõi.',
      childId: 'cccccccc-1111-4111-8111-111111111111',
    },
    {
      imageUrl: 'https://example.com/foot-images/khang-right-1.jpg',
      capturedAt: new Date('2026-10-01T08:05:00'),
      footSide: FootSide.RIGHT,
      description: 'Hình ảnh lòng bàn chân phải khi bắt đầu theo dõi.',
      childId: 'cccccccc-1111-4111-8111-111111111111',
    },

    // Tran Gia Bao
    {
      imageUrl: 'https://example.com/foot-images/giabao-left-1.jpg',
      capturedAt: new Date('2026-10-05T08:00:00'),
      footSide: FootSide.LEFT,
      description: 'Hình ảnh bàn chân trái, vòm chân có dấu hiệu bẹt.',
      childId: 'cccccccc-2222-4111-8111-111111111111',
    },
    {
      imageUrl: 'https://example.com/foot-images/giabao-right-1.jpg',
      capturedAt: new Date('2026-10-05T08:05:00'),
      footSide: FootSide.RIGHT,
      description: 'Hình ảnh bàn chân phải, vòm chân có dấu hiệu bẹt.',
      childId: 'cccccccc-2222-4111-8111-111111111111',
    },

    // Le Ngoc Anh
    {
      imageUrl: 'https://example.com/foot-images/ngocanh-left-1.jpg',
      capturedAt: new Date('2026-10-10T08:00:00'),
      footSide: FootSide.LEFT,
      description: 'Hình ảnh bàn chân trái để theo dõi tình trạng vòm chân.',
      childId: 'cccccccc-3333-4222-8222-222222222222',
    },
    {
      imageUrl: 'https://example.com/foot-images/ngocanh-right-1.jpg',
      capturedAt: new Date('2026-10-10T08:05:00'),
      footSide: FootSide.RIGHT,
      description: 'Hình ảnh bàn chân phải để theo dõi tình trạng vòm chân.',
      childId: 'cccccccc-3333-4222-8222-222222222222',
    },

    // Pham Duc Huy
    {
      imageUrl: 'https://example.com/foot-images/duchuy-left-1.jpg',
      capturedAt: new Date('2026-10-15T08:00:00'),
      footSide: FootSide.LEFT,
      description: 'Hình ảnh bàn chân trái, có dấu hiệu vòm chân thấp.',
      childId: 'cccccccc-4444-4222-8222-222222222222',
    },
    {
      imageUrl: 'https://example.com/foot-images/duchuy-right-1.jpg',
      capturedAt: new Date('2026-10-15T08:05:00'),
      footSide: FootSide.RIGHT,
      description: 'Hình ảnh bàn chân phải, có dấu hiệu vòm chân thấp.',
      childId: 'cccccccc-4444-4222-8222-222222222222',
    },
  ];

  await footImageRepository.save(footImages);
}
