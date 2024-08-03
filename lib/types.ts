export type MetaData = {
  iss: string;
  sub: string;
  name: string;
  email: string;
  picture: string;
  full_name: string;
  avatar_url: string;
  provider_id: string;
  email_verified: boolean;
  phone_verified: boolean;
};

export type Profile = [
  {
    display_name: string;
    avatar: string;
    background_image: string;
    bio: string;
    user_id: number;
  },
];
