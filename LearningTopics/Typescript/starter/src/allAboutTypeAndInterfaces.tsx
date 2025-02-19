type companyType = "MNC" | "Startup" | "Product Based";
type EmployeeType = "Contract" | "Payroll";

interface Company {
  id: number;
  type: companyType;
}

type Industry = {
  indId: number;
  sector: "Security";
};

interface Generic_Employee {
  isSalaried: boolean;
  LWD: string;
}

// not allowed
// inter someInt= Company & Generic_Employee

type worker = Industry & Generic_Employee;

const newEmp: worker = {
  indId: 3436768,
  sector: "Security",
  isSalaried: true,
  LWD: Date.now().toString(),
};

function onBoardNewEmployee(emp: worker) {}

// this is allowed
class SomeEmp implements Generic_Employee {
  isSalaried: boolean;
  LWD: string;
  constructor(isSalaried: boolean, LWD: string) {
    this.LWD = LWD;
    this.isSalaried = isSalaried;
  }
}
