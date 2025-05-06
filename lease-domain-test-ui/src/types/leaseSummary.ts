export interface LeaseSummary {
  lease_id: string;
  lease_start_date: string;
  lease_end_date: string;
  base_rent: number;
  addons_total: number;
  monthly_total: number;
  has_pending_transactions: boolean;
  pending_transactions: PendingTransaction[];
  resident: Resident;
  charges: Charge[];
}

export interface PendingTransaction {
  id: string;
  leaseId: string;
  transactionType: string;
  status: string;
  currentStep: string;
  startDate: string;
  expirationDate: string;
  completedDate: string | null;
  metadata: Metadata;
  user: User;
  groupedActivity: GroupedActivity[];
}

export interface Metadata {
  reason: string;
}

export interface User {
  leaseCustomerId: number;
  firstName: string;
  lastName: string;
  customerType: string;
  status: string;
  isPrimary: boolean;
}

export interface GroupedActivity {
  status: string;
  step: string;
  actions: Action[];
}

export interface Action {
  activityId: string;
  action: string;
  sequence: number;
  status: string;
  stepData: StepData;
  user: User;
  createdBy: number;
  updatedBy: number;
}

export interface StepData {
  chargeCode: string;
  chargeAmount: number;
  chargeFrequency: string;
  chargeStartDate: string;
  petType: string;
  petName: string;
  petBreed: string;
  isServiceAnimal: boolean;
}

export interface Resident {
  lease_customer_id: number;
  external_customer_id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  customer_type: string;
  is_primary: boolean;
  status: string;
}

export interface Charge {
  lease_charge_id: string;
  charge_code: string;
  charge_description: string;
  charge_amount: number;
  is_optional: boolean;
  effective_date: string;
  end_date: string;
}