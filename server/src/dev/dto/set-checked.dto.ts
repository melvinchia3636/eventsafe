import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const setCheckedSchema = z.object({
  checked: z.boolean(),
});

export class SetCheckedDto extends createZodDto(setCheckedSchema) {}
