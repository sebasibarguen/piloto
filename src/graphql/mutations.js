/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
export const createPlatform = /* GraphQL */ `
  mutation CreatePlatform(
    $input: CreatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    createPlatform(input: $input, condition: $condition) {
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
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
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
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
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
export const createInvoiceItem = /* GraphQL */ `
  mutation CreateInvoiceItem(
    $input: CreateInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    createInvoiceItem(input: $input, condition: $condition) {
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
export const updateInvoiceItem = /* GraphQL */ `
  mutation UpdateInvoiceItem(
    $input: UpdateInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    updateInvoiceItem(input: $input, condition: $condition) {
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
export const deleteInvoiceItem = /* GraphQL */ `
  mutation DeleteInvoiceItem(
    $input: DeleteInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    deleteInvoiceItem(input: $input, condition: $condition) {
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
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
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
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
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
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
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
export const createTransfer = /* GraphQL */ `
  mutation CreateTransfer(
    $input: CreateTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    createTransfer(input: $input, condition: $condition) {
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
export const updateTransfer = /* GraphQL */ `
  mutation UpdateTransfer(
    $input: UpdateTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    updateTransfer(input: $input, condition: $condition) {
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
export const deleteTransfer = /* GraphQL */ `
  mutation DeleteTransfer(
    $input: DeleteTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    deleteTransfer(input: $input, condition: $condition) {
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
