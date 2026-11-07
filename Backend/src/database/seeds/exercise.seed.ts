import { AppDataSource } from '../data-source.js';
import { Exercise } from '../../modules/exercises/entities/exercise.entity.js';

export async function seedExercises() {
  const exerciseRepository = AppDataSource.getRepository(Exercise);

  const exercises = [
    {
      name: 'Toe Curl',
      description: 'Bài tập cuộn các ngón chân.',
      videoUrl: null,
    },
    {
      name: 'Towel Scrunch',
      description: 'Dùng các ngón chân kéo khăn về phía bàn chân.',
      videoUrl: null,
    },
    {
      name: 'Heel Raise',
      description: 'Bài tập nâng gót chân lên khỏi mặt sàn.',
      videoUrl: null,
    },
    {
      name: 'Short Foot Exercise',
      description: 'Bài tập kích hoạt các cơ nội tại của bàn chân.',
      videoUrl: null,
    },
    {
      name: 'Marble Pickup',
      description: 'Dùng các ngón chân nhặt vật nhỏ.',
      videoUrl: null,
    },
  ];

  await exerciseRepository.save(exercises);
}
