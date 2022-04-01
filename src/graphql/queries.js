/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      attempt_id
      platform {
        id
        key
        name
        jobs {
          id
          attempt_id
          key
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      key
      createdAt
      updatedAt
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        attempt_id
        platform {
          id
          key
          name
          createdAt
          updatedAt
        }
        key
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      id
      key
      name
      jobs {
        id
        attempt_id
        platform {
          id
          key
          name
          createdAt
          updatedAt
        }
        key
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        name
        jobs {
          id
          attempt_id
          key
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInvoiceItem = /* GraphQL */ `
  query GetInvoiceItem($id: ID!) {
    getInvoiceItem(id: $id) {
      id
      description
      amount
      unit_amount
      quantity
      discount
      total
      tax
      createdAt
      updatedAt
      invoiceItemsId
    }
  }
`;
export const listInvoiceItems = /* GraphQL */ `
  query ListInvoiceItems(
    $filter: ModelInvoiceItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoiceItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        amount
        unit_amount
        quantity
        discount
        total
        tax
        createdAt
        updatedAt
        invoiceItemsId
      }
      nextToken
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      id
      type
      currency
      exportation
      account_name
      account_tax_id
      account_address
      customer_name
      customer_tax_id
      customer_address
      items {
        items {
          id
          description
          amount
          unit_amount
          quantity
          discount
          total
          tax
          createdAt
          updatedAt
          invoiceItemsId
        }
        nextToken
      }
      amount
      createdAt
      updatedAt
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        currency
        exportation
        account_name
        account_tax_id
        account_address
        customer_name
        customer_tax_id
        customer_address
        items {
          nextToken
        }
        amount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransfer = /* GraphQL */ `
  query GetTransfer($id: ID!) {
    getTransfer(id: $id) {
      id
      date
      description
      tags
      amount
      currency
      origin_account_name
      origin_account_number
      destination_account_name
      destination_account_number
      createdAt
      updatedAt
    }
  }
`;
export const listTransfers = /* GraphQL */ `
  query ListTransfers(
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransfers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        description
        tags
        amount
        currency
        origin_account_name
        origin_account_number
        destination_account_name
        destination_account_number
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
