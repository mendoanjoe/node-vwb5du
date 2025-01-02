export const INITIAL_MESSAGE = {
  id: '1',
  message: 'Hai kak, ada yang bisa di bantu hari ini ?',
  choices: ['Cek resi pesanan', 'Informasi diskon', 'Lokasi toko'],
};

export const CHAT_RESPONSES = {
  'Cek resi pesanan': {
    message: 'Kamu bisa cek pengirimanmu halaman ini https://google.com',
    choices: [],
  },
  'Informasi diskon': {
    message: 'Follow sosial media kami untuk informasi diskon',
    choices: ['Instagram', 'Tiktok'],
  },
  'Lokasi toko': {
    message: 'Our stores are located in:',
    choices: ['Jakarta', 'Surabaya', 'Bandung', 'Lainnya'],
  },
} as const;

export type ChatResponse = typeof CHAT_RESPONSES[keyof typeof CHAT_RESPONSES];
