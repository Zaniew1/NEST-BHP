import { ZodValidationPipe, createZodDto } from 'nestjs-zod';
import { z } from 'zod';
const CompanyCreateSchema = z.object({
    id: z.number(),
    name: z.string().min(3).max(50),
    nip: z.number(),
    adress: z.string().nullable(),
    regon:  z.number().nullable(),
    pkd: z.string().nullable(),
    postalCode: z.string().nullable(),
    city: z.string().nullable(),
    street: z.string().nullable(),
    phoneNumber:  z.number().nullable(),
    email: z.string().nullable(),
    notes: z.string().nullable(),
  });
export class CreateCompanyDto extends createZodDto(CompanyCreateSchema){
}