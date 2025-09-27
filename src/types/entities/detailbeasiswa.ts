import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

export type DetailBeasiswa = {
  id: number;
  slug: string;
  title: string;
  jenis: string;
  jenjang: string;
  organizer: Organizer[];
  image: ExtractProps<typeof NextImage>;
  oprec: string;
  deadline: string;
};

type Organizer = {
  id: number;
  image: ExtractProps<typeof NextImage>;
  name: string;
};

export type AllBeasiswa = {
  id: string;
  nama: string;
  penyelenggara: string;
  jenis: string;
  skala: string;
  tanggal_mulai: Date;
  tanggal_selesai: Date;
  open_registration: string | Date;  // timestamp
  close_registration: string | Date;
  logo: string;
};


export type Scholarship = {
  id: number;
  nama: string;
  jenis: string; // USER-DEFINED
  penyelenggara: string;
  benefit: string;
  open_registration: string | Date; // timestamp without time zone
  close_registration: string | Date;
  khusus_daerah_tertentu: boolean;
  asal_daerah: string;
  status_batas_usia: boolean;
  min_umur?: number;
  max_umur?: number;
  status_gender_khusus: boolean;
  gender?: string; // USER-DEFINED
  status_semester_khusus: boolean;
  semester_khusus?: number;
  status_fakultas_khusus: boolean;
  status_jurusan_khusus: boolean;
  status_kebutuhan_ipk: boolean;
  min_ipk?: number;
  status_beasiswa_double: boolean;
  status_disabilitas: boolean;
  link_guidebook: string;
  link_pendaftaran: string;
  deskripsi: string;
  img_path: string;
  jenjang: string; // USER-DEFINED
  status_keluarga_tidak_mampu: boolean;
  kampus_bisa_daftar: string[]; // ARRAY

};

export type Requirement = {
  berkas: string[];
  gpa?: string;
  instansi?: string[];
  jurusan?: string[];
  semester?: number[];
  persyaratan: string[]; // ARRAY of Requirement
  lainnya: string[]; // ARRAY
};

export type BeasiswaDetail = {
  data: {
    scholarship: Scholarship;
    requirement: Requirement;
  };
};