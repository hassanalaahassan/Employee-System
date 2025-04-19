export interface IParentdepartment {
  departmentId: number
  departmentName: string
  departmentLogo: string
}
export interface IChilddepartment{
  childDeptId: number
  parentDeptId: number
  departmentName: string
}
export interface IDepartment{
  id: number
  departmentName: string
}
