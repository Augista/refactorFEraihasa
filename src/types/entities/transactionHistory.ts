export interface TransactionHistoryProps {
  _id: string;
  productName: string;
  price: number;
  paymentProof: {
    type: Buffer;
    data: number[];
  };
  paymentProofExtension: string;
  status: string;
  userID: string;
}
