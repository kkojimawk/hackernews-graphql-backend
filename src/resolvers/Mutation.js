const bcrypt = require("bcryptjs");

//ユーザーの新規登録のリゾルバ
const signup = async (parent, args, context) => {
  //パスワードの設定
  const password = await bcrypt.hash(args.password, 10);
  //ユーザーの新規登録
  const user = await context.prisma.user.create({
    data: { ...args, password },
  });
  //JWTトークンの生成
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  //ユーザー情報とJWTトークンを返す
  return {
    token,
    user,
  };
};
