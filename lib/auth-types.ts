export interface ApiLoginUser {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isSuperAdmin?: boolean;
}

export interface ApiLoginResponse {
  user: ApiLoginUser;
  accessToken: string;
  refreshToken: string;
}

