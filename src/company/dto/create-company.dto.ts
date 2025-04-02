import { ZodValidationPipe, createZodDto } from 'nestjs-zod';
import { z } from 'zod';
const CompanySchema = z.object({
    name: z.string(),
    nip: z.number().min(18),
    adress: z.string()
  });
export class CreateCompanyDto extends createZodDto(CompanySchema){
}