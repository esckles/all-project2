export interface iUser {
  firstName: string;
  lastName: string;
  emailAddress: string;
  posts: [];
}

export interface iPost {
  like: [];
  comment: [];
  title: string;
  image: string;
  imageId: string;
  userId: any;
}
