export interface UserData {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
}

export const userData: UserData = {
  name: "함준식",
  handle: "@junsik_ham",
  bio: "꿈을 현실로 만드는 개발자입니다. 새로운 기술과 디자인의 조화를 연구합니다.",
  avatarUrl: "https://github.com/shadcn.png", // 기본 아바타 이미지 또는 실제 이미지 경로
};
