import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
const CompanyDeleteSchema = z.object({
    id: z.number(),
  });
export class DeleteCompanyDto extends createZodDto(CompanyDeleteSchema){
}