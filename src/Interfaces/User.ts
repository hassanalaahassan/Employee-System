export interface IUser{
  userName:string
  password:string
}
export interface ILoggedUser {
    message: string
    result: boolean
    data: Data
  }

  export interface Data {
    employeeId: number
    employeeName: string
    contactNo: string
    emailId: string
    deptId: number
    password: string
    gender: string
    role: string
    createdDate: string
  }
