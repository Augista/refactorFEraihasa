export interface User {
  token: any;
  id: any;
  angkatan: string | null;
  asal_instansi: string | null;
  email: string;
  jurusan: string | null;
  name: string;
  // user_id: string;
  role: 'USER' | 'ADMIN';
}

export interface withToken {
  token: string;
}
