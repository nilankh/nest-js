// Partial type

/*
type X = {a: string, b: number};
type MakePartial<T> = Partial<T>
type K = MakePartial<X>

type Z = MakePartial(Y)
*/

/*
interface Bank {
  bankName: string;
  ifscCode: string;
}
function fillBank(bank: Bank, details: Partial<Bank>) {
  return { ...bank, ...details };
}
const bank1 = {
  bankName: 'Sbi',
  ifscCode: 'SBIN0001223',
};
const bank2 = fillBank(bank1, {
  ifscCode: 'SBIN0001224',
});
console.log(bank2);
*/

// Required type
/*
interface Bank{
    bankName?: string;
    ifsc?: string;
}

const a1: Bank = {bankName: "sbi"};
console.log(a1);

const a2: Required<Bank> = {ifsc: "Sbin"};
*/

// Readonly

/*
interface bank {
    bankName: string;
}

const bank1 : Readonly<bank> = {
    bankName: "State bank of India"
}


bank1.bankName = "Punjabl national bank";
*/

/*
interface BankInfo {
  accountType: string;
}

type BankName = 'pnb' | 'sbi' | 'rbi';

const bank1: Record<BankName, BankInfo> = {
  pnb: { accountType: 'saving' },
  sbi: { accountType: 'current' },
  rbi: { accountType: 'regualr' },
};

bank1.pnb;
*/

//Pick<Type, Keys>
/*
interface Bank{
    bankName: string;
    ifscCode: string;
    location: string;
}

type BankPreview = Pick<Bank, "bankName" | "location"> ;

const bank1: BankPreview = {
    bankName: "State Bank Of India",
    location: "Vizag",
}
bank1;
*/

// Omit<Type, Keys>
/*
interface Bank {
  bankName: string;
  ifscCode: string;
  location: string;
  account: number;
  isActive: boolean;
}

type BankPreview = Omit<Bank, 'location'>;
const bank1: BankPreview = {
  bankName: 'State Bank of India',
  ifscCode: 'SBIN0001223',
  account: 1234566,
  isActive: true,
  location: "darbhaga"
};

bank1;

type BankInfo = Omit<Bank, 'location' | 'account'>;

const bankInfo: BankInfo = {
  bankName: 'Reserve Bank Of India',
  ifscCode: 'RBI1234',
  isActive: true,
};

bankInfo;
*/

// Exclude<Type, ExcludedUnion>
/*
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

type T2 = Exclude<string | number | (() => void), Function>;
//  By darves
type A =  string | number | (() => void);
type B = Function;
Exclude<A, B>
type Result = Exclude<A, B>
*/












