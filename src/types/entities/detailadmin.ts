export type InterviewDetail = {
  order_name: string;
  email: string;
  payment_proof: string;
  type_product: string;
  status: 'UNVERIFIED' | 'APPROVED' | 'REJECTED' | 'WAITING' | 'COMPLETE';
  jadwal: string;
  link_zoom: string;
};

export type PostInterviewSchedule = {
  schedule: Date;
  link_zoom: string;
};

export type EssayDetail = {
  order_name: string;
  email: string;
  payment_proof: string;
  file_essay: string;
  type_product: string;
  status: 'UNVERIFIED' | 'APPROVED' | 'REJECTED' | 'WAITING' | 'COMPLETE';
  link_review: string;
};

export type PostEssayReview = {
  file_link: string;
};

export type CVDetail = {
  order_name: string;
  email: string;
  payment_proof: string;
  file_cv: string;
  type_product: string;
  status: 'UNVERIFIED' | 'APPROVED' | 'REJECTED' | 'WAITING' | 'COMPLETE';
  link_review: string;
};

export type PostCVReview = {
  file_link: string;
};

export type UpdateStatus = {
  status: 'UNVERIFIED' | 'APPROVED' | 'REJECTED' | 'WAITING' | 'COMPLETE';
};

export type LMSDetail = {
  lms_id: string;
  start: string;
  end: string;
  status: 'UNVERIFIED' | 'APPROVED' | 'REJECTED' | 'WAITING' | 'COMPLETE';
  product_id: string;
  paket: string;
  masa_aktif: string;
  harga: number;
  pembayaran_id: string;
  bukti_bayar: string;
  total_bayar: number;
};
