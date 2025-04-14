
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCompanyInput {
    id: string;
    name: string;
    nip: number;
}

export class UpdateCompanyInput {
    id: string;
    name?: Nullable<string>;
    nip?: Nullable<number>;
}

export class DeleteCompanyInput {
    id: string;
}

export class CreateWorkerInput {
    id: string;
    name: string;
    surname: string;
}

export class Company {
    id: string;
    name: string;
    nip?: Nullable<number>;
    adress?: Nullable<string>;
    regon?: Nullable<number>;
    pkd?: Nullable<string>;
    postalCode?: Nullable<string>;
    city?: Nullable<string>;
    street?: Nullable<string>;
    phoneNumber?: Nullable<number>;
    email?: Nullable<string>;
    notes?: Nullable<string>;
}

export class Worker {
    id: string;
    name: string;
    surname: string;
}

export abstract class IQuery {
    abstract companies(): Nullable<Nullable<Company>[]> | Promise<Nullable<Nullable<Company>[]>>;

    abstract workers(): Nullable<Nullable<Worker>[]> | Promise<Nullable<Nullable<Worker>[]>>;
}

export abstract class IMutation {
    abstract createCompany(data?: Nullable<CreateCompanyInput>): Nullable<Company> | Promise<Nullable<Company>>;

    abstract updateCompany(data?: Nullable<UpdateCompanyInput>): Nullable<Company> | Promise<Nullable<Company>>;

    abstract deleteCompany(data?: Nullable<DeleteCompanyInput>): Nullable<Company> | Promise<Nullable<Company>>;

    abstract createWorker(data?: Nullable<CreateWorkerInput>): Nullable<Worker> | Promise<Nullable<Worker>>;
}

type Nullable<T> = T | null;
