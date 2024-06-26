import { BaseResponse, Error } from './common';

type LegalEntityType = 'F' | 'J' | 'E';

enum Crt {
  'Não informado' = 0,
  'Simples Nacional' = 1,
  'Regime Normal' = 3,
}

type Sex = 'masculino' | 'feminino';

type Situation = 'A' | 'I' | 'S';

export interface Contact {
  id_pessoa: number;
  nome: string;
  telefone: string;
  ramal: string;
  email: string;
  departamento: string;
}

export interface Customer {
  id: number;
  codigo: string;
  nome: string;
  fantasia: string;
  tipo_pessoa: LegalEntityType;
  cpf_cnpj: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  email: string;
  fone: string;
  id_lista_preco: number;
  id_vendedor: number;
  nome_vendedor: string;
  situacao: Situation;
  data_criacao: string;
}

export interface DetailedCustomer extends Customer {
  endereco_cobranca: string;
  numero_cobranca: string;
  complemento_cobranca: string;
  bairro_cobranca: string;
  cep_cobranca: string;
  cidade_cobranca: string;
  uf_cobranca: string;
  contatos: string;
  fone: string;
  fax: string;
  celular: string;
  email: string;
  email_nfe: string;
  site: string;
  crt: Crt;
  estadoCivil: number;
  profissao: string;
  sexo: Sex;
  data_nascimento: string;
  naturalidade: string;
  nome_pai: string;
  cpf_pai: string;
  nome_mae: string;
  cpf_mae: string;
  limite_credito: number;
  situacao: Situation;
  obs: string;
  id_lista_preco: number;
  id_vendedor: number;
  nome_vendedor: string;
  data_criacao: string;
  data_atualizacao: string;
  tipos_contato: string[];
  pessoas_contato: Contact[];
}

export interface SearchCustomersParams {
  pesquisa: string;
  cpf_cnpj?: string;
  idVendedor?: number;
  nomeVendedor?: string;
  situacao?: string;
  pagina?: number;
  dataCriacao?: string;
  dataMinimaAtualizacao?: string;
}

export interface GetCustomerParams {
  id: string;
}

export interface CustomerAddParams {
  sequencia: string;
  codigo: string;
  nome: string;
  tipo_pessoa: LegalEntityType;
  cpf_cnpj: string;
  ie?: string;
  rg?: string;
  im?: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  pais?: string;
  contatos: string;
  fone: string;
  fax?: string;
  celular?: string;
  email: string;
  id_vendedor: string;
  situacao: Situation;
  obs: string;
  contribuinte: string;
}

interface CustomerUpdateParams {
  sequencia: number;
  id?: number;
  codigo?: string;
  nome: string;
  fantasia?: string;
  tipo_pessoa?: LegalEntityType;
  cpf_cnpj?: string;
  ie?: string;
  rg?: string;
  im?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  uf?: string;
  pais?: string;
  endereco_cobranca?: string;
  numero_cobranca?: string;
  complemento_cobranca?: string;
  bairro_cobranca?: string;
  cep_cobranca?: string;
  cidade_cobranca?: string;
  uf_cobranca?: string;
  contatos?: string;
  fone?: string;
  fax?: string;
  celular?: string;
  email?: string;
  email_nfe?: string;
  site?: string;
  crt?: Crt;
  estadoCivil?: number;
  profissao?: string;
  sexo?: Sex;
  data_nascimento?: string;
  naturalidade?: string;
  nome_pai?: string;
  cpf_pai?: string;
  nome_mae?: string;
  cpf_mae?: string;
  limite_credito?: number;
  id_vendedor?: number;
  nome_vendedor?: string;
  tipos_contato?: { tipo: string }[];
  pessoas_contato?: { pessoa_contato: Contact }[];
  situacao: Situation;
  obs?: string;
}

export interface Record {
  sequencia?: string;
  status: string;
  codigo_erro?: string;
  erros?: Error[];
  id?: string;
}

export interface AddCustomerParams {
  contato: CustomerAddParams;
}

export interface UpdateCustomerParams {
  contato: CustomerUpdateParams;
}

export interface SearchCustomersResponse {
  retorno: BaseResponse['retorno'] & {
    contatos?: { contato: Customer }[];
  };
}

export interface GetCustomerResponse {
  retorno: BaseResponse['retorno'] & {
    contato: DetailedCustomer;
  };
}

export interface AddCustomerResponse {
  retorno: BaseResponse['retorno'] & {
    registros?: Record[];
  };
}

export interface UpdateCustomerResponse {
  retorno: BaseResponse['retorno'] & {
    registros?: Record[];
  };
}
