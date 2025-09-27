export type ScholarshipDetails = {
  title: string;
  organizer: string;
  registration: string;
  deadline: string;
  about: About[];
  benefit: Benefit[];
  requirement: RequirementS[];
  timeline: Timeline[];
};

type About = {
  description: string;
  jenis: string;
};

type Benefit = {
  pendidikan: Pendidikan[];
  loa: string;
  buku: string;
};

type Pendidikan = {
  list: string;
};

type RequirementS = {
  jenjang: Jenjang[];
  berkas: Berkas[];
  other: Other[];
};

type Jenjang = {
  list: string;
};

type Berkas = {
  list: string;
};
type Other = {
  description: string;
};

type Timeline = {
  awal: Awal[];
  seleksi: Seleksi[];
  akhir: Akhir[];
};

type Awal = {
  list: AwalList[];
};

type AwalList = {
  title: string;
  date: string;
};
type Seleksi = {
  list: SeleksiList[];
};

type SeleksiList = {
  title: string;
  date: string;
};
type Akhir = {
  list: AkhirList[];
};

type AkhirList = {
  title: string;
  date: string;
};
