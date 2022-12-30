export const routePaths = {
    Landing: "/",
    Login: "/login",
    Category: "/category",
    CardCollection: "/card-collection",
    Vote: "/vote",
    VoteId: "/:voteId",
    MyPage: "/my-page",
    BookmarkPage: "/bookmark",
    Delete: "/delete",
  };
  
  export type RoutePaths = typeof routePaths[keyof typeof routePaths];