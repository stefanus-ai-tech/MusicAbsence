export type UserRole = "teacher" | "student" | "admin";

export interface RolePermissions {
  canCreate: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  canViewDetails: boolean;
}

export const rolePermissions: Record<UserRole, RolePermissions> = {
  admin: {
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    canViewDetails: true,
  },
  teacher: {
    canCreate: true,
    canUpdate: true,
    canDelete: false,
    canViewDetails: true,
  },
  student: {
    canCreate: false,
    canUpdate: false,
    canDelete: false,
    canViewDetails: true,
  },
};