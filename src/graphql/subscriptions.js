/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
export const onCreatePlatform = /* GraphQL */ `
  subscription OnCreatePlatform {
    onCreatePlatform {
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
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform {
    onUpdatePlatform {
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
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform {
    onDeletePlatform {
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
export const onCreateInvoiceItem = /* GraphQL */ `
  subscription OnCreateInvoiceItem {
    onCreateInvoiceItem {
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
export const onUpdateInvoiceItem = /* GraphQL */ `
  subscription OnUpdateInvoiceItem {
    onUpdateInvoiceItem {
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
export const onDeleteInvoiceItem = /* GraphQL */ `
  subscription OnDeleteInvoiceItem {
    onDeleteInvoiceItem {
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice {
    onCreateInvoice {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice {
    onUpdateInvoice {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice {
    onDeleteInvoice {
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
export const onCreateTransfer = /* GraphQL */ `
  subscription OnCreateTransfer {
    onCreateTransfer {
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
export const onUpdateTransfer = /* GraphQL */ `
  subscription OnUpdateTransfer {
    onUpdateTransfer {
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
export const onDeleteTransfer = /* GraphQL */ `
  subscription OnDeleteTransfer {
    onDeleteTransfer {
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
