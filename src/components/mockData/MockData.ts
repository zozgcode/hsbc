import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Mark & Hana Smith',
      lastName: '',
      mobileNumber: '489-178-0042',
      email: 'smithmark@Mhunlimited.com',
      jointNames: '',
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3800000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 23 2013',
        description: 'Wire Transfer from Hana Smith',
        status: 'Success',
        amount_usd: 200000.0,
        account_no: '****2323'
      },
      {
        transaction_id: '002',
        dateTime: 'March 23 2013',
        description: 'Check Deposit by Mark Smith',
        status: 'Success',
        amount_usd: 500000.0,
        account_no: '****4532'
      },
      {
        transaction_id: '003',
        dateTime: 'April 4 2011',
        description: 'Credit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: 2500000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'February 20 2009',
        description: 'Credit from Hana Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****8491'
      },
      {
        transaction_id: '005',
        dateTime: 'February 2 2009',
        description: 'Credit from Mark Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****0933'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Julie',
      lastName: 'Leach',
      mobileNumber: '',
      email: 'j@gmail.com',
      jointNames: '',
      username: 'JULIELEACH6',
      password: 'LEACHJ2047$'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1829939.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'May 20 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 11000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'May 1 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 400000.0,
        account_no: '****0937'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'April 19 2024',
        description: 'Debit',
        status: 'Success',
        amount_usd: -2316.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'April 11 2024',
        description: 'Debit',
        status: 'Success',
        amount_usd: -3302.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'March 6 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'March 5 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -5000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 5 2024',
        description: 'Credit',
        status: 'Success',
        amount_usd: 30000.0,
        account_no: '****9876'
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      firstName: 'Hannah',
      lastName: 'Brooks',
      mobileNumber: '+1-603-349-0797',
      email: 'brookswebb222@gmail.com',
      jointNames: '',
      profileImg: 'https://i.imgur.com/ykds3Y9.pngz',
      username: 'Hbrooks222',
      password: 'Richcarpenter2010'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 0.96
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'September 1 2024',
        description: 'Credit from COINBASE WALLET',
        status: 'Pending',
        amount_usd: 965000.0,
        account_no: '****2323'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'August 21 2024',
        description: 'Debit from BOOKING.COM',
        status: 'Success',
        amount_usd: -1302.0,
        account_no: '****0937'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 19 2024',
        description: 'Debit from UNITED AIRLINE',
        status: 'Success',
        amount_usd: -970.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'August 16 2024',
        description: 'Debit from WALMART',
        status: 'Success',
        amount_usd: -375.52,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'August 10 2024',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'August 5 2023',
        description: 'Withdrawal',
        status: 'Success',
        amount_usd: -7000.0,
        account_no: '****1156'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'August 5 2023',
        description: 'Credit from INVESTMENT',
        status: 'Success',
        amount_usd: 15000.0,
        account_no: '****9876'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'August 1 2023',
        description: 'Account Open',
        status: 'Success',
        amount_usd: 100.0,
        account_no: '****9876'
      }
    ]
  }
];
