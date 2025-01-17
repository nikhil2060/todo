import { asyncError, errorHandler } from "@/middlewares/error";
import { Task } from "@/models/task";
import { connectDB } from "@/utils/database";
import { checkAuth } from "@/utils/features";

const handler = asyncError(async (req, res) => {
  if (req.method !== "GET")
    return errorHandler(res, 400, "Only GET method are allowed");

  await connectDB();

  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 400, "Login First");

  const tasks = await Task.find({ user: user._id });

  res.json({
    success: true,
    tasks,
  });
});

export default handler;
