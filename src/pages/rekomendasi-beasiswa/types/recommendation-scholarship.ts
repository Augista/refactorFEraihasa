export type RecommendationScholarshipRequest = {
  id?: string;
  name?: string;
  email?: string;
  kota_kabupaten?: string;
  provinsi?: string;
  bod?: string;
  gender?: string;
  alamat?: string;
  education_level?: string;
  institusi?: string;
  semester?: number;
  faculty_id?: string;
  major_id?: string;
  ipk?: number;
  status_beasiswa_aktif?: boolean;
  status_keluarga_tidak_mampu?: boolean;
  status_disabilitas?: boolean;
  account_id?: string;
};

export type userData = {
  id?: string;
  name?: string;
  email?: string;
  kota_kabupaten?: string;
  provinsi?: string;
  bod?: string;
  gender?: string;
  alamat?: string;
  education_level?: string;
  institusi?: string;
  semester?: number;
  faculty_id?: string;
  major_id?: string;
  ipk?: number;
  status_beasiswa_aktif?: boolean;
  status_keluarga_tidak_mampu?: boolean;
  status_disabilitas?: boolean;
  account_id?: string;
};

export type HasilRekomendasi = {
  id: string;
  nama: string;
  jenis: string;
  penyelenggara: string;
  benefit: string;
  open_registration: Date;
  close_registration: Date;
  khusus_daerah_tertentu: boolean;
  asal_daerah: string;
  status_batas_usia: boolean;
  min_umur: number;
  max_umur: number;
  status_gender_khusus: boolean;
  gender: string;
  jenjang: string;
  status_semester_khusus: boolean;
  semester_khusus: number;
  status_fakultas_khusus: boolean;
  status_jurusan_khusus: boolean;
  status_kebutuhan_ipk: boolean;
  min_ipk: number;
  status_beasiswa_double: boolean;
  status_keluarga_tidak_mampu: boolean;
  status_disabilitas: boolean;
  img_path: string;
  is_open: boolean;
  kampus_bisa_daftar: string[];
  link_guidebook: string;
  link_pendaftaran: string;
  persyaratan: string[];
  lainnya: string[];
  deskripsi: string;
};

export type PaginateDataHasilRekomendasi = {
  scholarships: HasilRekomendasi[];
  count: Count;
};

export type RecommendationScholarshipResponse = {
  user_data?: userData;
  rekomendasi_beasiswa: PaginateDataHasilRekomendasi;
};

export type FinalResultRecommendation = {
  count: Count;
  scholarships: HasilRekomendasi[];
};

export type Count = {
  total: number;
  open: number;
  closed: number;
};
